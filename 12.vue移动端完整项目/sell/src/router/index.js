import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Goods from './../components/goods/goods.vue'
import Ratings from './../components/ratings/ratings.vue'
import Seller from './../components/seller/seller.vue'
import Second from './../components/Second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: 'goods',
          // name: 'goods',
          component: Goods
        },
        {
          path: 'ratings',
          // name: 'ratings',
          component: Ratings
        },
        {
          path: 'seller',
          // name: 'seller',
          component: Seller
        }
      ]
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    }
  ]
})
