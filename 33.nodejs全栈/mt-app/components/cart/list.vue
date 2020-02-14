<template>
  <el-table
    :data="cartData"
    style="width: 980px">
    <el-table-column
      prop="name"
      label="项目"
      width="532"
    >
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="132"
    />
    <el-table-column
      prop="count"
      label="数量"
      width="212"
    >
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="1" :max="10" ></el-input-number>
      </template>
    </el-table-column>
    <el-table-column
      label="总价"
    >
      <!--

       scope 表示当前表
       row 表示当前行
       scope.row就是当前行的对象
       scope.row.count 就是当前行的数量值

      -->
    <template slot-scope="scope">
      <div class="">
        {{scope.row.price * scope.row.count}}
      </div>
    </template>
      </el-table-column>
    </el-table>
</template>
<style>

</style>

<script>
    export default {
       props: {
         cartData: {
           type: Array,
           default: []
         }
       }
    }
</script>


