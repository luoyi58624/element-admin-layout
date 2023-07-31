import { Ref } from 'vue'

/** 导航栏头部按钮 */
export type navbarButtonType =
  | 'full_screen'
  | 'layout_size'
  | 'switch_dark'
  | 'switch_theme'
  | 'switch_language'
  | 'layout_setting'

/** Layout配置 */
export interface LayoutConfig {
  /** 导航栏标题，默认：后台管理系统 */
  title?: string
  /** 导航栏左侧logo */
  logo?: string
  /** 导航头显示的头部按钮，默认全部显示 */
  navbarButtons?: Array<navbarButtonType>
  /** 导航栏右侧组件，请自行注册全局组件，然后传递该组件名字 */
  navbarRightComponent?: string
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
}

// 渲染TagView的路由标签接口
export interface NavTabModel {
  title: string // 标签名字
  path: string // 标签跳转url
  icon: string // 标签icon
}

export type drawerPositionType = 'rtl' | 'ltr' | 'ttb' | 'btt'

export interface LayoutKey {
  /** 页面组件大小 */
  size: string
  /** 是否缩放sidebar */
  isCollapse: boolean
  /** 是否开启导航标签 */
  openNavTab: boolean
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

export interface ThemeKey {
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

export interface BreakpointKey {
  width: number
  height: number
  mobile: boolean
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}
