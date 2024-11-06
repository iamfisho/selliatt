import { signup, activeUsers } from '../../services/userService';

const state = {
  userId: null,
  username: '',
};

const getters = {
  currentUserId: (state) => state.userId,
  currentUsername: (state) => state.username,
  authError: (state) => state.authError,
  activeUsers: (state) => state.users,
};

const actions = {
  async signupUser({ commit }, userData){
    commit('setAuthError', null);
    try {
      const user = await signup(userData);
      commit('setUser', user);
    } catch (error) {
      commit('setAuthError', error.error || 'Error de registro');
    }
  },
  async fetchUsers({ commit }){
    try {
      const users = await activeUsers();
      commit('setUsers', users);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setUser(state, data){
    state.userId = data.userId;
    state.username = data.username;
  },
  setAuthError(state, error) {
    state.authError = error;
  },
  setUsers(state, users){
    state.users = users;
  },
};

export default {
  namespaced: true, // Habilita el namespacing
  state,
  getters,
  actions,
  mutations,
};