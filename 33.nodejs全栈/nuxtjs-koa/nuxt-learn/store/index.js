/**
 * Created by yangli on 2020/1/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  actions: {
    // 每次进来时都会经过这里
    // 在这里可以保存登录的用户名
    nuxtServerInit({commit}, {req}) {
      if (req.session.user) {
        commit('city', req.sesson.user)
      }
    }
  }
})

export default store
