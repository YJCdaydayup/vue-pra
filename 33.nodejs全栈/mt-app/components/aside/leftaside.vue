<template>
    <div class="left-aside">
        <h3>我的美团</h3>
        <dl v-for="(item, index) in list" :key="index">
          <dt>{{item.title}}</dt>
          <dd @click="select(c.type)" v-for="(c, idx) in item.child" :key="idx">
            {{c.title}}
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .left-aside
    background-color #fff
    border 1px solid #ccc
    padding 30px
    border-radius 3px
    padding-bottom 0
    >h3
      color black
      font-size 16px
      font-weight 600
    >dl
      margin 15px 0
      padding-bottom 10px
      >dt
        cursor pointer
        color black
        font-size 16px
        font-weight 600
        margin-bottom 15px
        &:hover
          color red
      >dd
        cursor pointer
        margin-bottom 15px
        font-size 14px
        position relative
        &:hover
          color gray
        >i
          position absolute
          right 10px
          top 15%

</style>

<script>

  import EventBus from './../../common/EventBus'

    export default {
        data() {
            return {
                list: [
                  {
                    title: '我的订单',
                    type: 'order',
                    child: [
                      {
                        type: 'all',
                        title: '全部订单'
                      },
                      {
                        type: 'pay',
                        title: '待付款'
                      },
                      {
                        type: 'use',
                        title: '待使用'
                      },
                      {
                        type: 'rate',
                        title: '待评价'
                      },
                      {
                        type: 'after',
                        title: '退款／售后'
                      }
                    ]
                  },
                  {
                    title: '我的收藏',
                    type: 'favor',
                    child: [
                      {
                        type: 'b-home',
                        title: '收藏的商家'
                      },
                      {
                        type: 't-shop',
                        title: '收藏的团购'
                      }
                    ]
                  },
                  {
                    title: '抵用券',
                    type: 'quan',
                    child: [
                      {
                        type: 'k-q',
                        title: '可用券'
                      },
                      {
                        type: 'n-q',
                        title: '失效券'
                      }
                    ]
                  },
                  {
                    title: '个人信息',
                    type: 'info',
                    child: [
                      {
                        type: 'set',
                        title: '账户设置'
                      }
                    ]
                  }
                ]
            }
        },
        methods: {
          select(type) {
//            this.$emit('left-select', type)
            EventBus.$emit('left-select',type)
          }
        }
    }
</script>


