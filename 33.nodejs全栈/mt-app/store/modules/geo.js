/**
 * Created by yangli on 2020/2/3.
 */
const state = {
  position: {}
}

const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

const actions = {
  setPosition({commit}, position) {
    commit('setPosition', position)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

