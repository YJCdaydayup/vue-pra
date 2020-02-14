<template>
    <div class="right-aside">
      <el-tabs v-model="curSelect" @tab-click="handleClick">
        <el-tab-pane label="全部订单" name="all">
          <div v-if="cur && cur.length > 0">
            <item v-for="(item, index) in cur" :key="index" :meta="item"/>
          </div>
          <p v-else class="no-data">暂无订单信息</p>
        </el-tab-pane>
        <el-tab-pane label="待付款" name="pay">
          <div v-if="cur && cur.length > 0">
            <item v-for="(item, index) in cur" :key="index" :meta="item"/>
          </div>
          <p v-else class="no-data">暂无订单信息</p>
        </el-tab-pane>
        <el-tab-pane label="待使用" name="use">
          <div v-if="cur && cur.length > 0">
            <item v-for="(item, index) in cur" :key="index" :meta="item"/>
          </div>
          <p v-else class="no-data">暂无订单信息</p>
        </el-tab-pane>
        <el-tab-pane label="待评价" name="rate">
          <div v-if="cur && cur.length > 0">
            <item v-for="(item, index) in cur" :key="index" :meta="item"/>
          </div>
          <p v-else class="no-data">暂无订单信息</p>
        </el-tab-pane>
        <el-tab-pane label="退款／售后" name="after">
          <div v-if="cur && cur.length > 0">
            <item v-for="(item, index) in cur" :key="index" :meta="item"/>
          </div>
          <p v-else class="no-data">暂无订单信息</p>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .right-aside
    margin-left 10px
    padding 20px 30px
    background-color #fff
    border-radius 6px
    border 1px solid #ccc
    padding-bottom 0
    .no-data
      padding 30px
      text-align center
      font-size 20px
      font-weight 500



</style>

<script>

  import Item from './item.vue'
  import EventBus from './../../common/EventBus'

    export default {
//        props: {
//          selectItem: {
//            type: String,
//            default() {
//              return 'all'
//            }
//          }
//        },
//        watch: {
//          selectItem(nv) {
//            this.curSelect = nv
//            this.cur = this.module[this.curSelect]
//          }
//        },
        created() {
          EventBus.$on('left-select',(type)=>{
            this.curSelect = type
            this.cur = this.module[this.curSelect]
          })
        },
        data() {
            return {
              curSelect: 'all',
              cur: [],
              module: {
                all: [
                    {
                      title: '宽板凳老灶火锅代金券',
                      count: 1,
                      time: '2020-02-12 16:25',
                      img: 'https://p0.meituan.net/deal/28858329e69e7676ed5a2222652d1331102918.jpg@90w_90h_1e_1c',
                      total: 89.9,
                      sttaus: 1
                    },
                    {
                      title: '润青四季音乐主题餐厅-椰子鸡代金券',
                      count: 1,
                      time: '2020-02-12 16:25',
                      img: 'https://p1.meituan.net/deal/1230b24beeedbc90aaa577fe5ed9711861649.jpg@0_7_702_425a|388h_640w_2e_100Q|90w_90h_1e_1c',
                      total: 89.9,
                      status: 2
                    }
                ],
                pay: [
                  {
                    title: '点都德',
                    count: 10,
                    time: '2020-02-12 16:25',
                    img: 'https://p1.meituan.net/deal/2d74b64ee4baadf39cc8014e18c24d19324644.jpg@0_209_3869_2345a|388h_640w_2e_90Q|90w_90h_1e_1c',
                    total: 109.9,
                    status: 1
                  }
                ]
              }
            }
        },
        methods:{
          handleClick() {
            this.cur = this.module[this.curSelect]
            this.cur = this.cur || []
          }
        },
        components: {
          Item
        },
        mounted() {
//          this.curSelect = this.selectItem
          this.cur = this.module[this.curSelect]
        }
    }
</script>


