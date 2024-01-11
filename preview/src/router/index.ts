import { createLayoutRouter } from 'element-admin-layout'
import { createRouter, createWebHashHistory } from 'vue-router'
import { nestRoute } from './nest_route.ts'

const index = createRouter({
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
				component: () => import('../views/home.vue')
			},
			nestRoute
		])
	]
})

export default index
