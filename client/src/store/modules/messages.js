import { fetchMessages as fetchAllMessages } from '../../services/messageService';

import VueSocketIO from 'vue-socket.io';
import store from '../index';

const socket = new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
});

const state = {
  messages: [],
};

const getters = {
  allMessages: (state) => state.messages,
};

const actions = {
  sendMessage({ commit }, message) {
    // Add message to local store and send it to the server
    socket.io.emit('sendMessage', message);
    commit('newMessage', { ...message, timestamp: Date.now() } );
    // Additional logic to emit the message via WebSocket or API can go here
  },
  receiveMessage({ commit }, message) {
    // Commit received message to local store
    commit('newMessage', message);
  },
  fetchMessages({ commit }, { userId, senderId }) {
    commit('setMessages', []);
    fetchAllMessages(userId, senderId)
      .then(messages => commit('setMessages', messages))
      .catch(error => console.log(error));
  }
};

const mutations = {
  newMessage: (state, message) => state.messages.push(message),
  setMessages: (state, messages) => state.messages = messages,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};