<template>
    <div class="">
        <dl class="m-categroy">
          <dt>按拼音首字母选择：</dt>
          <dd v-for="(item, index) in list" :key="index">
            <a :href="'#city-' + item">{{item}}</a>
          </dd>
        </dl>
      <dl class="m-categroy-section" v-for="(item, index) in block" :key="index">
        <dt :id="'city-'+ item.title">{{item.title}}</dt>
        <dd>
          <!-- 可以考虑在dd里面遍历span -->
          <span v-for="c in item.city" :key="c">{{c}}</span>
        </dd>
      </dl>
    </div>
</template>

<style lang="scss">

  @import "@/assets/css/changecity/categroy.scss";

</style>

<script>

  import pyjs from 'js-pinyin'

    export default {
        data() {
            return {
                list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                block: [

                ]
            }
        },
        async mounted() {
          let self = this
          let blocks = []
          let {status, data: {cities}} = await self.$axios.get('/geo/city')
          if (status === 200) {
            let p
            let c
            let d = {} // 保存每个拼音字母下对应的数组
            cities.forEach(item => {
              // 获取全拼音,并拿到首字母
              p = pyjs.getFullChars(item).toLocaleLowerCase().slice(0, 1)
              // 拿到首字母的code值,0是固定参数
              c = p.charCodeAt(0)
              //
              if (c > 96 && c < 123) {
                // 异常
                if (!d[p]) {
                  d[p] = []
                }
                d[p].push(item)
              }
            })
            // 使用for of遍历对象
            for (let [k ,v] of Object.entries(d)) {
              blocks.push({
                title: k.toLocaleUpperCase(),
                city: v
              })
            }
            // 排序对象，a,b代表对象里面的元素，然后拿到元素的某个属性进行排序，这里是title的askll码值比较的
            blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
            self.block = blocks
          }

        }
    }
</script>


