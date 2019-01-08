<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- 用于渲染展示一级路由
          一级路由从index.js里面开始
    -->
    <router-view class="main"></router-view>
    <!--<router-view name="title" class="left"></router-view>-->
    <!--<router-view name="img" class="right"></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  * {
    padding: 0;
    margin: 0;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  /*.left,.right {*/
    /*width: 49%;*/
    /*border: 1px solid gray;*/
    /*float: left;*/
  /*}*/

  /*.right {*/
    /*margin-left: -1px;*/
  /*}*/

</style>
