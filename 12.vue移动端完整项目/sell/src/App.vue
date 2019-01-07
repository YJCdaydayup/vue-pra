<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="{path: '/goods'}"></router-link>
        <!--<a v-link="{path: '/goods'}">商品</a>-->
      </div>
      <!--<div class="tab-item">-->
        <!--<a v-link="{path: '/ratings'}">评论</a>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path: '/seller'}">商家</a>-->
      <!--</div>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import Header from '@/components/header/header.vue'

  export default {
    components: {
      'v-header': Header
    }
  }

</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

</style>
