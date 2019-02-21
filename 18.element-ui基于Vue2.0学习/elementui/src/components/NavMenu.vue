<template>
  <div class="menue">
    <el-menu :default-active="state" mode="horizontal" @select="handSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="#">订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">

</style>

<script>

  export default {
    data() {
      return {
        state: 1
      }
    },
    methods: {
      handSelect() {

      }
    }
  }

</script>
