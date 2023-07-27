import { createApp } from 'vue'
import router from './router'
import 'uno.css'
// import '@unocss/reset/tailwind-compat.css'
// import 'vue3-admin-layout/dist/style.css'

import App from './App.vue'

createApp(App).use(router).mount('#app')
