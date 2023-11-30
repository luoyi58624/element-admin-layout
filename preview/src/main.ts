import { createApp } from 'vue'
import i18n from './i18n'
import router from './router'
import App from './App.vue'

import ElementAdminLayout, {
	LayoutSetting,
	SwitchDark,
	SwitchFullScreen,
	SwitchLanguage,
	SwitchSize,
	SwitchTheme
} from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'

createApp(App)
	.use(i18n)
	.use(router)
	.use(ElementAdminLayout, {
		logo: 'vite.svg',
		navbarComponents: [SwitchFullScreen, SwitchDark, SwitchSize, SwitchLanguage, SwitchTheme, LayoutSetting]
	})
	.mount('#app')
