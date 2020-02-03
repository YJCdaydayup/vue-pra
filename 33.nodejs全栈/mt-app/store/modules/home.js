/**
 * Created by yangli on 2020/2/3.
 */
const state = ()=>({
  menu: [],
  hotPlace: []
})

const mutations = {
  setMenu(state, val) {
    console.log('123456')
    console.log(val)
    state.menu = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  },
}

const actions = {
  setMenu({commit}, menu) {
    commit('setMenu', menu)
  },
  setHotPlace({commit}, hotPlace) {
    commit('setHotPlace', hotPlace)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

