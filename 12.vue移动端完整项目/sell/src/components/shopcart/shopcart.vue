<template>
    <div class="shopcart">
      <div class="content">
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
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .shopcart
    position: fixed
    width: 100%
    left: 0
    bottom: 0
    z-index: 50
    height: 48px
    .content
      display: flex
      background-color: #141d27
      color: rgba(255,255,255,0.4)
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


</style>

<script>
    export default {
        props: {
          selectFoods: {
            type: Array,
            default() {
              return [
                {
                  price: 10,
                  count: 3
                }
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
          }

        },
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {}
    }
</script>


