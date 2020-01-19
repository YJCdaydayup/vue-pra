<template>
  <el-container class="layout-default">
    <el-header>
      <index/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>

  import Index from '@/components/public/header/index.vue'

  export default {
    components: {
      Index
    }
  }

</script>
