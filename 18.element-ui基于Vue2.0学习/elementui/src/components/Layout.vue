<template>
 <div>
    <el-button
    plain
    @click="open1">
    可自动关闭
  </el-button>
  <el-button
    plain
    @click="open2">
    不会自动关闭
    </el-button>
    <hr color="red">
    <button @click="show">展示</button>
    <transition name="slide">
      <div class="alert" v-show="visible">
        <h3>这是标题</h3>
        <p>这是提示文案这是提示文案这是提示文案这是提示文案这是提这是提示文案这是提示文案这是提示文案这是提示文案这是提</p>
      </div>
    </transition>
 </div>
</template>

<style lang="stylus" scoped>
  .alert
    padding 10px
    background-color #fff
    margin 10px 
    border-radius 6px
    transform translate3d(0,0,0)
    &.slide-enter-active,&.slide-leave-active
      transition all 0.5s linear 
    &.slide-enter
      transform translate3d(100%,0,0)
    &.slide-leave-to
      transform translate3d(100%,0,0)



</style>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
        let timer = setTimeout(()=>{
          this.visible = false;
        },1000);
      },
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('em', { style: 'color: red'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
</script>