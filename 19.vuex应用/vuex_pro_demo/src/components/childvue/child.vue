<template>
    <div class="child">
      <sun></sun>
    </div>
</template>

<script>

  import Sun from './sunvue/sun'

    export default {
        name: "child",
        props: {
          childProp:{
            type: Boolean,
            default: false
          }
        },
      components: {
          Sun
      },
    }
</script>

<style scoped>

</style>
