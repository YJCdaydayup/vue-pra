<template>
  <div class="h-box">
    <v-header :goBack="false" :lay-index="1">
      <div class="header-title" slot="title">首页</div>
    </v-header>
    <div class="h-content">
      <button @click="goTologout">下一个页面</button>
    </div>
  </div>
</template>

<script>

  import Head from './Head.vue'

  export default {
    name: "Home",
    methods: {
      goTologout() {
        this.$router.push('/two');
      }
    },
    components: {
      vHeader: Head
    },
  }
</script>

<style scoped>



  .h-content {
    padding-top: 64px;
  }

  /*.header-title {*/
  /*  color: white;*/
  /*  font-size: 20px;*/
  /*}*/

</style>
