<template>
  <div>
    <input type="text" v-model="inputText">
    <input type="text" v-model="demo.name">
    <div>{{val}}</div>
  </div>
</template>

<style>
  input {
    width: 100px;
    height: 36px;
    border: 1px solid red;
  }
</style>

<script>

  export default {
    data() {
      return {
        inputText: '',
        val: '',
        demo: {
          name: 'abc'
        }
      }
    },
    computed: {
//      newName() {
//        return this.demo.name;
//      }
    },
    methods: {},
    watch: {
      inputText(val,old) {
        this.val = val;
        console.log(old)
      },
//      newName(val) {
//        this.val = val;
//      },
      demo: {
        handler(val, oldVal) {
//          console.log(val.name);
          console.log(oldVal.name  === val.name)
        },
        deep: true
      },
      'demo.name'(val, oldVal) {
//        console.log(val + 'aaa');
      }
    }
  }

</script>
