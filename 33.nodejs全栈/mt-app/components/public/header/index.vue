<template>
    <div class="m-header">
      <el-row>
        <el-col>
          <top-bar/>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <search-bar/>
        </el-col>
      </el-row>
    </div>
</template>

<style lang="scss">

  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header.scss";

</style>

<script>

  import TopBar from './topbar.vue'
  import SearchBar from './searchbar.vue'

    export default {
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {
          TopBar,
          SearchBar
        }
    }
</script>


