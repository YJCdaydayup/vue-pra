<template>
  <div class="sellers">
    <div class="menue-wrapper" ref="menueWrapper">
      <ul>
        <li class="menue-item" v-for="(menue,index) in goods" @click="selectMenue(index,$event)"
            :class="{'selected': index===currentIndex}">
          <div class="title">
            <i class="icon" v-show="menue.type>0" :class="classMap[menue.type]"></i>
            {{menue.name}}
          </div>
        </li>
      </ul>
    </div>
    <div class="food-wrapper" ref="foodWrapper">
      <ul class="title-wrapper">
        <li class="title-item title-list-hook" v-for="section in goods">
          <h2 class="name">{{section.name}}</h2>
          <ul class="good-wrapper">
            <li v-for="good in section.foods" class="good-item border-1px">
              <div class="pic">
                <img :src="good.icon"/>
              </div>
              <div class="info">
                <h1 class="title">{{good.name}}</h1>
                <div class="desc" v-show="good.description">{{good.description}}</div>
                <div class="sale-info">
                  <span class="sale-count">月售{{good.sellCount}}</span>
                  <span class="rating">好评率{{good.rating}}%</span>
                </div>
                <div class="price">
                  <div class="now">
                    <span class="simble">¥</span>
                    <span class="money">{{good.price}}</span>
                  </div>
                  <span v-show="good.oldPrice>0" class="old">{{good.oldPrice}}</span>
                </div>
              </div>
              <div class="control">
                <cartcontrol :food="good"></cartcontrol>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

  @import "./../../common/stylus/mixin.styl"

  .sellers
    position: absolute
    top: 174px
    left: 0
    right: 0
    bottom: 46px
    display: flex
    overflow: hidden
    .menue-wrapper
      flex: 0 0 80px
      background-color: #f3f5f7
      .menue-item
        display: table
        height: 54px
        width: 56px
        margin: 0 12px
        border-1px(rgba(7, 17, 27, 0.1))
        &.selected
          background-color: #fff
          margin: 0
          padding: 0 12px
          margin-top: -1px
          z-index: 200
          border-none()
        .title
          display: table-cell
          vertical-align: middle
          font-size: 12px
          color: rgb(77, 85, 93)
          line-height: 14px
          .icon
            display: inline-block
            vertical-align: top
            background-repeat: no-repeat
            background-size: 12px 12px
            width: 12px
            height: 12px
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')

    .food-wrapper
      flex: 1
      .title-item
        .name
          border-left: 2px solid #d9dde1
          padding-left: 12px
          line-height: 26px
          color: rgb(147, 153, 159)
          background-color: #f3f5f7
          font-size: 12px
        .good-wrapper
          padding: 0 18px 18px 18px
          .good-item
            position: relative
            display: flex
            padding: 18px 0
            border-1px(rgba(7, 17, 27, 0.1))
            &:last-child
              border-none()
            .pic
              img
                width: 57px
                height: 57px
                border-radius: 2px
            .info
              margin: 2px 0 0 10px
              .title
                font-size: 14px
                color: rgb(7, 17, 27)
                line-height: 14px
                margin-bottom: 8px
              .desc
                font-size: 10px
                color: rgb(147, 153, 159)
                line-height: 13px
                margin: 8px 0
              .sale-info
                font-size: 0
                color: rgb(147, 153, 159)
                .sale-count
                  font-size: 10px
                .rating
                  font-size: 10px
                  margin-left: 12px

              .price
                color: rgb(240, 20, 20)
                font-size: 0
                .now
                  display: inline-block
                  .simble
                    font-size: 10px
                  .money
                    font-size: 14px
                    line-height: 24px
                    font-weight: 700
                .old
                  display: inline-block
                  margin-left: 8px
                  font-size: 10px
                  color: rgb(147, 153, 159)
                  font-weight: 700
                  line-height: 24px

            .control
              position: absolute
              right: 18px
              bottom: 10px
</style>

<script>

  import shopcart from './../shopcart/shopcart.vue'
  import cartcontrol from './../cartcontrol/cartcontrol.vue'
  import BScroll from 'better-scroll'

  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        foodScrollY: 0,
        heightList: []
      }
    },
    computed: {
      currentIndex() {
        if (this.foodScrollY <= 0) {
          return 0;
        }
        let menues = this.$refs.menueWrapper.getElementsByClassName('menue-item');
        for (let i = 0; i < this.heightList.length; i++) {
          if (!this.heightList[i + 1]) {
            return 0;
          }
          if (this.foodScrollY >= this.heightList[i] && this.foodScrollY < this.heightList[i + 1]) {
            let li = menues[i];
            this.menueScroll.scrollToElement(li, 300);
            return i;
          }
        }
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        res = res.data;
        if (res.errno === ERR_OK) {
          this.goods = res.data;
          this.$nextTick(() => {
            this._initScroll()
            this._caculateHeight()
          })
        }
      })
    },
    methods: {
      _initScroll() {
        this.menueScroll = new BScroll(this.$refs.menueWrapper, {
          click: true,
          probeType: 3
        })
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          click: true,
          probeType: 3
        })
        // 在实现监听位置
        this.foodScroll.on('scroll', (pos) => {
          this.foodScrollY = Math.abs(Math.round(pos.y));
        })
      },
      _caculateHeight() {
        let foodItems = document.getElementsByClassName('title-list-hook');
        let height = 0;
        this.heightList.push(height);
        for (let i = 0; i < foodItems.length; i++) {
          height += foodItems[i].clientHeight;
          this.heightList.push(height);
        }
        console.log(this.heightList)
      },
      selectMenue(index, ev) {
        let foodItems = document.getElementsByClassName('title-list-hook');
        let li = foodItems[index];
        this.foodScroll.scrollToElement(li, 300);
      }
    },
    components: {
      shopcart,
      cartcontrol
    }
  }

</script>
