import { App, UnwrapNestedRefs, InjectionKey } from 'vue'
import { BreakpointReactiveData, LayoutConfig, LayoutReactiveData, ThemeReactiveData, drawerPositionType } from '../types'
import { StorageKey, darkThemes, lightThemes } from '../config'

import Layout from './layout/Layout.vue'
import NestRouterView from './layout/components/NestRouterView.vue'

import SwitchFullScreen from './layout/navbar/SwitchFullScreen.vue'
import SwitchDark from './layout/navbar/SwitchDark.vue'
import SwitchSize from './layout/navbar/SwitchSize.vue'
import SwitchLanguage from './layout/navbar/SwitchLanguage.vue'
import SwitchTheme from './layout/navbar/theme/SwitchTheme.vue'
import LayoutSetting from './layout/navbar/LayoutSetting.vue'

import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { RouteRecordRaw } from 'vue-router'
import { safeStorageData } from 'element-admin-layout-utils'

/** 注入layoutConfig配置*/
const layoutConfigKey: InjectionKey<LayoutConfig> = Symbol()

/** 布局响应式数据 */
const layoutKey: InjectionKey<UnwrapNestedRefs<LayoutReactiveData>> = Symbol()

/** 主题响应式数据 */
const themeKey: InjectionKey<ThemeReactiveData> = Symbol()

/** 响应式断点数据 */
const breakpointKey: InjectionKey<UnwrapNestedRefs<BreakpointReactiveData>> = Symbol()

/**
 * 创建Layout路由
 * @param routes      layout子路由
 * @param layoutPath  layout路由地址，默认：'/'
 * @param redirectPath  重定向地址
 * @returns
 */
function createLayoutRouter(routes: RouteRecordRaw[], layoutPath = '/', redirectPath?: string): RouteRecordRaw {
	return {
		path: layoutPath,
		name: 'Layout',
		redirect: redirectPath,
		component: Layout,
		children: routes
	}
}

export {
	layoutConfigKey,
	layoutKey,
	themeKey,
	breakpointKey,
	NestRouterView,
	SwitchFullScreen,
	SwitchDark,
	SwitchSize,
	SwitchLanguage,
	SwitchTheme,
	LayoutSetting,
	installAdminLayout,
	createLayoutRouter
}

/** 安装element-admin-layout插件 */
export default {
	install(app: App, options?: LayoutConfig) {
		const layoutConfig: LayoutConfig = {
			title: options?.title ?? '后台管理系统',
			logo: options?.logo ?? undefined,
			size: options?.size ?? 'default',
			// navbarButtons: options?.navbarButtons ?? [
			// 	'full_screen',
			// 	'switch_dark',
			// 	'layout_size',
			// 	'switch_language',
			// 	'switch_theme',
			// 	'layout_setting'
			// ],
			navbarComponents: options?.navbarComponents ?? [],
			themeMode: options?.themeMode ?? 'auto',
			lightTheme: options?.lightTheme ?? lightThemes[0],
			darkTheme: options?.darkTheme ?? darkThemes[0],
			lightTextColor: options?.lightTextColor ?? '#495057',
			darkTextColor: options?.darkTextColor ?? '#f8f9fa'
		}

		const layoutData = reactive(
			safeStorageData<LayoutReactiveData>(StorageKey.layoutData, {
				size: layoutConfig.size!,
				isCollapse: false,
				showSidebarDarwer: false,
				autoCloseMenu: false,
				openKeepalive: false,
				drawerPosition: 'rtl' as drawerPositionType,
				menus: [],
				navTabs: []
			})
		)

		const isDark = useDark({
			initialValue: safeStorageData(StorageKey.themeMode, options?.themeMode ?? 'auto')
		})
		const toggleDark = useToggle(isDark)
		const lightTheme = ref(safeStorageData(StorageKey.lightTheme, layoutConfig.lightTheme!))
		const darkTheme = ref(safeStorageData(StorageKey.darkTheme, layoutConfig.darkTheme!))
		const currentTheme = computed(() => (isDark.value ? darkTheme.value : lightTheme.value))
		const themeData = {
			isDark,
			currentTheme,
			lightTheme,
			darkTheme,
			toggleDark
		}

		const breakpointData = reactive<BreakpointReactiveData>({
			width: 0,
			height: 0,
			mobile: false,
			xs: false,
			sm: false,
			md: false,
			lg: false,
			xl: false
		})

		const navbarHeight = computed(() => {
			switch (layoutData.size) {
				case 'small':
					return 48
				case 'default':
					return 56
				case 'large':
					return 64
			}
		})

		const sidebarWidth = computed(() => {
			if (breakpointData.mobile) return 0
			else return layoutData.isCollapse ? 64 : 240
		})

		watch(layoutData, value => {
			localStorage.setItem(StorageKey.layoutData, JSON.stringify(value))
		})
		watch(lightTheme, value => {
			localStorage.setItem(StorageKey.lightTheme, JSON.stringify(value))
		})
		watch(darkTheme, value => {
			localStorage.setItem(StorageKey.darkTheme, JSON.stringify(value))
		})

		app.provide(layoutConfigKey, layoutConfig)
		app.provide(layoutKey, layoutData)
		app.provide(themeKey, themeData)
		app.provide(breakpointKey, breakpointData)
		app.provide('navbarHeight', navbarHeight)
		app.provide('sidebarWidth', sidebarWidth)
	}
}
