<template>
  <section>
    <nuxt-link to="/index">跳转index</nuxt-link>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </section>
</template>

<style scoped>

</style>

<script>

  import axios from 'axios'

  export default {
    layout: 'layout',
    data() {
      return {
        list: []
      }
    },
//   async mounted() {
//      let self = this;
//      // 解构赋值
//      let {status, data:{list}} = await axios.get('/city/list')
//     if (status === 200) {
//       self.list = list;
//     }
//   }
    async asyncData() {
      // 在这个方法里面就不存在this了，拿到不
//      let self = this;
//      // 解构赋值
      let {status, data:{list}} = await axios.get('http://localhost:3000/city/list')
      if (status === 200) {
        // 赋值就通过return的方式，赋值给谁就把谁作为key即可
        // 这个时候就是完全渲染好了给浏览器的
        // 通过这种方式也会异步获取的数据扔给了浏览器端
       return {
         list
       }
     }
    },
    // 这里是用来处理vuex相关的数据的
    // fetch是请求到数据后，提交mutation修改vuex的state
    async fetch() {

    }
  }

</script>
