<template lang="html">
    <div class="car">
      <Nav></Nav>
    </div>
</template>
<style>

</style>
<script>

  import Nav from './../../components/Nav.vue'
  export default {
    data() {
      return {
        msg: "hello vue"
      }
    },
    components: {
      Nav
    }
  }
</script>
