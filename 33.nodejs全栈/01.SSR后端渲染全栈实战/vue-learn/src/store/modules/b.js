/**
 * Created by yangli on 2020/1/9.
 */
const state = {
    count: 10
};

const mutations = {
    add(state) {
        state.count ++;
    },
    reduce(state) {
        state.count --;
    }
}

const actions = {
    add: ({commit})=>{
        commit('add')
    },
    reduce({commit}){
        commit('reduce');
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}