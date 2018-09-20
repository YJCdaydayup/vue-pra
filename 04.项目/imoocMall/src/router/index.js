import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import VueLazyload from 'vue-lazyload'

import GoodsList from  '@/views/GoodsList'

// 在入口出初始化，进行全局化
Vue.use(VueLazyload,{
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
    }
  ]
})
