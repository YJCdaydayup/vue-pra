export default {
  namespace: true,
  state: {
    countB: 0
  },
  mutations: {
    mutB(state) {
      state.countB++;
    },
    mutBB(state, payload) {
      state.countB += payload.len;
    }
  },
  getters: {
    getterB(state, getters) {
      return state.countB * 10;
    }
  },
  actions: {
    async actionB(context) {
      await context.dispatch('actionBB', {
        len: 666
      });
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('mutB')
          resolve()
        },1000)
      })
    },
    async actionBB(context, payload) {
      setTimeout(function () {
        context.commit('mutBB', payload)
      }, 1000)
    }
  }
}
