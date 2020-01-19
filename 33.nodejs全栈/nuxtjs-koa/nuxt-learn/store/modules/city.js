/**
 * Created by yangli on 2020/1/15.
 */
const state = {
  list: [1, 2, 3, 4, 5, 6]
}

const mutations = {
  add(state, text) {
    state.list.push(text)
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
