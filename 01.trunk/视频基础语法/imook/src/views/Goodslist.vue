<template>
    <div>
        这是商品列表页面
        <span>{{$route.params.goodsId}}</span>
        <span>{{$route.params.username}}</span>
        <span>{{msg}}</span>

       <!-- 就是一种a标签，实现页面的跳转
           跳转后，又是一个新的页面，这个页面会包含上一级页面的内容，以及自己页面的内容
        -->
      <router-link to="/goods/title">显示标题</router-link>
      <router-link to="/goods/img">显示图片</router-link>

       <!-- 渲染展示子组件的 -->
       <div>
         <router-view></router-view>
       </div>

      <!-- 通过js实现跳转，跳转的是新的一级页面，这个时候上一级页面的东西不存在了，只存在这个新的一级页面的内容 -->
      <router-link to="/cart">跳转到购物车页面</router-link>
      <!-- ES6 的写法-->
      <button @click="jump">button -> 跳转购物车页面</button>


      <!--
       使用name进行路由
      必须使用v-bind:to -->
      <router-link :to="{name: 'cart'}">跳转购物车页面</router-link>
      <!-- 动态路由 -->
      <router-link :to="{name:'cart',params:{cartId:123}}"></router-link>


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
        },
      methods: {
          jump: function () {
            // 跳转,
            // 拿到this下默认的router对象
//            this.$router.push("/cart");
//            this.$router.push({path:"/cart"});
            // 跳转时传递参数
//            this.$router.push({path: "/cart?goodsId=123"})

            this.$router.go(1);
          }
      }
    }
</script>


