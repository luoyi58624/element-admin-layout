import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	legacy: false,
	allowComposition: true,
	locale: 'zh-cn',
	fallbackLocale: 'zh-cn',
	messages: {}
})

export default i18n
