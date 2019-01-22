<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="foodWrapper">
      <div class="foodWrapper">
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image">
            <div class="back" @click="back">
              <i class="icon-arrow_lift"></i>
            </div>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}</span>
            <span class="rating">好评率{{food.rating}}</span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <transition name="fade">
            <div @click="addFirst($event)" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect></ratingselect>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  * { touch-action: pan-y; }
  .food
    position: fixed
    left: 0
    top: 0
    width: 100%
    bottom: 48px
    z-index: 30
    background-color: #fff
    transition: all 0.5s
    transform: translate3d(0,0,0)
    &.move-enter, &.move-leave-to
      transform: translate3d(100%,0,0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          color: #fff
          font-size: 20px
    .content
      padding: 18px
      position: relative
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7,17,27)
      .detail
        margin-bottom: 10px
        line-height: 10px
        font-size: 0
        .sell-count,.rating
          font-size: 10px
          color: rgb(147,153,159)
        .sell-count
          margin-right: 12px

      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240,20,20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: gray
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10px
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        font-size: 10px
        border-radius: 12px
        color: #fff
        background-color: rgb(0,160,220)
        transition: all 0.5s
        opacity: 1
        &.fade-enter,&.fade-leave-to
          opacity: 0



    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7,17,27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77,85,93)

</style>

<script>

    import BScroll from 'better-scroll'
    import cartcontrol from './../cartcontrol/cartcontrol.vue'
    import split from './../split/split.vue'
    import ratingselect from './../ratingselect/ratingselect.vue'

    export default {
        props: {
          food: {
            type: Object
          }
        },
        data() {
            return {
              showFlag: false
            }
        },
        mounted() {
          this.scroll = new BScroll(this.$refs.foodWrapper, {
            click: true
          })
        },
        methods: {
          show() {
            this.showFlag = true;
            // 在哪里出现在哪里调用，记得要用refresh
            this.$nextTick(()=>{
              if (this.scroll) {
                this.scroll.refresh();
              }
            })
          },
          back() {
            this.showFlag = false;
          },
          addFirst(event) {
            if (!event._constructed) {
              return;
            }
            this.$set(this.food,'count',1);
          }
        },
        components: {
          cartcontrol,
          split,
          ratingselect
        }
    }
</script>


