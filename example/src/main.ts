import { createApp } from 'vue'
import router from './router'
import 'uno.css'
import { installAdminLayout } from 'element-admin-layout-components'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(installAdminLayout, {
    title: 'Luoyi后台管理系统',
    logo: '/img/logo.png'
  })
  .mount('#app')
