import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import order from './modules/order'

Vue.use(Vuex)

const store = ()=> new Vuex.Store({
    modules: {
        city,
        order
    },
    actions: {
        nuxtServerInit(store, {req}) {
           let cookie = req.headers.cookie
           store.state.city.token = cookie;
        }
    }
})

export default store