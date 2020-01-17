<template>
  <section class="container">
    <h3>token: {{$store.state.city.token}}</h3>
    <nuxt-link class="button" to="/about">{{msg}}</nuxt-link>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
    <button @click="addList">add</button>
  </section>
</template>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>

<script>

import axios from 'axios'

export default {
  layout: 'modal',
  data() {
    return {
      msg: '123456'
    }
  },
  mounted() {
    console.log(this.$router)
  },
  methods: {
    addList() {
      this.$store.commit('city/add', 123)
    }
  },
  watch: {
    'msg'(oldV, newV) {
      console.log(oldV)
      console.log(newV)
    }
  },
  async asyncData() {
    let {status, data: {list}} = await axios.get('http://127.0.0.1:3000/city/list');
    console.log(status)
    if (status === 200) {
      return {
        list
      }
    } 
  },
  beforeRouteLeave (to, from, next) {
    console.log('路由判断')
    next();
  }
}
</script>
