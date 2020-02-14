<template>
    <div class="page-product">
      <el-row class="page-product">
        <el-col :span="19">
          <crumba :keyword="$route.query.keyword"/>
          <category/>
        </el-col>
        <el-col :span="5">
          <imap/>
        </el-col>
      </el-row>

      <imap/>
    </div>
</template>
<style>

</style>

<script>

    import crumba from '@/components/products/crumba.vue'
    import category from '@/components/products/category.vue'
    import imap from '@/components/products/map.vue'

    export default {
        layout: 'blank',
        data() {
            return {
                list: [],
                types: [],
                keyword: ''
            }
        },
        components: {
          crumba,
          category,
          imap
        },
        async asyncData(ctx) {
          let keyword = ctx.query.keyword
          return {
            keyword
          }
        }
    }
</script>


