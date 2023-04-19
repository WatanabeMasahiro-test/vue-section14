export default {    // 【非同期処理を含む処理】
    updateMessage({ commit }, newMessage) {
        commit('updateMessage', newMessage);
    }
  }