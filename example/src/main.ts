import { createApp } from 'vue'
import router from './router'

import 'uno.css'

import ElementAdminLayout from 'element-admin-layout-components'

import App from './App.vue'

createApp(App)
	.use(router)
	.use(ElementAdminLayout, {
		logo: 'img/logo.png'
	})
	.mount('#app')
