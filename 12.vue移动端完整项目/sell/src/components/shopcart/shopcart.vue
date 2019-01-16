<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <i class="icon-shopping_cart"></i>
            </div>
          </div>
          <div class="price">0元</div>
          <div class="desc">另需配送费¥{{deliveryPrice}}</div>
        </div>
        <div class="content-right"></div>
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
            .icon-shopping_cart
              font-size: 24px
              color: #80858a
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
          color: rgba(255,255,255,0.4)
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 5px
          line-height: 24px
          font-size: 10px
          color: rgba(255,255,255,0.4)
      .content-right
        flex: 0 0 100px
        width: 100px
        height: 48px
        background-color: rgba(255,255,255,0.1)



</style>

<script>
    export default {
        props: {
          deliveryPrice: {
            type: Number,
            default: 0
          },
          minPrice: {
            type: Number,
            default: 0
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


