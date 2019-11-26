<template>
  <div class="l-box">
    <input type="text" placeholder="请输入用户名" v-model="userName">
    <button @click="login">登录</button>
  </div>
</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login',{
          token: 1,
          userName: this.userName
        }).then(()=>{
          this.$router.push('/home');
        })
      }
    }
  }
</script>

<style scoped>

</style>
