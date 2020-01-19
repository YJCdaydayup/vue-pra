const state = {
    list: ['a', 'b', 'c'],
    token: ''
}

const mutations = {
    add(state, param) {
        state.list.push(param)
    },
    setToken(state, param) {
        state.token = param
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