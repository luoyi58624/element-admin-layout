import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import ElementAdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'

createApp(App).use(router).use(ElementAdminLayout).mount('#app')
