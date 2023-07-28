import {  createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout.vue'

import { layoutRoutes } from './routes/layout_routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: layoutRoutes
    }
  ]
})



export default router
