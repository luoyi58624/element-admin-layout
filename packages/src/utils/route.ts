import { RouteRecordRaw } from 'vue-router'
import { LayoutMenuModel } from '../../dist'
import { isEmpty } from './commons'

export function routeToMenu(
  routes: Array<RouteRecordRaw>,
  parentRoute?: RouteRecordRaw
): Array<LayoutMenuModel> {
  const menus: Array<LayoutMenuModel> = []
  routes.forEach(route => {
    const menu: LayoutMenuModel = {
      title: route.meta?.title ?? route.name.toString() ?? '无',
      path: isEmpty(parentRoute) ? route.path : parentRoute.path + '/' + route.path,
      icon: route.meta?.icon ?? ''
    }
    if (!isEmpty(route.children) && route.children.length > 0) {
      menu.children = routeToMenu(route.children, route)
    }
    menus.push(menu)
  })
  return menus
}
