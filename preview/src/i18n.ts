import { createI18n } from 'vue-i18n'
import { layoutLanguage_zhCn, layoutLanguage_en } from 'element-admin-layout'

const messages = {
	'zh-cn': {
		...layoutLanguage_zhCn,
		message: {
			hello: '你好，世界'
		}
	},
	en: {
		...layoutLanguage_en,
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
