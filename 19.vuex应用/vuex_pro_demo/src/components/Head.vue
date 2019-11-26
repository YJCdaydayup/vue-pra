<template>
  <div class="header-box">
    <div class="head-goback" v-if="goBack" @click="$router.go(-1)">
      <span class="back-label"> <strong class="arrow"><</strong> 返回 </span>
    </div>
    <slot name="title"></slot>
  </div>
</template>

<script>
  export default {
    name: "Head",
    props: {
      goBack: {
        type: Boolean,
        default: true
      }
    },
    beforeRouteEnter(to, from,next) {
      console.log(to.matched,from.matched)
    }
  }
</script>

<style scoped>
  .header-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background-color: orange;
    line-height: 64px;
    text-align: center;
  }

  .head-goback {
    position: absolute;
    font-weight: 400;
    font-size: 18px;
    color: white;
    left: 8px;
  }

  .arrow {
    font-size: 18px;
    position: relative;
    top: -1px;
  }
</style>
