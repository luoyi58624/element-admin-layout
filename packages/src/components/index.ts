import { App } from 'vue'
import { LayoutConfig } from '../types'
import { darkThemes, layoutConfigKey, lightThemes } from '../config'

import Layout from './layout/Layout.vue'
import NestRouterView from './layout/components/NestRouterView.vue'

import 'uno.css'
import '../styles/index.scss'
import { RouteRecordRaw } from 'vue-router'

/** 安装element-admin-layout插件 */
const installAdminLayout = {
  install(app: App, options?: LayoutConfig) {
    const config: LayoutConfig = {
      title: options?.title ?? '后台管理系统',
      logo: options?.logo ?? undefined,
      lightTheme: options?.lightTheme ?? lightThemes[0],
      darkTheme: options?.darkTheme ?? darkThemes[0]
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

export { NestRouterView, installAdminLayout, createLayoutRouter }
