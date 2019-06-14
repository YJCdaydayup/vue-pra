<template>
  <div class="box">
    <el-button class="btn" @click="show=!show">Click Me</el-button>

    <!-- fade 动画

      <div class="fade-box">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="fade1"></div>
        </transition>
        <transition name="el-fade-in">
          <div class="fade2" v-show="show"></div>
        </transition>
      </div>
    -->
      <div v-show="show" class="fade1"></div>
      <transition name="el-zoom-in-bottom">
        <div class="fade2" v-show="show"></div>
      </transition>

  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    position: absolute
    top: 50px
    left: 0
    width: 100%
    bottom: 0
    display: flex
    .btn
      width: 100px
      height 40px
    .fade1
      width: 200px
      height: 300px
      background-color: orange
    .fade2
      width: 200px
      height: 200px
      background-color: yellow

</style>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>
