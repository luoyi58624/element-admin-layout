import { Router } from 'vue-router'
/** Layout组件props */
export interface LayoutProps {
  /** 导航栏左侧logo */
  logo?: string
  /** 导航栏标题，默认：后台管理系统 */
  title?: string
  /** 导航栏右侧组件 */
  navbarRightComponent?: string
  /** 初始化路由，根据路由生成菜单 */
  router: Router
  /** 初始化明亮主题 */
  lightTheme?: LayoutThemeModel
  /** 初始化黑暗主题 */
  darkTheme?: LayoutThemeModel
}

/** 主题模型 */
export interface LayoutThemeModel {
  /** element主题 */
  element: {
    primary: string
    success: string
    warning: string
    danger: string
    info: string
  }
  /** 布局主题 */
  layout: {
    /** 导航栏背景色 */
    navbar: string
    /** 侧边栏背景色主题 */
    sidebar: string
    /** 页面容器背景色 */
    section: string
    /** 侧边栏文字激活颜色 */
    sidebarActiveText: string
  }
}

/** 侧边栏菜单模型 */
export interface LayoutMenuModel {
  /** 菜单标题 */
  title?: string
  /** 跳转路径 */
  path?: string
  /** 菜单icon */
  icon?: string
  /** 子路由菜单 */
  children?: Array<LayoutMenuModel>
}

/** 布局路由元数据  */
export interface LayoutRouteMeta {
  auth?: boolean
  /** 路由菜单名字，如果为空则使用componentName */
  title?: string
  /** 路由菜单图标 */
  icon?: string
}

// 渲染TagView的路由标签接口
export interface NavTabModel {
  title: string // 标签名字
  path: string // 标签跳转url
  icon: string // 标签icon
}
