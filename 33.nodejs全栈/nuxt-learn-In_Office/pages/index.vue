<template>
  <section class="container">
    <nuxt-link class="button" to="/about">{{msg}}</nuxt-link>
  </section>
</template>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>

<script>
export default {
  data() {
    return {
      msg: '123456'
    }
  },
  mounted() {
    console.log(this.$router)
  },
  watch: {
    'msg'(oldV, newV) {
      console.log(oldV)
      console.log(newV)
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to);
    next();
  }
}
</script>
