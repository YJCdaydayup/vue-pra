/**
 * Created by yangli on 2020/1/15.
 */
const state = {
  app: []
}

const mutations = {
  add(state, text) {
    state.app.push(text)
  }
}

const actions = {
  add({commit}, text) {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
