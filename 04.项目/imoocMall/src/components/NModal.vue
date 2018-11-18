<template>
  <div>
      <div class="modalBox" v-if="nShow" :class="{'ease-in':nShow}">
        <div class="close" @click="closeModal">X</div>
        <div class="titleArea">
           <slot name="title"></slot>
        </div>
        <div class="btnArea">
           <slot name="btns"></slot>
        </div>
      </div>
    <div v-if="nShow" class="n-mask">
    </div>
  </div>
</template>
<style>

</style>

<script>

  import './../assets/css/nStyle.css'

  export default {
    // 这个变量的值只能从父组件传递过来，子组件是无法改变这个变量的值的
    props: ["nShow"],
    data() {
      return {
        msg: "hello vue"
      }
    },
    methods: {
      closeModal(){
        // 这里的$emit类似于jquery里面的trigger函数
        // 'close'一定是触发父组件里面的close函数
        this.$emit('close');
      }
    }
  }
</script>


