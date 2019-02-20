import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Animation from '../components/Animation.vue'
import Layout from '../components/Layout.vue'
import Container from './../components/Container.vue'
import Form from './../components/Form.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'animation',
          component: Animation
        },
        {
          path: 'layout',
          component: Layout
        },
        {
          path: 'container',
          component: Container
        },
        {
          path: 'form',
          component: Form
        }
      ]
    }
  ]
})
