<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>

        <!-- 由于名字会变化，这里需要留一个插槽，供别的模版页面放东西,但是这种不智能，只应对情况比较简单的 -->
        <!--<span>Goods</span>-->
        <slot></slot>
        <!-- 这里定义插槽和名字后，可以在页面里面插入内容，并且指定插在那个地方 -->

        <!-- 插槽在页面查找标签时是找不到的 -->
        <!--<slot name="bread"></slot>-->

        <!--<div>我用于分隔开两个插槽</div>-->

        <!--<slot name="test"></slot>-->
      </nav>
    </div>
  </div>
</template>
<!--<style>-->

<!--</style>-->

<script>
    export default {
        data() {
            return {
                msg: "hello vue"
            }
        },
        components: {}
    }
</script>


