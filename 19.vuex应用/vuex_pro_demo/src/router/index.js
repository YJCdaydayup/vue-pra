import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import Promise from './../components/Promise'
import Module from './../components/Module.vue'
import Watcher from './../components/Watcher.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/watcher'
    },
    {
      path: '/',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/pro',
      name: 'Promise',
      component: Promise
    },
    {
      path: '/mod',
      name: 'Module',
      component: Module
    },
    {
      path: '/watcher',
      name: 'Watcher',
      component: Watcher
    }
  ]
})
