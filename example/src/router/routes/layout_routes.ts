import { RouteRecordRaw } from 'vue-router'
import Home from '../../views/home.vue'

export const layoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Home
  }
]
