<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="item in goods">
            <span class="text border-1px">
              <span v-if="item.type>0" class="icon" :class="classMap[item.type]">
              </span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper"></div>
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
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            background-repeat: no-repeat
            background-size: 12px 12px
            margin-right: 2px
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
    .foods-wrapper
      flex: 1
      background-color: #fff





</style>

<script>

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
              console.log(this.goods)
            }
          })
        },
        components: {}
    }
</script>


