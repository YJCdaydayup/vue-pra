<template>
  <div>
    <router-link class="item" to='/animation'>动画</router-link>
    <router-link class="item" to='/layout'>布局</router-link>
    <router-link class="item" to="/container">布局容器</router-link>
    <router-link class="item" to="/form">表格相关组件</router-link>
    <router-link class="item" to="/navMenue">导航菜单</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .item
    color: black
    &.active
      color: red

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
