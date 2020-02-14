<template>
    <div class="page-order">
      <el-row class="content">
        <el-col :span="4">
          <!--<left-aside @left-select="select"/>-->
          <left-aside/>
        </el-col>
        <el-col :span="20">
          <right-aside/>
          <!--<right-aside :selectItem="curItem"/>-->
        </el-col>
      </el-row>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .page-order
    background-color #eee
    margin-top 100px
    padding 30px 40px 0






</style>

<script>

  import LeftAside from '@/components/aside/leftaside'
  import RightAside from '@/components/aside/rightaside'

    export default {
        layout: 'blank',
        data() {
            return {
              curItem: 'all'
            }
        },
        components: {
          LeftAside,
          RightAside
        },
        methods: {
          select(type) {
           this.curItem = type
          }
        }
    }
</script>


