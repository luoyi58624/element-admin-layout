import { RouteRecordRaw } from 'vue-router'
import { LayoutMenuModel } from '../../dist'
import { isEmpty } from './commons'

export function routeToMenu(
  routes: Array<RouteRecordRaw>,
  parentPath?: string
): Array<LayoutMenuModel> {
  const menus: Array<LayoutMenuModel> = []
  routes.forEach(route => {
    let path = route.path
    if (!isEmpty(parentPath)) {
      if (parentPath.endsWith('/')) {
        path = parentPath + route.path
      } else {
        path = parentPath + '/' + route.path
      }
    }
    const menu: LayoutMenuModel = {
      title: route.meta?.title ?? route.name.toString() ?? '无',
      path: path,
      icon: route.meta?.icon ?? ''
    }
    if (!isEmpty(route.children) && route.children.length > 0) {
      menu.children = routeToMenu(route.children, menu.path)
    }
    menus.push(menu)
  })
  return menus
}
