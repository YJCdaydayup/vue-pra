<template>
  <div class="ratings" ref="ratingsWrapper">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star class="star" :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star class="star" :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime + '分钟'}}</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :ratings="ratings" @content-toggle="toggleContent" @ratingtype-select="ratingtypeSelect"
                    :only-content="onlyContent" :select-type="selectType"></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in ratings" class="rating-item">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star class="star" :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">
                {{rating.deliveryTime}}分钟送达
              </span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="command">
                <span class="icon"
                      :class="{'icon-thumb_down': rating.rateType==1,'icon-thumb_up': rating.rateType==0}"></span>
                <span v-for="item in rating.recommend" class="item">
                  {{item}}
                </span>
              </div>
              <div class="time">{{rating.rateTime | formatDate}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

  .ratings
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        padding: 6px 0
        /* 适配iphone宽度太短 */
        @media only screen and (max-width: 320px)
          flex: 0 0 85px
          width: 85px
        .score
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
          margin-bottom: 6px
        .title
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
          margin-bottom: 8px
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding-left: 24px
        padding-top: 6px
        @media only screen and (max-width: 320px)
          padding-left: 2px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            font-size: 12px
            color: rgb(7, 17, 27)
            vertical-align: top
            line-height: 18px
          .star
            display: inline-block
            margin: 0 12px
            vertical-align: top
          .score
            display: inline-block
            font-size: 12px
            color: rgb(255, 153, 0)
            line-height: 18px
            vertical-align: top

        .delivery-wrapper
          font-size: 0
          .title
            display: inline-block
            font-size: 12px
            color: rgb(7, 17, 27)
            vertical-align: top
            line-height: 18px
          .delivery
            display: inline-block
            vertical-align: top
            font-size: 12px
            line-height: 18px
            color: rgb(147, 153, 159)
            margin-left: 12px

    .rating-wrapper
      padding: 0 18px
      .rating-item
        display: flex
        padding: 18px 0
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .avatar
          padding-right: 12px
          img
            border-radius: 50%
        .content
          flex: 1
          position: relative
          .name
            font-size: 10px
            color: rgb(7, 17, 27)
            line-height: 12px
            margin-bottom: 4px
          .star-wrapper
            margin-bottom: 6px
            .star
              display: inline-block
              vertical-align: top
            .delivery
              display: inline-block
              vertical-align: top
              font-size: 10px
              line-height: 12px
              font-weight: 200
              color: rgb(147, 153, 159)
          .text
            margin-bottom: 8px
            font-size: 12px
            color: rgb(7, 17, 27)
            line-height: 18px
          .command
            font-size: 0
            .icon
              font-size: 12px
              color: rgb(0, 160, 220)
              display: inline-block
              vertical-align: top
              margin-top: 3px
              &.icon-thumb_up
                font-size: 12px
              &.icon-thumb_down
                font-size: 12px
            .item
              display: inline-block
              vertical-align: top
              margin-left: 8px
              font-size: 9px
              padding: 0 6px
              line-height: 16px
              margin-bottom: 3px
              border: 1px solid rgba(7, 17, 27, 0.1)
              border-radius: 2px
              background-color: #fff
              color: rgb(147, 153, 159)
              text-align: center
              width: 60px
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis

          .time
            position: absolute
            right: 0
            top: 0
            font-size: 10px
            font-weight: 200
            color: rgb(147, 153, 159)
            line-height: 12px
</style>

<script>

  import star from './../star/star.vue'
  import split from './../split/split.vue'
  import ratingselect from './../ratingselect/ratingselect.vue'
  import BScroll from 'better-scroll'
  import {formatDate} from './../../common/js/date'

  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2;
  const ERR_OK = 0

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    data() {
      return {
        msg: "hello vue",
        showFlag: false,
        selectType: ALL,
        onlyContent: false,
        ratings: []
      }
    },
    created() {
      this.$http.get('/api/ratings').then((res) => {
        let data = res.data;
        if (data.errno === ERR_OK) {
          this.ratings = data.data;
          if (!this.scroll) {
            this.$nextTick(() => {
              this.scroll = new BScroll(this.$refs.ratingsWrapper, {
                click: true
              });
            })
          }
        }
      })
    },
    computed: {},
    methods: {
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      ratingtypeSelect(type, event) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        } else {
          if (this.selectType === ALL) {
            return true;
          }
          if (this.selectType === POSITIVE) {
            return type === POSITIVE;
          }
          if (this.selectType === NEGATIVE) {
            return type === NEGATIVE;
          }
        }
        return false;
      }
    },
    components: {
      star,
      split,
      ratingselect
    }
  }
</script>

