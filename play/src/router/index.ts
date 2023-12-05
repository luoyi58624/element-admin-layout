import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import { createLayoutRouter } from 'element-admin-layout-components'
import { nestRoute } from './nest_route.ts'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		createLayoutRouter([
			{
				path: '',
				name: 'Home',
				meta: {
					title: 'menu.home',
					icon: 'mdi:home',
					i18n: true
				},
				component: Home
			},
			{
				path: 'test',
				name: 'Test',
				meta: {
					title: 'menu.test',
					icon: 'mdi:folder',
					i18n: true
				},
				component: () => import('../views/test.vue')
			},
			nestRoute
		])
	]
})

export default router
