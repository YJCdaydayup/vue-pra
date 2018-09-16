<template>
    <div>
       这是购物车页面
      <span>
        <!--
         params是动态路由的
         通过?拼接传递参数是query
         -->
        {{$route.query.goodsId}}
      </span>
    </div>
</template>
<style>

</style>

<script>
    export default {
        data() {
            return {
                msg: "hello vue"
            }
        }
    }
</script>


