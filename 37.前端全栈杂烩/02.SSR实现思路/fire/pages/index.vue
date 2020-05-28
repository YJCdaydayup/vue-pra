<template>
  <section class="container">
    <img src="../static/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <button @click="goAbout" class="button">
      About page
    </button>
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
  methods: {
    goAbout() {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>