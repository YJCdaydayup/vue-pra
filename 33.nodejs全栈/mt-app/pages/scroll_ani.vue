<template>
  <div ref="container" class="container">
    <div class="page1"></div>
    <div class="page2">
      <transition name="slider-left">
        <div class="info" v-show="visible2">
          <h3>我们是一家人</h3>
          <p>We Are Family！！！</p>
        </div>
      </transition>
      <span ref="p2Info" style="margin-top: 30px; visibility: hidden;">庙殿</span>
    </div>
    <div class="page3">
      <div ref="p3Info" class="info">
        <h3>跟我走吧，天亮就出发</h3>
        <p>Follow With Me When The Light Is On！！！</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  @keyframes leftAnimation
    0%
      transition translate3d(-100%, -100%, 0)
      opacity 0

    100%
      transition translate3d(0, 0, 0)
      opacity 1


  .container
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    .page1
      width 100%
      height 100%
      background-color chartreuse
    .page2
      position relative
      width 100%
      height 100%
      background-color lavenderblush
      display flex
      flex-direction column
      justify-content center
      align-items center
      .info
        background-color #2bb8aa
        border-radius 8px
        padding 20px
        font-weight 600
        color #fff
        transform translate3d(0, 0, 0)
        opacity 1
        &.slider-left-enter-active, &.slider-left-leave-active
          transition all 0.8s linear
        &.slider-left-enter, &.slider-left-leave-to
          opacity 0
          transform translate3d(-30%, 0, 0)
        >h3
          color #fff6db
    .page3
      width 100%
      height 100%
      background-color navajowhite

</style>

<script>

  export default {
    layout: 'blank',
    data() {
      return {
        visible2: false
      }
    },
    mounted() {
      let self = this
      let p2Info = this.$refs.p2Info
      self.md2 = p2Info.getBoundingClientRect().bottom
      console.log(self.md2)
      window.onscroll = function() {
        console.log(self.md2)
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        let screen = document.documentElement || document.body
        let scrollTop = screen.scrollTop || screen.scrollTop;
        if ((scrollTop + screen.clientHeight + 20) > self.md2) {
          self.visible2 = true
        }else if ((scrollTop + screen.clientHeight + 60) < self.md2){
          self.visible2 = false
        }
      }

    }
  }

</script>
