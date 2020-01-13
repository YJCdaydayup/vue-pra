<template>
  <div class="box1">
    <router-view class="appView"></router-view>
    <div class="tab">
      <router-link class="item" to='/animation'>
        <i class="el-icon-delete"></i>动画
      </router-link>
      <router-link class="item" to='/layout'>
         <i class="el-icon-delete"></i>布局</router-link>
      <router-link class="item" to="/container">
        <i class="el-icon-search"></i>布局</router-link>
      <router-link class="item" to="/form">
        <i class="el-icon-edit"></i>表格</router-link>
      <router-link class="item" to="/navMenue">
        <i class="el-icon-share"></i>导航</router-link>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  
  .box1
    position absolute
    left 0
    top 0
    right 0
    bottom 0;
    background-color orange

  .appView 
    position absolute
    left 0
    top 0
    right 0
    bottom 50px
    background-color #ccc

  .tab
    width 100%
    position fixed
    bottom 0
    display flex
    justify-content space-between
    border-top 1px solid rgba(0,0,0,0.1)
    background-color  #fff
    .item
      height 50px
      line-height 50px
      flex 1
      color: black
      text-align center
      text-decoration none
      font-size 12px
      display flex
      flex-direction column
      i
        position relative
        top 8px
        font-size 16px
      &.active
        color: red
        font-size 13px
        i
          font-size 17px


</style>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
