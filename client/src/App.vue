<script setup>
import { computed, watch } from 'vue';
import InfiniteTab from './components/organisms/InfiniteTab.vue';
import Login from './components/organisms/Login.vue';
import store from './store';

store.dispatch('users/fetchUsers');
const messageHandler = (data) => {
  const msg = { userId: data.userId, text: data.text, senderId: data.senderId };
  store.dispatch('messages/sendMessage', msg);
}

</script>

<template>
  <div>
    <header>
      {{ currentUsername }}
    </header>
  </div>
  <InfiniteTab :users="users" v-if="currentUsername" :messageHandler="messageHandler"/>
  <Login v-if="!currentUsername"/>
</template>

<script>
import { computed } from 'vue';
const users = computed(() => store.getters['users/activeUsers']);
const currentUsername = computed(() => store.getters['users/currentUsername']);
</script>

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
