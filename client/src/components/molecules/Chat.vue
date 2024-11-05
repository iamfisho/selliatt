<script setup>
import { ref } from 'vue'

defineProps({
  user: Object,
  messageHandler: Function,
  senderId: String,
})

const text = ref('')

const sendMessage = () => {
  const payload = {
    userId: user.userId,
    text: text.value,
  }
  messageHandler(payload)
}

</script>

<template>
  <div class="row justify-center">
    <div style="width: 100%;">
      <q-chat-message :text="['hey, how are you?']" stamp="7 minutes ago" sent bg-color="amber-7" />
      <q-chat-message :text="['doing fine, how r you?']" stamp="4 minutes ago" text-color="white" bg-color="primary" />
      <q-input bottom-slots v-model="text" label="Label" :dense="dense">

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Escribe un mensaje
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" @click="sendMessage" />
        </template>
      </q-input>
    </div>
  </div>
</template>