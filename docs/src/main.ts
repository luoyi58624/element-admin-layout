import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import AdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'

createApp(App).use(router).use(AdminLayout,{
  navbarButtons: ['switch_dark','switch_language']
}).mount('#app')
