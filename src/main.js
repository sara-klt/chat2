import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './dateFormat.js'

// Vue.use(require('vue-moment'));
createApp(App).use(router).mount('#app')
