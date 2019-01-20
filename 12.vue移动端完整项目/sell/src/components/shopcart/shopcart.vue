<template>
    <div class="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highLight':totalCount>0}">
              <i class="icon-shopping_cart"></i>
            </div>
            <div v-show="totalCount>0" class="num">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highLight': totalCount>0}">{{totalPrice}}元</div>
          <div class="desc">另需配送费¥{{deliveryPrice}}</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass" @click.stop.prevent="pay">
            {{payDesc}}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <transition-group tag="p" name="move" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-for="(ball,index) in balls" v-show="ball.show" :key="String(index)">
            <div class="inner inner-hook"></div>
          </div>
        </transition-group>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food border-1px" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span class="">¥{{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </li>
             </ul>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="list-mask" v-show="listShow" @click="hide"></div>
      </transition>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

  @import "./../../common/stylus/mixin.styl"

  .shopcart
    position: fixed
    width: 100%
    left: 0
    bottom: 0
    height: 48px
    z-index: 50
    .content
      display: flex
      background-color: #141d27
      color: rgba(255,255,255,0.4)
      z-index: 100
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          // 这样设置就是一个圆了
          border-radius: 50%
          background-color: rgb(20,29,39)
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background-color: #2b343c
            display: flex
            align-items: center
            justify-content: center
            &.highLight
              background-color: rgb(0,160,220)
              .icon-shopping_cart
                color: #fff
            .icon-shopping_cart
              font-size: 24px
              color: #80858a
              &.highLight
                color: #fff
           .num
             position: absolute
             top: 0
             right: 0
             width: 24px
             height: 16px
             line-height: 16px
             text-align: center
             border-radius: 16px
             font-size: 9px
             font-weight: 400
             color: white
             background-color:rgb(240,20,20)
             box-shadow: 0 4px 8px rgba(0,0,0,0.4)
        .price
          display: inline-block
          vertical-align: top
          line-height: 24px
          margin-top: 12px
          box-sizing: border-box
          padding-right: 12px
          border-right: 1px solid rgba(255,255,255,0.1)
          font-size: 16px
          font-weight: 700
          &.highLight
            color: white
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 5px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 100px
        width: 100px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          background-color: #2b333b
          &.not-enough
            background-color: #2b333b
          &.enough
            background-color: #00b43c
            color: #fff


    .ball-container
      position: fixed
      .ball
        // 做成fixed布局,先定义最终落点位置，在哪个地方落点，小球的标签就写在那个组件下
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 1s cubic-bezier(0.49,-0.29,-0.75,0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background-color: rgb(0,160,220)
          transition: all 1s linear

    .shopcart-list
      position: absolute
      left: 0
      z-index: -1
      width: 100%
      top: 0
      transition: all 1s ease;
      transform: translate3d(0,-100%,0)
      &.fold-enter, &.fold-leave-to
        transform: translate3d(0,0,0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background-color: #f3f5f7
        border-bottom: 1px solid rgba(7,17,27,0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7,17,27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0,160,220)
      .list-content
        padding: 0 18px
        max-height: 217px
        background-color: #fff
        overflow: hidden
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          border-1px(rgba(7,17,27,0.1))
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7,17,27)
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240,20,20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 6px


    .list-mask
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      opacity: 1
      background-color: rgba(29,29,29,0.8)
      z-index: -2
      transition: all 0.3s
      &.fade-enter,&.fade-leave-to
        opacity: 0

</style>

<script>

    import cartcontrol from './../cartcontrol/cartcontrol.vue'
    import BScroll from 'better-scroll'

    export default {
        props: {
          selectFoods: {
            type: Array,
            default() {
              return [
              ]
            }
          },
          deliveryPrice: {
            type: Number,
            default: 0
          },
          minPrice: {
            type: Number,
            default: 0
          }
        },
        components: {
          cartcontrol
        },
        computed: {
          totalPrice() {
            let total = 0;
            this.selectFoods.forEach((food)=>{
              total += food.price * food.count
            })
            return total;
          },
          totalCount() {
            let count = 0
            this.selectFoods.forEach((food)=>{
              count += food.count
            })
            return count;
          },
          payDesc() {
            if (this.totalPrice === 0) {
              return `¥${this.minPrice}元起送`
            }else if (this.totalPrice < this.minPrice) {
              let diff = this.minPrice - this.totalPrice;
              return `还差¥${diff}元起送`
            }else {
              return '去结算'
            }
          },
          payClass() {
            if (this.totalPrice < this.minPrice) {
              return 'not-enough';
            }else {
              return 'enough'
            }
          },
          listShow() {
            if (!this.totalCount) {
              this.fold = true;
              return false;
            }
            let show = !this.fold;
            if (show) {
              this.$nextTick(()=>{
                if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs.listContent,{
                    click: true,
                    probeType: 3
                  });
                }else {
                  this.scroll.refresh();
                }
              })
            }
            return show;
          }
        },
        data() {
            return {
                msg: "hello vue",
                balls: [
                  {
                    show: false
                  },
                  {
                    show: false
                  },
                  {
                    show: false
                  },
                  {
                    show: false
                  },
                  {
                    show: false
                  }
                ],
              dropBalls: [],
              fold: true
            }
        },
        methods: {
          pay() {
            if (this.totalPrice < this.minPrice) {
              return;
            }

            alert(`支付${this.totalPrice}`)
          },
          hide() {
            this.fold = !this.fold;
          },
          toggleList() {
            if (!this.totalCount) {
              return;
            }
            this.fold = !this.fold;
          },
          drop(el) {
            for (let i=0;i<this.balls.length;i++) {
              let ball = this.balls[i];
              if (!ball.show) {
                ball.show = true;
                ball.el = el;
                this.dropBalls.push(ball);
                return;
              }
            }
          },
          beforeEnter(el) {
            let count = this.balls.length;
            while(count --) {
              let ball = this.balls[count];
              if (ball.show) {
                // 返回的相当于body的rect
                let rect = ball.el.getBoundingClientRect();
                let x = rect.left - 32;
                let y = -(window.innerHeight - rect.top - 22);
                el.style.display = '';
                el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                el.style.transform = `translate3d(0,${y}px,0)`;
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                inner.style.transform = `translate3d(${x}px,0,0)`;
              }
            }
          },
          enter(el) {
            let rf = el.offsetHeight;
            this.$nextTick(() => {
              el.style.webkitTransform = 'translate3d(0,0,0)';
              el.style.transform = 'translate3d(0,0,0)';
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.webkitTransform = 'translate3d(0,0,0)';
              inner.style.transform = 'translate3d(0,0,0)';
            })
          },
          afterEnter(el) {
            let ball = this.dropBalls.shift();
            if (ball) {
              ball.show = false;
              el.style.display = 'none'
            }
          },
          empty() {
            this.selectFoods.forEach((food)=>{
              food.count = 0;
            })
          }
        }
    }
</script>


