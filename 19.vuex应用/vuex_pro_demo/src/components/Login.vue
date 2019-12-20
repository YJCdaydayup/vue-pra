<template>
  <div class="l-box">
    <v-header :goBack="true" :lay-index="2">
      <div class="header-title" slot="title">第二个页面</div>
    </v-header>
    <button @click="$router.go(-1)">返回</button>
    <input type="text" placeholder="请输入用户名" v-model="userName">
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import Head from './Head.vue'

  export default {
    name: "Login",
    backBtn: true,
    beforeCreate() {
      console.log('LOgin de beforeCreate')
    },
    data() {
      return {
        userName: '',
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          token: 1,
          userName: this.userName
        }).then(() => {
          this.$router.push('/three');
        })
      }
    },
    components: {
      vHeader: Head
    }
  }
</script>

<style scoped>


  .l-box {
    padding-top: 64px;
  }
</style>
