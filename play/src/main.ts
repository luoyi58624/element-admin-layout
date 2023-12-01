import { createApp } from 'vue'
import i18n from './i18n'
import router from './router'

import 'uno.css'

import {
	installElementAdminLayout,
	LayoutSetting,
	SwitchSize,
	SwitchDark,
	SwitchFullScreen,
	SwitchLanguage,
	SwitchTheme
} from 'element-admin-layout-components'

import App from './App.vue'

createApp(App)
	.use(i18n)
	.use(router)
	.use(installElementAdminLayout, {
		logo: 'img/logo.png',
		i18n: {
			defaultLanguage: 'zh-cn'
		},
		navbarComponents: [SwitchFullScreen, SwitchDark, SwitchSize, SwitchLanguage, SwitchTheme, LayoutSetting]
	})
	.mount('#app')
