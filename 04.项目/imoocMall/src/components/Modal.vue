<template>
    <div>
      <div class="md-modal modal-msg md-modal-transition" :class="{'md-show': mdShow}">
        <div class="md-modal-inner">
          <div class="md-top">
            <div class="md-title">Login in</div>
            <button class="md-close" @click="closeModal">Close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
              <slot name="btnGroup"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
    </div>
</template>
<style>

</style>

<script>
    export default {
        // 这个变量的值只能从父组件传递过来，子组件是无法改变这个变量的值的
        props: ["mdShow"],
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {

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


