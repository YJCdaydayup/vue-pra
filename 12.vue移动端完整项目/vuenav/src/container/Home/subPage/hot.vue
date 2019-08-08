<template>
    <div class="hot">
       <div id="slider-box" class="slider-box">
         <div id="tips" class="tips">滑动验证</div>
         <div id="slider" class="slider"><span>>></span></div>
       </div>
    </div>
</template>

<style scoped>
  .active {
    color: green;
  }

  .slider-box {
    width: 200px;
    height: 36px;
    background-color: aquamarine;
    margin: 60px auto;
    position: relative;
  }

  .slider {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 36px;
    background-color: aqua;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    user-select: none;
    z-index: 10;
    transition: all 50ms linear;
  }

  .tips {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 36px;
    color: gray;
    font-size: 12px;
    z-index: 1;
  }

  .slider span {
    position: relative;
    top: -1.5px;
  }

</style>

<script>

import SliderUnlocker from './../../../classes/SliderUnlocker.js'

    export default {
        data() {
            return {
            }
        },
        mounted() {
          let sliderUnlocker = new SliderUnlocker('slider',{
            tips: '恭喜您，验证成功'
          },function() {
            alert(123);
          })
          sliderUnlocker.init()
        },
        components: {

        }
    }
</script>


