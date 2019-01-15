<template>
  <div class="icon" :class="iconClass">
    <div class="pic" :class="picClass"></div>
  </div>
</template>
<!--this.classMap = ['decrease','discount','special','invoice','guarantee']-->
<style lang="stylus" rel="stylesheet/stylus">

  @import "./../../common/stylus/mixin.styl"

  .icon
    display: inline-block
    &.icon_1
      .pic
        width: 12px
        height: 12px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease_1
          bg-image('decrease_1')
        &.discount_1
          bg-image('discount_1')
        &.guarantee_1
          bg-image('guarantee_1')
        &.invoice_1
          bg-image('invoice_1')
        &.special_1
          bg-image('special_1')
    &.icon_2
      .pic
        width: 16px
        height: 16px
        background-size: 16px 16px
        background-repeat: no-repeat
        &.decrease_2
          bg-image('decrease_2')
        &.discount_2
          bg-image('discount_2')
        &.guarantee_2
          bg-image('guarantee_2')
        &.invoice_2
          bg-image('invoice_2')
        &.special_2
          bg-image('special_2')
    &.icon_3
    .pic
      width: 12px
      height: 12px
      background-size: 12px 12px
      background-repeat: no-repeat
      &.decrease_3
        bg-image('decrease_3')
      &.discount_3
          bg-image('discount_3')
      &.guarantee_3
          bg-image('guarantee_3')
      &.invoice_3
          bg-image('invoice_3')
      &.special_3
          bg-image('special_3')


</style>

<script>

  export default {
    props: {
      size: {
        type: Number
      },
      name: {
        type: String
      }
    },
    data() {
      return {
    }
    },
    created() {
      this.picClass = this.name + '_' + this.size;
      this.iconClass = 'icon' + '_' + this.size;
    }
  }

</script>
