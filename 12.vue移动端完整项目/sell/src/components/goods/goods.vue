<template>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="item in goods">
            <!--<span class="text border-1px"><span v-if="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>-->
            <span class="text border-1px"><icon v-if="item.type > 0" class="icon" :name="classMap[item.type]" :size="3"></icon>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img width="57px" height="57px" :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

  @import "./../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background-color: #f3f5f7
      .menu-item
        padding: 0 12px
        display: table
        width: 56px
        height: 50px
        line-height: 14px
        .text
          font-size: 12px
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7,17,27,0.1))
          .icon
            vertical-align: top
            margin-right: 2px
    .foods-wrapper
      flex: 1
      background-color: #fff
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 1px solid #d9dd1
        color: rgb(144,153,159)
        font-size: 12px
        background-color: #f3f5f7
      .food-item
        display: flex
        border-1px(rgba(7,17,27,0.1))
        margin: 18px
        padding-bottom: 18px
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1;
          .name
            margin: 2px 0 8px 0
            line-height: 16px
            font-size: 14px
            color: rgb(7,17,27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147,153,159)
           .desc
             margin-bottom: 8px
             line-height: 12px
          .extra
            .count
              margin-right: 6px
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





</style>

<script>

    import BScroll from 'better-scroll'
    import icon from './../icon/icon.vue'

    const ERR_OK =0;

    export default {
        props: {
          seller: {
            type: Object
          }
        },
        data() {
            return {
              goods: []
            }
        },
        created() {
          this.classMap = ['decrease','discount','special','invoice','guarantee'];
          this.$http.get('/api/goods').then((res)=>{
            if (res.data.errno == ERR_OK) {
              this.goods = res.data.data;
              this.$nextTick(()=>{
                this.menuScroll.refresh()
                this.foodsScroll.refresh()
              })

            }
          })
        },
        mounted() {
          this._initScroll();
        },
        methods: {
          _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper,{});

            this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{});
          }
        },
        components: {
          icon
        }
    }
</script>


