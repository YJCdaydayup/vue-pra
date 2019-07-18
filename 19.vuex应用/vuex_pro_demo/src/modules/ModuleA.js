export default {
  namespaced: true,
  state: {
    countA: 111
  },
  mutations: {
    mutA(state) {
      state.countA++
    },
    mutAA(state, payload) {
      state.countA += payload.len
    }
  },
  getters: {
    getterA(state, getters) {
      return state.countA * 10;
    }
  },
  actions: {
    actionA(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('mutAA',{
            len: 888
          })
          resolve();
        }, 1000)
      })
    }
  }
}
