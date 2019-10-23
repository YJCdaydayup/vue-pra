<template>
  <div>
    <input type="text" v-model="inputText">
    <input type="text" v-model="demo.name">
    <child></child>
    <h3>{{val}}</h3>
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

  import Child from './childvue/child'

  export default {
    data() {
      return {
        inputText: '',
        val: '12',
        demo: {
          name: 'abc'
        }
      }
    },
    provide() {
      return {
        thisObj: this
      }
    },
    components: {
      Child
    },
    computed: {
//      newName() {
//        return this.demo.name;
//      }
    },
    methods: {

    },
    watch: {
      'val'(newv,oldv) {
        console.log('change...')
        console.log('newv',newv)
        console.log('oldv',oldv)
      },
//      newName(val) {
//        this.val = val;
//      },
      demo: {
        handler(newv,oldv) {
//          console.log(val.name);
//           console.log(oldVal.name  === val.name)
          console.log('change...')
          console.log('newv',newv)
          console.log('oldv',oldv)
        },
        deep: true
      },
      'demo.name'(newv,oldv) {
        // console.log('change...')
        // console.log('newv',newv)
        // console.log('oldv',oldv)
      }
    }
  }

</script>
