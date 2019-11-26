<template>
  <div class="lu-box">
    <v-header>
      <div class="header-title" slot="title">我的</div>
    </v-header>
    <div class="lu-content">
      <h3>欢迎登录{{userName}}</h3>
      <button @click="logout">退出登录</button>
    </div>
  </div>
</template>

<script>

  import Head from './Head'

  export default {
    name: "Logout",
    computed: {
      userName() {
        return this.$store.state.userName;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout').then(()=>{
          this.$router.push('/login');
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
    margin-top: 64px;
  }

  .header-title {
    color: white;
    font-size: 20px;
  }

</style>
