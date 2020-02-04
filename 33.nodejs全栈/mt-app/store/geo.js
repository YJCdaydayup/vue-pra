/**
 * Created by yangli on 2020/2/3.
 */
 export const state = () => {
  position: {}
}

export const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

export const actions = {
  setPosition({commit}, position) {
    commit('setPosition', position)
  }
}

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }

