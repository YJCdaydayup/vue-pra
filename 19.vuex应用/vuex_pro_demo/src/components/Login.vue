<template>
  <div class="l-box">
    <v-header :goBack="true" :lay-index="2">
      <div ref="div" class="header-title" slot="title">第二个页面</div>
    </v-header>
  <vue-scroll>
    <div class="content">
      <button @click="$router.go(-1)">返回</button>
      <input type="text" placeholder="请输入用户名" v-model="userName">
      <button @click="login">登录</button>
      <h3>{{`${myCount}个`}}</h3>
      <h4>{{newCount}}</h4>
      <button @click="add">Add</button>
      <button @click="notice">通知</button>
    </div>
  </vue-scroll>
  </div>
</template>

<script>
  import Head from './Head.vue'
  import {mapState} from 'vuex'
  import {showMsgNotification} from './../tools/notice'

  export default {
    name: "Login",
    backBtn: true,
    beforeCreate() {
      console.log('LOgin de beforeCreate')
    },
    data() {
      return {
        userName: '',
        newCount: ''
      }
    },
    computed: {
      // ...mapState({
      //   myCount(state){
      //    return state.count
      //   }
      // })
      myCount() {
        return this.$store.state.count
      }
    },
    watch: {
      'myCount'(o, n) {
        this.newCount = o
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
      },
      add() {
        this.$store.commit('increment', {
          len: 1
        })
      },
      notice() {
        this.$print(this.$refs.div)
      },
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
