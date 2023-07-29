import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import { createLayoutRouter, NestRouterView } from 'element-admin-layout-components'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    createLayoutRouter([
      {
        path: '',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'mdi:home'
        },
        component: Home
      },
      {
        path: 'nest',
        name: 'Nest',
        component: NestRouterView,
        children: [
          {
            path: 'one',
            name: 'One',
            component: () => import('../views/nest/one.vue')
          }
        ]
      }
    ])
  ]
})

export default router
