<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <!-- 1.这里一般写一个，且只会渲染第一个'/'路由下的页面，如果写了多个，就会去'/'下的components找组件
         如果不够数量，就会将一个组件生成多次展示出来
         2.也会导致一级路由的页面都会有多个生成出来，所以这里一般写一个
     -->
    <router-view></router-view>
    <!--<router-view></router-view>-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
