<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star class="star" :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>
              <span>元</span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>
              <span>元</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>
              <span>分钟</span>
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite" :class="{active:favorite}" @click="toggleFavorite($event)"></span>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
      </div>
      <ul v-if="seller.supports" class="supports">
        <li class="support-item border-1px" v-for="(item, index) in seller.supports">
          <icon class="icon" :size="2" :name="classMap[seller.supports[index].type]"></icon>
          <span class="text">{{seller.supports[index].description}}</span>
        </li>
      </ul>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item border-1px" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

  @import "./../../common/stylus/mixin.styl"

  * {
    touch-action: none;
  }

  .seller
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      padding: 18px
      position: relative
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .desc
        padding-bottom: 18px
        font-size: 0
        border-1px(rgba(7, 17, 27, 0.1))
        .star
          display: inline-block
          vertical-align: top
          margin-right: 8px
        .text
          display: inline-block
          vertical-align: top
          margin-right: 12px
          font-size: 10px
          color: rgb(77, 85, 93)
          line-height: 18px

      .remark
        display: flex
        padding-top: 18px
        .block
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border-right: none
          h2
            margin-bottom: 4px
            color: rgb(147, 153, 159)
            font-size: 10px
            line-height: 10px
          .content
            line-height: 24px
            font-size: 10px
            color: rga(7, 17, 27)
            font-weight: 200
            .stress
              font-size: 24px

      .favorite
        position: absolute
        right: 18px
        top: 18px
        width: 36px
        text-align: center
        .icon-favorite
          display: block
          line-height: 24px
          font-size: 24px
          color: #d4d6d9
          margin-bottom: 4px
          &.active
            color: rgb(240, 20, 20)
        .text
          line-height: 10px
          font-size: 10px
          color: rgb(77, 85, 93)

    .bulletin
      padding: 18px 18px 0 18px
      .title
        margin-bottom: 8px
        color: rgb(7, 17, 27)
        font-size: 14px
        line-height: 14px
      .content-wrapper
        padding: 0 12px 16px 12px
        border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height: 24px
          font-size: 12px
          color: rgb(240, 20, 20)
          font-weight: 200
    .supports
      padding: 0 18px
      .support-item
        font-size: 0
        padding: 16px 12px
        line-height: 16px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
        .text
          display: inline-block
          font-size: 12px
          vertical-align: top
          color: rgb(7, 17, 27)
        .icon
          display: inline-block
          vertical-align: top
          margin-left: 6px

    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        font-size: 14px
        line-height: 14px
        color: rgb(7, 17, 27)
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
    .info
      padding: 18px 18px 0 18px
      .title
        padding-bottom: 12px
        color: rgb(7, 17, 27)
        font-size: 14px
        line-height: 14px
        border-1px(rgba(7, 17, 27, 0.1))
      .info-item
        padding: 16px 12px
        font-size: 12px
        color: rgb(7, 17, 27)
        line-height: 16px
        font-weight: 200
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()


</style>

<script>

  import star from './../star/star.vue'
  import split from './../split/split.vue'
  import BScroll from 'better-scroll'
  import icon from './../icon/icon.vue'
  import {saveToLocal, loadFromLocal} from './../../common/js/store'

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        msg: "hello vue",
        favorite: (()=>{
          return loadFromLocal(this.seller.id,'favorite',false)
        })()
      }
    },
    computed: {
      favoriteText() {
        return this.favorite ? '收藏' : '未收藏'
      }
    },
    watch: {
      seller() {
        this._initScroll()
        this._initPics()
      },
    },
    mounted() {
      this._initScroll()
      this._initPics()
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      toggleFavorite(event) {
        if (!event._constructed) {
          return;
        }
        this.favorite = !this.favorite;
        saveToLocal(this.seller.id,'favorite',this.favorite);
      },
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.seller, {
            click: true
          })
        } else {
          this.$nextTick(()=> {
            this.scroll.refresh();
          })
        }
      },
      _initPics() {
        if (this.seller.pics) {
          let picWidth = 120;
          let margin = 6;
          let width = (picWidth + margin) * this.seller.pics.length - margin;
          this.$refs.picList.style.width = width + 'px';
          this.$nextTick(() => {
            if (!this.picScroll) {
              this.picScroll = new BScroll(this.$refs.picWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            } else {
              this.picScroll.refresh();
            }
          })
        }
      }
    },
    components: {
      star,
      split,
      icon
    }
  }
</script>

