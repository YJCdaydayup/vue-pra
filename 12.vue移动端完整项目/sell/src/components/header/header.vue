<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" alt="" width="64" height="64">
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
      </div>
      <div class="bulletin-wrapper"></div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

  // css文件必须写相对路径，不可使用@路径
  @import "./../../common/stylus/mixin.styl"

  .header
    color: #fff
    background-color: #000
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
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
            font-size: 12px




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

            }
        },
        created(){
          this.classMap = ['decrease','discount','special','invoice','guarantee']
        },
        components: {

        },
        methods: {
        }
    }
</script>


