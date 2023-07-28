import { RouteRecordRaw, RouterView } from 'vue-router'
import Home from '../../views/home.vue'

export const layoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    meta: {
      title: '首页',
      icon: 'mdi:home'
    },
    component: Home
  },
  {
    path: '/nest',
    name: 'Nest',
    component: RouterView,
    children: [
      {
        path: 'one',
        name: 'One',
        component: () => import('../../views/nest/one.vue')
      }
    ]
  }
]
