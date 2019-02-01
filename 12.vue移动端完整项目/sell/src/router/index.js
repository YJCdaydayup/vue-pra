import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Goods from './../components/goods/goods.vue'
import Ratings from './../components/ratings/ratings.vue'
import Seller from './../components/seller/seller.vue'
import Other from './../components/other/other.vue'

Vue.use(Router)

export default new Router({
  // 配置，实例化router时，可以修改linkActiveClass的默认值
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/goods', // 默认选择的子路由
      children:[
        {
          path: 'goods',
          name: 'goods',
          component: Goods,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'ratings',
          name: 'ratings',
          component: Ratings,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'seller',
          name: 'seller',
          component: Seller,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'other',
          name: 'other',
          component: Other,
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
})
