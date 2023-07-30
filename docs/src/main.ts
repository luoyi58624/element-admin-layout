import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import AdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).use(AdminLayout).mount('#app')
