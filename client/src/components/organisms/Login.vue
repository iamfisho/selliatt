<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const username = ref('');
const authError = computed(() => store.getters['users/authError']);

function login() {
  store.dispatch('users/signupUser', username.value);
}
</script>

<template>
  <div class="container">
    <input v-model="username" placeholder="username" />
    <button @click="login">Login</button>
    <p class="error" v-if="authError">{{ authError }}</p>
  </div>
</template>

<style lang="scss">
.container {
  margin-top: 25vh;
  display: grid;
  justify-content: center;
  align-items: center;
  line-height: 10px;
  width: 100vw;
  height: 8vh;
  input {
    padding: 10px;
    display: block;
  }
  button {
    display: block;
    padding: 10px;
  }
  .error {
    color: red;
    padding-top: 4px;
  }
}
</style>