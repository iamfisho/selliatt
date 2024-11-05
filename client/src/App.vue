<script setup>
import { computed } from 'vue';
import InfiniteTab from './components/organisms/InfiniteTab.vue';
import Login from './components/organisms/Login.vue';
import store from './store';
import VueSocketIO from 'vue-socket.io';

const users = computed(() => store.getters['users/activeUsers']);
const currentUsername = computed(() => store.getters['users/currentUsername']);


const isLoggedIn = currentUsername.value !== '';

store.dispatch('users/fetchUsers');

const socket = new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
});

const messageHandler = () => {
  const msg = { username: currentUsername.value, text: 'Example' };
  console.log('Sending message', msg);
  socket.io.emit('sendMessage', msg);
}

</script>

<template>
  <div>
    <header>
      The chatroom {{isLoggedIn ? `as ${currentUsername}` : 'is not connected'}}
    </header>
  </div>
  <InfiniteTab :users="users" v-if="isLoggedIn" :messageHandler="messageHandler"/>
  <Login v-if="!isLoggedIn"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
