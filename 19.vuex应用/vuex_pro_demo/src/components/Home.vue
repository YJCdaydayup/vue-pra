<template>
  <div class="h-box">
    <v-header :goBack="false">
      <div  class="header-title" slot="title">首页</div>
    </v-header>
    <div class="h-content">
      <button @click="goTologout">去登出页面</button>
    </div>
  </div>
</template>

<script>

  import Head from './Head.vue'

  export default {
    name: "Home",
    methods: {
      goTologout() {
        this.$router.push('/logout');
      }
    },
    components: {
      vHeader: Head
    },
  }
</script>

<style scoped>
  .h-content {
    margin-top: 64px;
  }

  .header-title {
    color: white;
    font-size: 20px;
  }

</style>
