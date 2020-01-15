/**
 * Created by yangli on 2020/1/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    city,
    navbar
  },
  actions: {

  }
})
