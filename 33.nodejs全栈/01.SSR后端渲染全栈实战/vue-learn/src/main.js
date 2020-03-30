import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import Loading from './components/loading/index'
import './conf'
// import i18n from './i18n'
import router from './index/index'

Vue.config.productionTip = false
Vue.use(Loading)

Vue.prototype.$show = function () {
  alert('show')
}

new Vue({
  render: h => h(App),
  store,
  // i18n,
  router
}).$mount('#app')
