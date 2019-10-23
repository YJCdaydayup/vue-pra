<template>
    <div class="sun">
      sun
      <button @click="change">Change</button>
    </div>
</template>

<script>
    export default {
        name: "sun",
        props: {
          sunProps: {
            type: Boolean,
            default: false
          }
        },
      methods: {
        change() {
          // this.$parent.$parent.val = '123'
          this.thisObj.demo = {
            name: '' + parseInt(Math.random() * 10000)
          }
        }
      },
      inject: [
        'thisObj'
      ]
    }
</script>

<style scoped>

</style>
