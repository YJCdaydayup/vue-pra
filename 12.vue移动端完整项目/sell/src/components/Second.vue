<template>
  <div class="hello">
    <button style="background-color: red">{{ params }}</button>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        params: ''
      }
    },
    mounted() {
      this.params = this.$route.query.orderId;
    },
    components: {
      setP() {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
