<!--
  1.el-aside同级的只能有一个标签，当有多个标签的时候，就必须用el-container将其包裹起来
  2.都有默认高度，根据需要给自己的高度

-->
<template>
  <div class="app">
    <!--<el-container>-->
    <!--<el-aside width="100px"></el-aside>-->
    <!--<el-container>-->
    <!--<el-header height="50px"></el-header>-->
    <!--<el-main></el-main>-->
    <!--<el-footer height="50px"></el-footer>-->
    <!--</el-container>-->
    <!--</el-container>-->

    <!--<hr color="red"/>-->

    <!--<el-container>-->
    <!--<el-header height="50px"></el-header>-->
    <!--<el-container>-->
    <!--<el-aside width="100px"></el-aside>-->
    <!--<el-container style="height: 350px">-->
    <!--<el-main></el-main>-->
    <!--<el-footer></el-footer>-->
    <!--</el-container>-->
    <!--</el-container>-->
    <!--</el-container>-->

    <el-container class="container">
      <el-aside width="100px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot='title'>
              <i class="el-icon-message">导航一</i>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项1</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu">导航二</i>
            </template>
            <el-menu-item-group title="分组1">
              <!--<template slot="title">分组一</template>-->
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting">导航三</i>
            </template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="60px">
          <el-dropdown>
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item width="100px">查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="name">王小虎</span>
        </el-header>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<style scoped>

  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /*.child-container {*/
  /*width: 100%;*/
  /*height: 300px;*/
  /*}*/

  .el-aside {
    background-color: #dcd4e5;
  }

  .el-header {
    background-color: #b5c0cf;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0;
    color: rgba(0,0,0,0.6)
  }

  .el-header .el-icon-setting {
    display: inline-block;
    font-size: 14px;
  }

  .el-header .name {
    font-size: 13px;
    margin-left: 13px;
  }

  .el-main {
    background-color: #faeeef;
    padding: 0;
    margin: 0;
  }

  .el-footer {
    background-color: lightpink;
  }

</style>

<script>

  export default {
    name: 'container',
    data() {

      const item = {
        date: '20190220',
        name: '小虎',
        address: '深圳市A8音乐大厦21楼'
      }
      return {
       tableData: Array(20).fill(item)
      }
    }
  }

</script>
