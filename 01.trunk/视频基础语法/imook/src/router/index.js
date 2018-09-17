import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goodslist from  '../views/Goodslist'
import Title from '../views/Title'
import Image from '@/views/Image'
import Cart from '../views/Cart'

Vue.use(Router)

// 页面的入口，都在这里配置路由

// 其实是两步合一步写了，先声明变量然后导出
// default是导出默认名

export let router = new Router({
// 需要在导入处，import {router} from "../router"
// export default new Router({
  mode: 'history', // hash
  routes: [
    {
      // 一级路由
      path: '/goods',
      name: 'Goodslist',
      // component: Goodslist,
      // 页面入口加载三个组件
      components: {
        default: Goodslist,
        title: Title,
        img: Image
      }
      // children:[
      //   // 二级路由
      //   {
      //     // 不加/
      //     path: 'title',
      //     name: 'title',
      //     component: Title
      //   },
      //   {
      //     // 不加/
      //     path: 'img',
      //     name: 'img',
      //     component: Image
      //   }
      // ]
    },
    {
      path: "/cart/:cartId",
      name: 'cart',
      component: Cart
    }
  ]
})
