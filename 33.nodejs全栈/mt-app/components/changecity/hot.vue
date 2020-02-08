<template>
    <div class="m-hcity">
      <dl>
        <dt>热门城市</dt>
        <dd v-for="(item, index) in list" :key="index">{{item.name === '市辖区'?item.province: item.name}}</dd>
      </dl>
    </div>
</template>

<style lang="scss">

  @import "@/assets/css/changecity/hot.scss";

</style>

<script>
    export default {
        layout: 'blank',
        data() {
            return {
              list: []
            }
        },
        async mounted() {
          let {status, data: {hots}} = await this.$axios.get('/geo/hotCity')
          if (status === 200) {
            this.list = hots
          }
        }
    }
</script>


