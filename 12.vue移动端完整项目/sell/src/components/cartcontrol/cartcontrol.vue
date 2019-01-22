<template>
    <div class="cartcontrol">
      <transition name="move">
        <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
          <span class="inner icon-remove_circle_outline"></span>
        </div>
       </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      transition: all 0.4s linear
      opacity: 1
      transform: translate3d(0,0,0)
      .inner
        display: inline-block
        padding: 6px
        font-size: 24px
        color: rgb(0,160,220)
        line-height: 24px
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3d(24px,0,0)
        .inner
          transform: rotate(180deg)
    .cart-count
      vertical-align: top
      width: 12px
      text-align: center
      padding-top: 6px
      line-height: 24px
      font-size: 10px
      color: rgb(147,153,159)
      display: inline-block
    .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      color: rgb(0,160,220)
      line-height: 24px

</style>

<script>

    import Vue from 'vue'

    export default {
        props: {
          // 从父级拿到这个food对象
          food: {
            type: Object
          }
        },
        data() {
            return {
                msg: "hello vue"
            }
        },
        methods: {
          addCart(event) {
            if (!event._constructed) {
              return ;
            }
            if (!this.food.count) {
//              this.$set(this.food,'count',1)
              Vue.set(this.food,'count', 1);
            }else {
              this.food.count ++;
            }

            // 派发事件传出这个dom对象
            this.$emit('cart-add',event.target);
          },
          decreaseCart(event) {
            if (!event._constructed) {
              return;
            }
            if (this.food.count) {
              this.food.count --;
            }
          }
        }
    }
</script>


