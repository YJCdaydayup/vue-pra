<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length">
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<style lang="scss">
  @import "@/assets/css/changecity/iselect.scss";
</style>

<script>

  import _ from 'lodash'

  export default {
    data() {
      return {
        province: [],
        pvalue: '',
        city: [],
        cvalue: '',
        input: '',
        cities: []
      }
    },
    watch: {
      async pvalue(newPvalue) {
        let self = this
        let {status, data: {city}} = await self.$axios.get(`/geo/province/${newPvalue}`)
        console.log(city)
        if (status === 200) {
          self.cvlaue = ''
          self.city = city.map(item => {
            return {
              value: item.id,
              label: item.name
            }
          })
        }
      }
    },
    async mounted() {
      let self = this
      let {status, data: {province}} = await this.$axios.get('/geo/province')
      if (status === 200) {
        self.province = province.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
      }
    },
    methods: {
      querySearchAsync: _.debounce(async function(query, cb) {
        let self = this;
        if (self.cities.length) {
          cb(self.cities.filter(item => item.value.indexOf(query) > -1))
        }else {
          let {status, data: {cities}} = await self.$axios.get('/geo/city')
          if (status === 200) {
            self.cities = cities.map(item => {
              return {
                value: item
              }
            })
            cb(self.cities.filter(item => item.indexof(query) > -1))
          }else {
            cb([])
          }
        }
      }),
      handleSelect(item) {
        alert(item.value)
      }
    }
  }

</script>
