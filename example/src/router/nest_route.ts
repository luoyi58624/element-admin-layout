import { RouteRecordRaw } from 'vue-router'
import { NestRouterView } from 'element-admin-layout-components'

export const nestRoute: RouteRecordRaw = {
	path: 'nest',
	name: 'Nest',
	component: NestRouterView,
	children: [
		{
			path: 'one1',
			name: 'One1',
			component: () => import('../views/nest/one_1.vue')
		},
		{
			path: 'one2',
			name: 'One2',
			component: () => import('../views/nest/one_2.vue')
		},
		{
			path: 'one3',
			name: 'One4',
			component: () => import('../views/nest/one_3.vue')
		},
		{
			path: 'two',
			name: 'Two',
			component: NestRouterView,
			children: [
				{
					path: 'two1',
					name: 'Two1',
					component: () => import('../views/nest/two/two_1.vue')
				},
				{
					path: 'two2',
					name: 'Two2',
					component: () => import('../views/nest/two/two_2.vue')
				},
				{
					path: 'two3',
					name: 'Two3',
					component: () => import('../views/nest/two/two_3.vue')
				},
				{
					path: 'three',
					name: 'Three',
					component: NestRouterView,
					children: [
						{
							path: 'three1',
							name: 'Three1',
							component: () => import('../views/nest/two/three/three_1.vue')
						},
						{
							path: 'three2',
							name: 'Three2',
							component: () => import('../views/nest/two/three/three_2.vue')
						},
						{
							path: 'three3',
							name: 'Three3',
							component: () => import('../views/nest/two/three/three_3.vue')
						},
						{
							path: 'four',
							name: 'Four',
							component: NestRouterView,
							children: [
								{
									path: 'four1',
									name: 'Four1',
									component: () => import('../views/nest/two/three/four/four_1.vue')
								},
								{
									path: 'four2',
									name: 'Four2',
									component: () => import('../views/nest/two/three/four/four_2.vue')
								},
								{
									path: 'four3',
									name: 'Four3',
									component: () => import('../views/nest/two/three/four/four_3.vue')
								},
								{
									path: 'five',
									name: 'Five',
									component: NestRouterView,
									children: [
										{
											path: 'five1',
											name: 'Five1',
											component: () => import('../views/nest/two/three/four/five/five_1.vue')
										},
										{
											path: 'five2',
											name: 'Five2',
											component: () => import('../views/nest/two/three/four/five/five_2.vue')
										},
										{
											path: 'five3',
											name: 'Five3',
											component: () => import('../views/nest/two/three/four/five/five_3.vue')
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
}
