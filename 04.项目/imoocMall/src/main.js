// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 1.引用插件在最前面
import infiniteScroll from 'vue-infinite-scroll'

// 2.使用插件(参考文档)，具体的定义就在vue页面里面
Vue.use(infiniteScroll);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
