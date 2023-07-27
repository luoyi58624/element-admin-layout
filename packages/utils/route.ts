import { RouteRecordRaw } from 'vue-router'
import { MenuModel } from '..'
import { isEmpty } from './commons'

export function routeToMenu(
  routes: Array<RouteRecordRaw>,
  parentRoute?: RouteRecordRaw
): Array<MenuModel> {
  const menus: Array<MenuModel> = []
  routes.forEach(route => {
    const menu: MenuModel = {
      title: route.meta?.title ?? route.name.toString() ?? '无',
      path: (parentRoute?.path ?? '' + route.path).trim(),
      icon: route.meta?.icon ?? ''
    }
    if (!isEmpty(route.children) && route.children.length > 0) {
      menu.children = routeToMenu(route.children, route)
    } else {
      menus.push(menu)
    }
  })
  return menus
}
