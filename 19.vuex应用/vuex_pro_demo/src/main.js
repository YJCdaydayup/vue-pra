// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);

import {ADD_MUTATION} from "./mutations/mutations"
import moduleA from './modules/ModuleA'
import moduleB from './modules/ModuleB'

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: 'haha', done: true},
      {id: 2, text: 'hehe', done: false},
    ]
  },
  modules: {
    A:moduleA,
    B:moduleB
  },
  mutations: {
    increment(state,payload) {
      state.count += payload.len;
    },
    [ADD_MUTATION](state) {
      state.count += 10;
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    },
    doneTodoCount(state, getters) {
      return getters.doneTodos.length;
    },
    mulState(state) {
      return state.count * 10;
    }
  },
  actions: {
    async action1(context,payload) {
     let x = await context.dispatch('checkout',{
        len: 1
      })
      return x;
    },
    checkout({commit,state},payload) {
      return new Promise((resolve,reject) => {
        setInterval(()=>{
          commit('increment',{
            len: payload.len
          })
          resolve('提交完毕');
        },3000)
      })
    }
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
