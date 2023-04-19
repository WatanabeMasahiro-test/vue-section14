import { createApp } from 'vue'
import Vuex from 'vuex'

import modulesCount from './modules/count'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

createApp(Vuex)

export default new Vuex.Store({
  state: {
    count           : 2,
    message         : '',
  },
//   getters: { // ⏪アロー関数はreturnを省略できる
//     message     : state => state.message,
//   },
//   mutations: {
//     updateMessage(state, newMessage) {
//         state.message = newMessage;
//     },
//   },
//   actions: {    // 【非同期処理を含む処理】
//     updateMessage({ commit }, newMessage) {
//         commit('updateMessage', newMessage);
//     }
//   },
  getters,
  mutations,
  actions,
  modules: {
    modulesCount,
  },
})