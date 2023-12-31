import { Component, Ref } from 'vue'

/** 布局尺寸 */
export type layoutSizeType = 'large' | 'default' | 'small'
/** element-plus drawer位置 */
export type drawerPositionType = 'rtl' | 'ltr' | 'ttb' | 'btt'

export interface LabelValue {
	label: string
	value: string
}

/** 支持的语言 */
export interface LayoutLanguage {
	'zh-cn': LayoutLanguageItem
	en: LayoutLanguageItem
}

export interface LayoutLanguageItem {
	/** 下拉菜单标题 */
	label: string
	/** 语言配置 */
	messages: {
		element_admin_layout_language: Object
	}
}

/** Layout配置 */
export interface LayoutConfig {
	/** 导航栏标题，默认：后台管理系统 */
	title?: string
	/** 导航栏左侧logo */
	logo?: string
	/** 初始化应用尺寸，默认default */
	size?: layoutSizeType
	/** i18n国际化配置*/
	i18n?: {
		/** 自定义下拉菜单支持切换的语言列表，注意：你无法对其进行扩展，如果需要支持更多类型的语言只能提交pr */
		languages?: LayoutLanguage
	}
	/** 导航头组件 */
	navbarComponents?: Array<Component>
	/** 导航栏右侧组件，请自行注册全局组件，然后传递该组件名字 */
	navbarRightComponent?: string
	/** 是否开启导航标签，默认false */
	openNavTag?: boolean
	/** 初始化应用主题模式，默认跟随平台：auto */
	themeMode?: 'auto' | 'light' | 'dark'
	/** 初始化明亮主题 */
	lightTheme?: LayoutThemeModel
	/** 初始化黑暗主题 */
	darkTheme?: LayoutThemeModel
	/** 亮色背景下的文字颜色，默认淡灰色：#495057 */
	lightTextColor?: string
	/** 暗色背景下的文字颜色，默认淡白色：#f8f9fa */
	darkTextColor?: string
}

/** 主题模型 */
export interface LayoutThemeModel {
	/** layout 主题 */
	layout: {
		/** 导航栏背景色 */
		navbar: string
		/** 侧边栏背景色主题 */
		sidebar: string
		/** 页面容器背景色 */
		section: string
		/** 侧边栏文字激活颜色 */
		sidebarActiveText: string
		/** 导航标签背景色 */
		navTab: string
		/** 导航标签激活背景色 */
		navTabActive: string
	}
	/** element-plus 主题 */
	element: {
		primary: string
		success: string
		warning: string
		danger: string
		info: string
	}
}

/** 侧边栏菜单模型 */
export interface LayoutMenuModel {
	/** 菜单标题 */
	title: string
	/** 菜单是否是i18n字符串 */
	i18n: boolean
	/** 跳转路径 */
	path: string
	/** 菜单icon */
	icon: string
	/** 子路由菜单 */
	children?: Array<LayoutMenuModel>
}

/** 布局路由元数据  */
export interface LayoutRouteMeta {
	/** 路由菜单名字，若为空则使用route name，route name也为空则不显示菜单名字 */
	title?: string
	/** 路由菜单图标 */
	icon?: string
	/** title是否国际化 */
	i18n?: boolean
}

/** 渲染TagView的路由标签接口 */
export interface NavTabModel {
	/** 标签名字 */
	title: string
	/** 标签跳转url */
	path: string
	/** 标签icon */
	icon: string
	/** title是否国际化 */
	i18n?: boolean
}

/** Layout响应式数据 */
export interface LayoutReactiveData {
	/** 侧边栏展开状态下宽度 */
	sidebarExpandWidth: number
	/** 是否缩放sidebar */
	isCollapse: boolean
	/** 小屏下是否显示sidebar弹窗 */
	showSidebarDarwer: boolean
	/** 是否自动折叠菜单 */
	autoCloseMenu: boolean
	/** 是否开启页面缓存 */
	openKeepalive: boolean
	/** drawer位置 */
	drawerPosition: drawerPositionType
	/** sidebar菜单 */
	menus: Array<LayoutMenuModel>
	/** 路由标签 */
	navTabs: Array<NavTabModel>
}

/** 主题响应式数据 */
export interface ThemeReactiveData {
	/** 是否处于黑暗模式 */
	isDark: Ref<boolean>
	/** 当前主题 */
	currentTheme: Ref<LayoutThemeModel>
	/** 当前主题 */
	lightTheme: Ref<LayoutThemeModel>
	/** 当前主题 */
	darkTheme: Ref<LayoutThemeModel>
	/** 切换黑暗模式 */
	toggleDark: () => void
}

/** 断点响应式数据 */
export interface BreakpointReactiveData {
	width: number
	height: number
	mobile: boolean
	xs: boolean
	sm: boolean
	md: boolean
	lg: boolean
	xl: boolean
}
