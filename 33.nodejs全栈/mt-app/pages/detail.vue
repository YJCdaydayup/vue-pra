<template>
    <div class="page-detail">
        <el-row>
          <el-col :span="24">
            <crumbs :keyword="keyword" :type="type"/>
          </el-col>
        </el-row>
      <el-row>
        <el-col :span="24">
          <summary :meta="product"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <h3>商家团购及优惠</h3>
        </el-col>
      </el-row>
      <el-row v-if="canOrder || !login">
        <el-col :span="24">
          <list v-if="login" :list="list"/>
          <div v-else class="deal-need-login">
            <img src="" alt="查看登录">
            <span>登录查看</span>
            <el-button
              type="primary"
              round
            >
              <a href="/login">立即登录</a>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
</template>
<style lang="scss">

  @import "@/assets/css/detail/index.scss";

</style>

<script>

  import Crumbs from '@/components/detail/crumbs.vue'
  import Summary from '@/components/detail/summary.vue'
  import List from '@/components/detail/list.vue'

    export default {
        layout: 'blank',
        data() {
            return {
              keyword: '',
              type: '',
              product: {},
              list: [],
              login: false
            }
        },
        components: {
          Crumbs,
          Summary,
          List
        },
        computed: {
          // 通过判断所有数据中的每个图片是否存在来判断是否要显示
          canOrder() {
            return this.list.filter(item => item.photoes.length).length
          }
        },
        async asyncData(ctx) {
          let {keyword, type} = ctx.query
          //
          let {status, data: {product, more: list, login}} = await ctx.$axios.get('/search/products',{
            params: {
              keyword,
              type,
              city: ctx.store.state.geo.position.city
            }
          })

          if (status === 200) {
            return {
              keyword,
              type,
              list,
              login,
              product
            }
          }else {
            return {
              keyword,
              product: {},
              type,
              list: [],
              login: false
            }
          }

        }
    }
</script>


