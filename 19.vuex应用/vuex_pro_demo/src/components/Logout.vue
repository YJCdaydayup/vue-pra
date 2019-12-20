<template>
  <div class="lu-box">
    <v-header :goBack="true" :lay-index="3">
      <div class="header-title" slot="title">第三个页面</div>
    </v-header>
    <div class="lu-content">
      <h3>欢迎登录{{userName}}</h3>
      <button @click="$router.go(-1)">返回</button>
      <button @click="logout">返回首页</button>
    </div>
  </div>
</template>

<script>

  import Head from './Head'

  export default {
    name: "Logout",
    beforeCreate() {
      console.log('Logout de beforeCreate')
    },
    computed: {
      userName() {
        return this.$store.state.userName;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout').then(()=>{
          this.$router.push('/one');
        })
      }
    },
    components: {
      vHeader: Head
    }
  }
</script>

<style scoped>

  .lu-content {
    padding-top: 64px;
  }

  .header-title {
    color: white;
    font-size: 20px;
  }

</style>
