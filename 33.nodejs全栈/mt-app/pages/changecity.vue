<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <i-select/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <catagory/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import iSelect from '@/components/changecity/isselect.vue'
  import hot from '@/components/changecity/hot.vue'
  import catagory from '@/components/changecity/catagory.vue'


  export default {
    layout: 'blank',
    components: {
      iSelect,
      hot,
      catagory
    }
  }
</script>
