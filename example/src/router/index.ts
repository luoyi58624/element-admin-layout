import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import Layout from '../views/layout.vue'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
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
          component: RouterView,
          children: [
            {
              path: 'one',
              name: 'One',
              component: () => import('../views/nest/one.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
