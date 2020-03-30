/**
 * Created by yangli on 2020/1/12.
 */

import Vue from 'vue'
import Vuex from 'vuex'

// import money from './modules/a'
// import count from './modules/b'

Vue.use(Vuex);

export default new Vuex.Store({
   // modules: {
   //     money,
   //     count
   // }
    state: {
        locale: {}
    },
    getter: {
        locale(state) {
            return state.locale.translations
        }
    },
    mutations: {
        setLocale(state, params) {
            state.locale = params
        }
    },
    actions: {
        setLocale({commit}, params) {
            commit('setLocale',params)
        }
    }
});