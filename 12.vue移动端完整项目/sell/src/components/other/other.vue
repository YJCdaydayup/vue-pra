<template>
  <div class="seller">
    <div class="menue-wrapper">
      <ul>
        <li class="menue-item" v-for="menue in goods">
          <div class="title">
            <i class="icon" v-show="menue.type>0" :class="classMap[menue.type]"></i>
            {{menue.name}}
          </div>
        </li>
      </ul>
    </div>
    <div class="food-wrapper">
      <ul class="title-wrapper">
        <li class="title-item" v-for="section in goods">
          <span class="title">{{section.name}}</span>
          <ul class="good-wrapper">
            <li v-for="good in section.foods">
              <div class="good-icon">
                <img :src="good.icon"/>
              </div>
              <div class="good-info">
                <h1 class="title">{{good.name}}</h1>
                <div class="desc" v-show="good.description"></div>
                <div class="sale-info">
                  <span class="sale-count">月售{{good.sellCount}}</span>
                  <span class="rating">好评率{{good.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">{{good.price}}</span>
                  <span v-show="good.oldPrice>0" class="old">{{good.oldPrice}}</span>
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

  .seller
    position: absolute
    top: 174px
    left: 0
    bottom: 46px
    display: flex
    /*overflow: hidden*/
    .menue-wrapper
      flex: 0 0 80px
      background-color: #f3f5f7
      .menue-item
        display: table
        height: 54px
        width: 56px
        margin: 0 12px
        border-1px(rgba(7, 17, 27, 0.1))
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

</style>

<script>

  const ERR_OK = 0;

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
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        res = res.data;
        if (res.errno === ERR_OK) {
          this.goods = res.data;
        }
      })
    },
    methods: {}
  }

</script>
