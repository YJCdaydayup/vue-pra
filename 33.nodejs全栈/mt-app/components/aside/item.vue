<template>
    <div class="item-box">
      <div class="content">
        <img :src="meta.img" alt="">
        <div class="info">
          <h3>{{meta.title}}</h3>
          <p class="time" v-if="meta.time.length">下单时间: {{meta.time}}</p>
          <p class="count">数量：{{meta.count}}</p>
        </div>
      </div>
      <p class="total">总价：¥{{meta.total}}</p>
      <p class="state">{{meta.status === 1 ? '代付款': '待评价'}}</p>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .item-box
    padding 20px 0
    display flex
    justify-content space-between
    background-color #fff
    border-bottom 1px solid #ccc
    &:last-child
      border-bottom 0
    .content
      flex 0 360px
      display flex
      justify-content space-between
      text-align left
      >img
        border-radius 5px
        margin-right 10px
      .info
        flex 1
        >h3
          color #000
          font-weight 600
          font-size 14px
          margin-bottom 6px
        >p
          font-size 12px


    .total
      width 80px
      font-size 12px
      position relative
      left -100px
      top 12px
    .state
      font-size 12px
      position relative
      left -200px
      top 12px
</style>

<script>
    export default {
        props: {
          meta: {
            type: Object,
            default() {
              return {}
            }
          }
        },
        data() {
            return {
                msg: "hello vue"
            }
        }
    }
</script>


