<script setup>
import { ref } from 'vue'
import Chat from '../molecules/Chat.vue'
import store from '../../store'

defineProps({
  users: Array,
  messageHandler: Function,
})

const currentUserId = store.getters['users/currentUserId']

const tab = ref('chats')
const splitterModel = ref(10)

</script>

<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 100%">

      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab v-for="user in users" :name="user.username" :label="user.username" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
          <q-tab-panel v-for="user in users" :name="user.username">
            <Chat :user="user" :messageHandler="messageHandler" :senderId="currentUserId"/>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>