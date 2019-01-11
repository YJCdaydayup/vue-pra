<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" alt="" width="64px" height="64px">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{ seller.name }}</span>
          </div>
          <div class="description">
            {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
          </div>
          <!-- v-if如果为false，里面的操作都不解析了，数据获取是异步的，没过来的时候页面直接拿第0个元素就会报错 -->
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{ seller.supports[0].description }}</span>
          </div>
        </div>
        <div @click="showDetail" v-if="seller.supports" class="support-count">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div @click="showDetail" class="bulletin-wrapper">
        <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" alt="">
      </div>
      <div v-if="detailShow" class="detail"></div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

  // css文件必须写相对路径，不可使用@路径
  @import "./../../common/stylus/mixin.styl"

  .header
    color: #fff
    position: relative
    background-color: rgba(7,17,27,0.5)
    overflow: hidden
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size: 0
      position: relative
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px

      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .description
          margin-bottom: 8px
        .title
          margin: 2px 0 8px 0
          .brand
            display:inline-block
            /* 同级图片和文字元素对齐方式:vertical-align */
            vertical-align: top
            width: 30px
            height 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          font-size: 0
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px
            font-size: 10px

      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background-color: rgba(0,0,0,0.2)
        text-align: center
        .count
          font-size: 10px
          vertical-align top
        .icon-keyboard_arrow_right
          font-size: 10px
          line-height: 24px
          margin-left: 2px

    .bulletin-wrapper
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      position: relative
      background-color: rgba(7,17,27,0.2)
      .bulletin-title
        display: inline-block
        width: 22px
        height: 12px
        vertical-align: top
        margin-top: 8px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        font-size: 10px
        font-weight: 200
        margin: 0 4px
        vertical-align: top
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        top: 8px
        font-size: 10px

    .background
      position: absolute
      top: 0
      left: 0
      z-index: -1
      filter: blur(10px)
      width: 100%
      height: 100%

    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto
      background-color: rgba(7,17,27,0.8)

</style>

<script>
    export default {
        props: {
          seller: {
            type: Object
          }
        },
        data() {
            return {
              detailShow: false
            }
        },
        created(){
          this.classMap = ['decrease','discount','special','invoice','guarantee']
        },
        components: {

        },
        methods: {
          showDetail() {
            this.detailShow = true
          }
        }
    }
</script>


