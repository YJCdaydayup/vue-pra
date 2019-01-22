<template>
  <div class="anione">
    <button @click="showMenu" class="btn">{{text}}</button>
    <transition name="move">
      <div class="menu" v-show="show">
        <div class="inner inner-1">1</div>
        <div class="inner inner-2">2</div>
        <div class="inner inner-3">3</div>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .anione
    .btn
      position: fixed;
      bottom: 50px
      right: 50px
      z-index: 10
      width: 50px
      height: 50px
      line-height: 50px
      border-radius: 50%
      border: none
      color: #fff
      background-color: blue
      font-size: 18px
      outline: none
    .menu
      position: fixed
      bottom: 50px
      right: 10px
      width: 50px
      height: 50px
      border-radius: 50%
      transition: all .7s
      .inner
        transform: translate3d(0, 0, 0)
        display: inline-block
        position: absolute
        width: 30px
        height: 30px
        line-height: 30px
        border-radius: 50%
        background: red
        text-align: center
        color: #fff
        transition: all .4s
      .inner-1
        top: -50px
        left: -20px
      .inner-2
        left: -60px
        top: -30px
      .inner-3
        left: -80px
        top: 10px
      &.move-enter, &.move-leave-to
        .inner-1
          transform: translate3d(0, 60px, 0)
          transition-delay: .3s
        .inner-2
          transform: translate3d(40px, 40px, 0)
          transition-delay: .2s
        .inner-3
          transform: translate3d(60px, 0, 0)
          transition-delay: .1s



</style>

<script>

  export default {
    data() {
      return {
        show: false
      }
    },
    computed: {
      text() {
        return this.show ? "收" : "开";
      }
    },
    methods: {
      showMenu() {
        this.show = !this.show;
      }
    }
  }

</script>
