import { createStore } from 'vuex';
import messages from './modules/messages';
import users from './modules/users';
import persistState from '../plugins/persistState';

export default createStore({
  modules: {
    messages,
    users
  },
  plugins: [persistState],
});