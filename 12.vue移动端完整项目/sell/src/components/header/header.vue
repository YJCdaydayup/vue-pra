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
            <icon class="icon" :name="classMap[seller.supports[0].type]" :size="1"></icon>
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
      <transition name="fade">
        <div v-if="detailShow" class="detail">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{seller.name}}</h1>
              <div class="star-wrapper">
                <star :score="seller.score" :size="48"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul v-if="seller.supports" class="supports">
                <li class="support-item" v-for="(item, index) in seller.supports">
                  <icon class="icon" :size="2" :name="classMap[seller.supports[index].type]"></icon>
                  <span class="text">{{seller.supports[index].description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">
                <p class="content">{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div @click="hideDetail" class="detail-close">
            <i class="icon-close"></i>
          </div>
        </div>
      </transition>

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
            margin-right: 4px
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
      /* 文字省略号处理 */
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
      /* 这个属性只生效在iOS系统上，最好写在前面 */
      -webkit-backdrop-filter: brightness(1.5) blur(4px)
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto
      background-color: rgba(7,17,27,0.8)
      /*transition: all 0.5s*/
      /*&.fade-transition*/
        /*opacity: 1*/
      /*&.fade-enter, &.fade-leave*/
        /*opacity: 0*/
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            width: 100%
            line-height: 16px
            height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255,255,255,0.2)
            .text
              padding: 0 12px
              font-size: 14px
              font-weight: 700
          .supports
            width: 80%
            margin: 0 auto
            font-size: 0
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              &:last-child
                margin-bottom: 0
              .icon
                vertical-align: top
                margin-right: 6px
              .text
                line-height: 16px
                font-size: 12px

          .bulletin
            width: 80%
            margin: 0 auto
            .content
              line-height: 24px
              margin: -4px 12px 0 12px
              font-size: 12px
              color: #fff

      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0  auto
        clear: both
        font-size: 32px


      /* 定义fade过渡动画 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>

<script>

    import star from './../star/star.vue'
    import icon from './../icon/icon.vue'

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
          star,
          icon
        },
        methods: {
          showDetail() {
            this.detailShow = true;
          },
          hideDetail() {
            this.detailShow = false;
          }
        }
    }
</script>


