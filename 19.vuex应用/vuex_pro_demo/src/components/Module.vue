<template>
  <div>
    {{countA}}
    {{getterA}}
    <hr color="red">
    <button @click="click">点击</button>
    <button @click="dispatch">派发</button>
    <button @click="getPatch">弹框</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    computed: {
      countA() {
        return this.$store.state.A.countA
      },
      getterA() {
        return this.$store.getters.getterA;
      }
    },
    methods: {
      click() {
        this.$store.commit('A/mutA');
      },
      dispatch() {
        return this.$store.dispatch('A/actionA').then(()=>{
          return '完ascjkascakjsncjaksncsa';
        }).catch(()=>{
          return 'failed'
        })
      },
      getPatch() {
        this.dispatch().then((res)=>{
          alert(res)
        }).catch((res)=>{
          alert(res)
        })
      }
    }
  }

</script>
