import type { InjectionKey, Ref, UnwrapNestedRefs } from 'vue'
import { LayoutThemeModel, LayoutMenuModel, NavTabModel, LayoutConfig } from '../types'

/** 注入layoutConfig配置*/
export const layoutConfigKey: InjectionKey<LayoutConfig> = Symbol()

export type drawerPositionType = 'rtl' | 'ltr' | 'ttb' | 'btt'

interface LayoutKey {
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
/** 布局响应式数据 */
export const layoutKey: InjectionKey<UnwrapNestedRefs<LayoutKey>> = Symbol()

interface ThemeKey {
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
/** 主题响应式数据 */
export const themeKey: InjectionKey<ThemeKey> = Symbol()

interface BreakpointKey {
  width: number
  height: number
  mobile: boolean
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}
/** 响应式断点数据 */
export const breakpointKey: InjectionKey<UnwrapNestedRefs<BreakpointKey>> = Symbol()
