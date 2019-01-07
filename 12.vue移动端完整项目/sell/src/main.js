// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import goods from './components/goods/goods.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

let app = Vue.extend(App);

let Router = new router();

Router.map({
  '/goods': {
    components: goods
  }
})

Router.start(app,'#app');
