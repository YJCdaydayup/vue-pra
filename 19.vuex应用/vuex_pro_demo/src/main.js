// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);

import {ADD_MUTATION} from "./mutations/mutations"

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: 'haha', done: true},
      {id: 2, text: 'hehe', done: false},
    ]
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
    }
  },
  actions: {
    checkout({commit,state},payload) {
      setInterval(()=>{
        commit('increment',{
          len: payload.len
        })
      },1000)
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
