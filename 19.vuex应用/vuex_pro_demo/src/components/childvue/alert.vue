<template>
    <div class="alert-container">
      <transition name="mask">
        <div class="mask" v-if="show"></div>
      </transition>
      <transition name="fade">
      <div class="alert-box" v-if="show">
        <div class="alert">
          <h3>标题</h3>
          <button @click="hide">确定</button>
        </div>
      </div>
      </transition>
    </div>
</template>

<style lang="css" rel="stylesheet/css" scoped>

  .alert-container {
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
  }

  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(29, 29, 29, 0.3);
    transition: all 0.5s;
  }

  .alert-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .alert {
    width: 80%;
    height: 160px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    text-align: center;
    transform: translate3d(0, 0, 0);
  }

  .mask-enter-active,.mask-enter {
    animation: masking 0.2s;
  }

  .mask-leave-active {
    transition: all 0.5s;
  }
  .mask-leave-to {
    opacity: 0;
  }

  @keyframes masking {
    from {opacity: 0}
    to {
      opacity:1;}
  }

  .fade-enter-active,  .fade-enter {
    animation: slidering 0.6s;
  }

  @keyframes slidering {
    from {
      opacity: 0;
      transform: translate3d(0, -30%, 0) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  .fade-leave-to {

  }

</style>

<script>
  export default {
    data() {
      return {
        msg: "hello vue"
      }
    },
    props: {
      show: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    methods: {
      hide() {
        this.$emit('hide')
      }
    }
  }
</script>


