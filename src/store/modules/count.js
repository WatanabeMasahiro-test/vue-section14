const state = {
    count           : 2,
    defaultCount    : 1,
}

const getters = {
    singleCount  : state => state.count,     // ⏪HomeView.vueの9行目の{{ count }}がmodule化で効かなくなったので代替
    doubleCount : state => state.count * 2,
    tripleCount : state => state.count * 3,
}

const mutations = {
    increment(state, number) {
        state.count += number;
    },
    decrement(state, number) {
        state.count -= number;
    },
}

const actions = {
    // increment(context, number) {
    //     context.commit('increment', number);
    // }
    increment({ commit }, number) {
        commit('increment', number);
    },
    decrement({ commit }, number) {
        commit('decrement', number);
    },
}

export default {
    // namespaced: true,
    state,
    getters,
    mutations,
    actions,
}