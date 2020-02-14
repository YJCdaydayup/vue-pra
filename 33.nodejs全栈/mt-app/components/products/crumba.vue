<template>
    <div class="m-crumbs">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.geo.position.city.replace('市','')}}美团</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">{{keyword}}</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>
<style>

</style>

<script>
    export default {
        props: {
          keyword: {
            type: String,
            default: ''
          }
        }
    }
</script>


