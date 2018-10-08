// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 1.
import Vuex from './../node_modules/vuex/dist/vuex'

// 2.
Vue.use(Vuex);

// 3.创建vuex
const store = new Vuex.Store({
  state: {
    nickName: "",
    cartCount: 0
  },
  mutations: {
   updateUserInfo(state,nickName) {
     state.nickName = nickName;
   },
    updateCartCount(state,cartCount) {
     state.cartCount += cartCount;
    }
  }
});



// 1.引用插件在最前面
import infiniteScroll from 'vue-infinite-scroll'

// 导入全局插件
import {currency} from './Util/currency'
Vue.filter('currency', currency);

// 2.使用插件(参考文档)，具体的定义就在vue页面里面
Vue.use(infiniteScroll);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
