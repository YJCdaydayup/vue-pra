<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <geo/>
    </el-col>
    <el-col :span="5">
      <user/>
    </el-col>
    <el-col :span="14">
      <navbar/>
    </el-col>
  </el-row>

</template>

<style lang="scss">

</style>

<script>

    import Geo from '@/components/public/header/geo.vue'
    import User from '@/components/public/header/user.vue'
    import Navbar from '@/components/public/header/nav.vue'

    export default {
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {
          Geo,
          User,
          Navbar
        }
    }
</script>


