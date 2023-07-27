import type { InjectionKey, Ref, UnwrapNestedRefs } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { ThemeModel } from '../types'

export interface LayoutProps {
  /** 导航栏左侧logo */
  logo?: string
  /** 导航栏右侧组件 */
  navbarRightComponent?: string
  /** 初始化路由，根据路由生成菜单 */
  initRoutes?: Array<RouteRecordRaw>
  /** 初始化明亮主题 */
  lightTheme?: ThemeModel
  /** 初始化黑暗主题 */
  darkTheme?: ThemeModel
}
export const layoutPropsKey: InjectionKey<UnwrapNestedRefs<LayoutProps>> = Symbol()

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
  drawerPosition: string
  /** sidebar菜单 */
  menus: Array<MenuModel>
  /** 路由标签 */
  navTabs: Array<NavTabModel>
}
export const layoutKey: InjectionKey<UnwrapNestedRefs<LayoutKey>> = Symbol()

interface ThemeKey {
  /** 是否处于黑暗模式 */
  isDark: Ref<boolean>
  /** 明亮模式主题 */
  lightTheme: Ref<ThemeModel>
  /** 黑暗模式主题 */
  darkTheme: Ref<ThemeModel>
  /** 切换黑暗模式 */
  toggleDark: () => void
}
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
export const breakpointKey: InjectionKey<UnwrapNestedRefs<BreakpointKey>> = Symbol()
