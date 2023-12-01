import { createI18n } from 'vue-i18n'

const messages = {
	'zh-cn': {
		message: {
			hello: '你好，世界'
		}
	},
	en: {
		message: {
			hello: 'hello world'
		}
	}
}

const i18n = createI18n({
	legacy: false,
	allowComposition: true,
	locale: 'zh-cn',
	fallbackLocale: 'zh-cn',
	messages: messages
})

export default i18n
