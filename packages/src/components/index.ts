import { App, ref, reactive, computed, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { BreakpointReactiveData, LayoutConfig, LayoutReactiveData, drawerPositionType } from '../types'
import {
	StorageKey,
	layoutDarkThemes,
	layoutLightThemes,
	layoutConfigKey,
	layoutSizeKey,
	layoutDataKey,
	layoutThemeDataKey,
	layoutBreakpointDataKey
} from '../config'
import { layoutLanguage } from '../locale'

import Layout from '../layout/Layout.vue'
import NestRouterView from '../layout/components/NestRouterView.vue'

import LayoutProvide from './provide/LayoutProvide.vue'
import Icon from './icon/Icon.vue'
import SwitchFullScreen from './navbar/SwitchFullScreen.vue'
import SwitchDark from './navbar/SwitchDark.vue'
import SwitchSize from './navbar/SwitchSize.vue'
import SwitchLanguage from './navbar/SwitchLanguage.vue'
import SwitchTheme from './navbar/theme/SwitchTheme.vue'
import LayoutSetting from './navbar/LayoutSetting.vue'

import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '../styles/index.scss'

import { RouteRecordRaw } from 'vue-router'
import { safeStorageData } from 'element-admin-layout-utils'
import { merge } from 'lodash-es'

/**
 * 创建Layout路由
 * @param routes      layout子路由
 * @param layoutPath  layout路由地址，默认：'/'
 * @param redirectPath  重定向地址
 * @returns
 */
export function createLayoutRouter(routes: RouteRecordRaw[], layoutPath = '/', redirectPath?: string): RouteRecordRaw {
	return {
		path: layoutPath,
		name: 'Layout',
		redirect: redirectPath,
		component: Layout,
		children: routes
	}
}

/** 安装element-admin-layout插件 */
export const installElementAdminLayout = {
	install(app: App, options?: LayoutConfig) {
		const layoutConfig: LayoutConfig = {
			title: options?.title ?? '后台管理系统',
			logo: options?.logo ?? undefined,
			size: options?.size ?? 'default',
			i18n: merge(
				{
					defaultLanguage: 'zh-cn',
					languages: layoutLanguage
				},
				options?.i18n
			),
			navbarComponents: options?.navbarComponents ?? [],
			themeMode: options?.themeMode ?? 'auto',
			lightTheme: options?.lightTheme ?? layoutLightThemes[0],
			darkTheme: options?.darkTheme ?? layoutDarkThemes[0],
			lightTextColor: options?.lightTextColor ?? '#495057',
			darkTextColor: options?.darkTextColor ?? '#f8f9fa'
		}

		const layoutSize = ref(safeStorageData(StorageKey.layoutSize, layoutConfig.size!))

		const defaultSidebarExpandWidth = computed(() => {
			switch (layoutSize.value) {
				case 'small':
					return 180
				case 'large':
					return 260
				default:
					return 220
			}
		})

		const navbarHeight = computed(() => {
			switch (layoutSize.value) {
				case 'small':
					return 44
				case 'large':
					return 64
				default:
					return 56
			}
		})

		const navTabHeight = computed(() => {
			switch (layoutSize.value) {
				case 'small':
					return 28
				case 'large':
					return 36
				default:
					return 32
			}
		})

		const layoutData = reactive(
			safeStorageData<LayoutReactiveData>(StorageKey.layoutData, {
				sidebarExpandWidth: defaultSidebarExpandWidth.value,
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

		const sidebarWidth = computed(() => {
			if (breakpointData.mobile) return 0
			else return layoutData.isCollapse ? 64 : layoutData.sidebarExpandWidth
		})

		watch(layoutSize, value => {
			localStorage.setItem(StorageKey.layoutSize, value)
			layoutData.sidebarExpandWidth = defaultSidebarExpandWidth.value
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
		app.provide(layoutSizeKey, layoutSize)
		app.provide(layoutDataKey, layoutData)
		app.provide(layoutThemeDataKey, themeData)
		app.provide(layoutBreakpointDataKey, breakpointData)
		app.provide('navbarHeight', navbarHeight)
		app.provide('sidebarWidth', sidebarWidth)
		app.provide('navTabHeight', navTabHeight)
		app.provide('defaultSidebarExpandWidth', defaultSidebarExpandWidth)
	}
}

export { StorageKey }
export {
	LayoutProvide,
	Icon,
	NestRouterView,
	SwitchFullScreen,
	SwitchDark,
	SwitchSize,
	SwitchLanguage,
	SwitchTheme,
	LayoutSetting
}
