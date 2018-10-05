import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import  VueLazyload from 'vue-lazyload'

import GoodsList from  '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from "../views/Address"
import OrderComfirm from "../views/OrderConfirm"
import OrderSuccuss from '../views/OrderSuccuss'

// 在入口出初始化，进行全局化
Vue.use(VueLazyload, {
  preload: 1.3,
  loading: './../../static/loading-svg/loading-balls.svg',
  attempt: 1
});

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: "/cart",
      name: 'Cart',
      component: Cart
    },
    {
      path: "/address",
      name: "Address",
      component: Address
    },
    {
      path: "/orderComfirm",
      name: "OrderComfirm",
      component: OrderComfirm
    },
    {
      path: "/orderSuccuss",
      name: "OrderSuccuss",
      component: OrderSuccuss
    }
  ]
})
