export interface ThemeModel {
  // element-plus主题
  element: {
    primary: string
    success: string
    warning: string
    danger: string
    info: string
  }
  // 布局主题
  layout: {
    navbar: string
    sidebar: string
    section: string
    sidebarActiveText: string
  }
}

// 侧边栏菜单模型
export interface MenuModel {
  title?: string // 菜单标题
  path?: string // 跳转路径
  icon?: string // 菜单icon
  children?: Array<MenuModel> // 子路由菜单
}
