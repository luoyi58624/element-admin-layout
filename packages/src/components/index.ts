import { App, UnwrapNestedRefs, InjectionKey } from 'vue'
import { BreakpointKey, LayoutConfig, LayoutKey, ThemeKey } from '../types'
import { StorageKey, darkThemes, lightThemes } from '../config'

import Layout from './layout/Layout.vue'
import NestRouterView from './layout/components/NestRouterView.vue'

import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { RouteRecordRaw } from 'vue-router'
import { safeStorageData } from 'element-admin-layout-utils'

/** 注入layoutConfig配置*/
const layoutConfigKey: InjectionKey<LayoutConfig> = Symbol()

/** 布局响应式数据 */
const layoutKey: InjectionKey<UnwrapNestedRefs<LayoutKey>> = Symbol()

/** 主题响应式数据 */
const themeKey: InjectionKey<ThemeKey> = Symbol()

/** 响应式断点数据 */
const breakpointKey: InjectionKey<UnwrapNestedRefs<BreakpointKey>> = Symbol()

/** 安装element-admin-layout插件 */
const installAdminLayout = {
  install(app: App, options?: LayoutConfig) {
    const config: LayoutConfig = {
      title: options?.title ?? '后台管理系统',
      logo: options?.logo ?? undefined,
      navbarButtons: options?.navbarButtons ?? [
        'full_screen',
        'switch_dark',
        'layout_size',
        'switch_language',
        'switch_theme',
        'layout_setting'
      ],
      themeMode: safeStorageData(StorageKey.themeMode, options?.themeMode ?? 'auto'),
      lightTheme: safeStorageData(StorageKey.lightTheme, options?.lightTheme ?? lightThemes[0]),
      darkTheme: safeStorageData(StorageKey.darkTheme, options?.darkTheme ?? darkThemes[0]),
      lightTextColor: options?.lightTextColor ?? '#495057',
      darkTextColor: options?.darkTextColor ?? '#f8f9fa'
    }
    app.provide(layoutConfigKey, config)
  }
}

/**
 * 创建Layout路由
 * @param routes      layout子路由
 * @param layoutPath  layout路由地址，默认：'/'
 * @returns
 */
function createLayoutRouter(routes: RouteRecordRaw[], layoutPath = '/'): RouteRecordRaw {
  return {
    path: layoutPath,
    name: 'Layout',
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
  installAdminLayout,
  createLayoutRouter
}
