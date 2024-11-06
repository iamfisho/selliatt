<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  user: Object,
  messageHandler: Function,
  senderId: String,
})

let text = ref('')
const messages = computed(() => store.getters['messages/allMessages'])

const sendMessage = (e) => {
  e.preventDefault()
  const payload = {
    userId: props.user.userId,
    senderId: props.senderId,
    text: text.value,
  }
  props.messageHandler(payload)
  text.value = ''
}

const loadMessages = () => {
  store.dispatch('messages/fetchMessages', { userId:props.user.userId, senderId: props.senderId})
}

loadMessages()

const timestampToRelativeTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)
  if (years > 0) return `Hace ${years} años`
  if (months > 0) return `Hace ${months} meses`
  if (days > 0) return `Hace ${days} días`
  if (hours > 0) return `Hace ${hours} horas`
  if (minutes > 0) return `Hace ${minutes} minutos`
  if (seconds > 0) return `Hace ${seconds} segundos`
  return 'Justo ahora'
}

</script>

<template>
  <div class="row justify-center conversation">
    <div style="width: 100%;">
      <q-chat-message v-for="message in messages" :text="[message.text]" :stamp="timestampToRelativeTime(message.timestamp)" :sent="senderId !== message.userId" :bg-color="senderId == message.userId ? 'primary' : 'amber-7'"/>
      <form @submit="sendMessage" class="bottom">
      <q-input bottom-slots v-model="text" label="Mensaje">

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:after>
            <q-btn round dense flat icon="send" @click="sendMessage" />
          </template>
        </q-input>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
div.conversation {
  form.bottom {
    position: fixed;
    bottom: 0;
    width: calc(100% - 11%);
    padding: 10px;
    background-color: white;
  }
}
</style>