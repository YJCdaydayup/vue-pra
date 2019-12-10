// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);

import {ADD_MUTATION, LOGIN_MUTATION, LOGOUT_MUTATION} from "./mutations/mutations"
import moduleA from './modules/ModuleA'
import moduleB from './modules/ModuleB'
import {TOOL_KEYS, getLocalStorage, setLocalStorage} from './tool/tool'

export const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: 'haha', done: true},
      {id: 2, text: 'hehe', done: false},
    ],
    isLogin: getLocalStorage(TOOL_KEYS.LOGIN_KEY) || 0,
    userName: getLocalStorage(TOOL_KEYS.USER_NAME) || ''
  },
  modules: {
    A: moduleA,
    B: moduleB
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.len;
    },
    [ADD_MUTATION](state) {
      state.count += 10;
    },
    [LOGIN_MUTATION](state, params) {
      state.isLogin = params.token;
      state.userName = params.userName;
      setLocalStorage(TOOL_KEYS.LOGIN_KEY, params.token);
      setLocalStorage(TOOL_KEYS.USER_NAME, params.userName);
    },
    [LOGOUT_MUTATION](state) {
      state.isLogin = 0;
      state.userName = '';
      setLocalStorage(TOOL_KEYS.LOGIN_KEY, 0);
      setLocalStorage(TOOL_KEYS.USER_NAME, '');
      console.log(getLocalStorage(TOOL_KEYS.USER_NAME))
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
    },
    userName(state) {
      return state.userName;
    }
  },
  actions: {

    // 第一种action
    async action1(context, payload) {
      let x = await context.dispatch('checkout', {
        len: 1
      })
      return x;
    },
    checkout({commit, state}, payload) {
      return new Promise((resolve, reject) => {
          commit('increment', {
            len: payload.len
          })
          resolve('提交完毕');
      })
    },
    login({commit, state}, params) {
      console.log(params)
      return new Promise((resolve, reject) => {
          commit(`LOGIN_MUTATION`, params);
          resolve();
      });
    },
    // 第二种action
    logout({commit, state}) {
      return new Promise((resolve, reject) => {
          commit(`LOGOUT_MUTATION`);
          resolve();
      })
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});



