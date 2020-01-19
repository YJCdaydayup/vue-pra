const state = {
    list: ['1', '2', '3']
}

const mutations = {
    add(state, param) {
        state.list.push(param)
    }
}

const actions = {
    add({commit}, param) {
        commit('add', param)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}