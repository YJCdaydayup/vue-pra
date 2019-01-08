<template>
    <div class="header" @click="push">
      我是header sca
    </div>
</template>
<style>
  .header {
    padding: 2rem;
    background-color: red;
  }
</style>

<script>
    export default {
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {

        },
        methods: {
          push() {
            this.$emit('push');
          }
        }
    }
</script>


