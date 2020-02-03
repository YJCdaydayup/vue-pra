/**
 * Created by yangli on 2020/2/3.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    // 研究一下第二个参数里面的app对象,顺便研究下那个完整项目的登录使用vuex的情况
    async nuxtServerInit(store, {req, app}) {

      // 获取全局定位地址
      const {status, data: {province,city}} = await app.$axios.get('/geo/getPosition')
      store.commit('geo/setPosition',status === 200? {city,province} : {city: '',province: ''})

      // 获取hotPlace，对于
      const {status:status2,data: {menu}} = await app.$axios.get('/geo/menu')
      store.commit('home/setMenu',menu.menu)

    }
  }
})

export default store
