import { createApp } from 'vue'
import router from './router'

import 'uno.css'

import ElementAdminLayout, {
	LayoutSetting,
	SwitchSize,
	SwitchDark,
	SwitchFullScreen,
	SwitchLanguage,
	SwitchTheme
} from 'element-admin-layout-components'

import App from './App.vue'

createApp(App)
	.use(router)
	.use(ElementAdminLayout, {
		logo: 'img/logo.png',
		navbarComponents: [SwitchFullScreen, SwitchDark, SwitchSize, SwitchLanguage, SwitchTheme, LayoutSetting]
	})
	.mount('#app')
