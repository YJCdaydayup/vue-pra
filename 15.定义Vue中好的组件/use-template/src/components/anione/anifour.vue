<template>
  <div class="wrapper">
    <div class="ball-wrapper">
      <transition name="move">
        <div class="inner" v-show="count>0" @click="lose">
          <span class="icon icon-remove_circle_outline"></span>
        </div>
      </transition>
      <span class="text" v-show="count>0">{{count}}</span>
      <span class="icon icon-add_circle" @click="add"></span>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position: absolute
    left: 50%
    top: 50%
    width: 60px
    .ball-wrapper
      color: blue
      font-size: 0
      display: flex
      .icon
        font-size: 20px
        display: inline-block
        vertical-align: top
        flex: 1
      .icon-add_circle
        position: absolute;
        right: 0
      .text
        display: inline-block
        vertical-align: top
        font-size: 16px
        margin: 0 5px
        line-height: 20px
      .inner
        display: inline-block
        vertical-align: top
        transition: all 0.5s linear
        transform: translate3d(0, 0, 0)
        .icon-remove_circle_outline
          transition: all 0.5s linear
          transform: rotate(0deg)
        &.move-enter, &.move-leave-to
          transform: translate3d(38px, 0, 0)
          .icon-remove_circle_outline
            transform: rotate(180deg)

</style>

<script>

  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      add() {
        this.count++;
      },
      lose() {
        this.count--;
      }
    }
  }

</script>
