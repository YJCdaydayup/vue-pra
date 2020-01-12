/**
 * Created by yangli on 2020/1/9.
 */
const state = {
    money: 100
};

const mutations = {
    add(state,param) {
        state.money = state.money + param;
    },
    reduce(state) {
        state.money --;
    }
}

const actions = {
    add: ({commit},param)=>{
        commit('add',param)
    },
    reduce: ({commit})=>{
        commit('reduce');
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}