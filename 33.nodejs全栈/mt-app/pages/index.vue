<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenue/>
      </el-col>
      <el-col :span="19">2</el-col>
    </el-row>
    <el-row :span="24">
        <mid-menue/>
    </el-row>
  </div>
</template>

<style lang="scss">

  @import "@/assets/css/index/index.scss";

</style>

<script>

  import Emenue from '@/components/index/menue.vue'
  import MidMenue from '@/components/index/midmenue.vue'

export default {
  components: {
    Emenue,
    MidMenue
  }
}
</script>

