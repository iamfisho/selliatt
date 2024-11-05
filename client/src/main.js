import { createApp } from 'vue'
import store from './store'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import quasarIconSet from 'quasar/icon-set/svg-eva-icons'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/themify/themify.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

// Register Vuex store
console.log('store', store.state.users)

myApp.use(store)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')