/**
 * Created by yangli on 2020/1/15.
 */
const state = {
  list: []
}

const mutations = {
  add(state,text) {
    state.list.push(text)
  }
}

const actions = {
  add({commit},text) {
    commit('add',text)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
