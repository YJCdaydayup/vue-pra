<template>
    <div>
        <!--<span>{{$route.params.goodsId}}</span>-->
        <!--<span>{{$route.params.username}}</span>-->
        <!--<span>{{msg}}</span>-->

       <!-- 就是一种a标签，实现页面的跳转
           跳转后，又是一个新的页面，这个页面会包含上一级页面的内容，以及自己页面的内容
        -->
      <!--<router-link to="/title">显示标题</router-link>-->
      <!--<router-link to="/img">显示图片</router-link>-->
      <!--<hr color="red">-->

       <!--<div>-->
         <!--&lt;!&ndash; 渲染展示子组件的地方，只有当上面的title和img是GoodsList的Children时才使用 &ndash;&gt;-->
         <!--<router-view></router-view>-->
       <!--</div>-->
      <!--<hr color="red">-->

      <!-- 通过js实现跳转，跳转的是新的一级页面，这个时候上一级页面的东西不存在了，只存在这个新的一级页面的内容 -->
      <!--<router-link to="/cart">跳转到购物车页面</router-link>-->
      <!-- ES6 的写法-->
      <!--<button @click="jump">button -> 跳转购物车页面</button>-->


      <!--
       使用name进行路由
      必须使用v-bind:to -->
      <!--<router-link :to="{name: 'cart'}">跳转购物车页面</router-link>-->
      <!-- 动态路由 -->
      <!--<router-link :to="{name:'cart',params:{cartId:123}}">跳转带参数</router-link>-->


      <div class="box">
        <div class="left" :class="{selected: isSel=='left'}" @click="chooseAction('left')">title</div>
        <div class="right" :class="{selected: isSel=='right'}" @click="chooseAction('right')">image</div>
      </div>
      <TTitle v-show="isSel=='left'"></TTitle>
      <IImage v-show="isSel=='right'"></IImage>

    </div>
</template>
<style>

  .box {
    overflow: hidden;
    background-color: lightpink;
    padding: 5px 0;
  }

  .left, .right {
    float: left;
    text-align: center;
    width: 50%;
    padding: 5px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .selected {
    color: red;
  }

</style>

<script>

  import IImage from './Image.vue'
  import TTitle from './Title.vue'

    export default {
        data() {
            return {
                msg: "hello vue",
                isSel: 'left'
            }
        },
      components: {
        IImage,
        TTitle
      },
      methods: {
        chooseAction(e) {
          this.isSel = e;
        },
          jump: function () {
            // 跳转,
            // 拿到this下默认的router对象
//            this.$router.push("/cart");
//            this.$router.push({path:"/cart"});
            // 跳转时传递参数
//            this.$router.push({path: "/cart?goodsId=123"})

            this.$router.go(1);


            // 可以在这里导入Util.js文件，然后直接使用Util.js里面的方法（报错了！！！）
//            import "../Utils"
//            import "../App"
            // 或
//            import * as Helper from '../Utils'

//            Helper.sum(100,200);
          }
      }
    }
</script>


