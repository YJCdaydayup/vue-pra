<template>
  <div class="hello">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link class="tab-link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tab-link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tab-link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import Header from './header/header.vue'

  const ERR_OK = 0

export default {
  name: 'HelloWorld',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': Header,
  },
  created() {
    this.$http.get('/api/seller').then((res)=>{
      res = res.data;
      if (res.errno === ERR_OK) {
        console.log(res.data);
        this.seller = res.data;
      }

    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  // 这个是stylus特有的，scss，less也有的
  @import "./../common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,24,0.1))
    .tab-item
      flex: 1
      text-align: center
    .tab-link
      display: block
      font-size: 14px
      color: rgb(77,85,93)
      &.active
       color: red

</style>
