import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import Promise from './../components/Promise'
import Module from './../components/Module.vue'
import Watcher from './../components/Watcher.vue'

// import Two from './../components/Login'
// import Three from './../components/Logout'
// import One from './../components/Home.vue'

import {store} from './../main'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      name: 'one',
      component: resolve => require(['./../components/kcb-xyfxjs.vue'], resolve), //懒加载
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/two',
      name: 'two',
      component:  resolve => require(['./../components/Login.vue'], resolve),//懒加载
      meta: {
        requireAuth: false,
        sliderable: true
      }
    },

    {
      path: '/three',
      name: 'three',
      component:  resolve => require(['./../components/Logout.vue'], resolve),//懒加载
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/123',
      name: 'Counter',
      component: Counter,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/pro',
      name: 'Promise',
      component: Promise,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/mod',
      name: 'Module',
      component: Module,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/watcher',
      name: 'Watcher',
      component: Watcher,
      meta: {
        requireAuth: false
      }
    }
  ],

})


// router.beforeEach((to, from, next) => {

//   // if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限
//   if (to.matched[0].meta.requireAuth) {
//     // 1 登录 0 未登录
//     if (store.state.isLogin - 0 === 1) {  // 通过vuex 如果当前有登录
//       console.log('已登录')
//       next();
//     } else {
//       console.log('没有登录哦')
//       next({
//         path: '/one',
//         //query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next();
//   }
// })

export default router;
