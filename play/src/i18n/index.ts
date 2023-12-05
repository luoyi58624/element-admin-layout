import { createI18n } from 'vue-i18n'

const messages = {
	'zh-cn': {
		menu: {
			home: '首页',
			test: '测试',
			nestMenu: '嵌套菜单'
		},
		message: {
			hello: '你好，世界'
		}
	},
	en: {
		menu: {
			home: 'Home',
			test: 'Test',
			nestMenu: 'Nest Menu'
		},
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
