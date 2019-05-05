import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home/index'
import Mine from '@/container/Mine/index'
import Order from '@/container/Order/index'
import ShopCar from '@/container/ShopCar/index'
import NotFound from '@/container/NotFound/index'
import Hot from '@/container/Home/subPage/hot'
import Recommand from '@/container/Home/subPage/recommand'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      component: NotFound
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/hot',
      children: [
        {
          path: 'hot',
          component: Hot
        },
        {
          path: 'recommand',
          component: Recommand
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    }
  ],
  linkActiveClass: 'active'
})
