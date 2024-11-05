const state = {
  messages: [],
};

const getters = {
  allMessages: (state) => state.messages,
};

const actions = {
  sendMessage({ commit }, message) {
    // Add message to local store and send it to the server
    commit('newMessage', message);
    // Additional logic to emit the message via WebSocket or API can go here
  },
  receiveMessage({ commit }, message) {
    // Commit received message to local store
    commit('newMessage', message);
  },
};

const mutations = {
  newMessage: (state, message) => state.messages.push(message),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};