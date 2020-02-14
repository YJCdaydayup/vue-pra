import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './conf'

Vue.config.productionTip = false

Vue.prototype.$show = function () {
  alert('show')
}

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
