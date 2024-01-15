<template>
	<div
		id="admin-layout-section"
		:style="{
			width: `calc(100% - ${sidebarWidth}px)`,
			height: `calc(100% - ${navbarHeight + navTabHeight}px)`,
			left: sidebarWidth + 'px',
			top: navbarHeight + navTabHeight + 'px',
			backgroundColor: currentTheme.layout.section
		}">
		<NestRouterView />
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import NestRouterView from './components/NestRouterView.vue'
import { layoutThemeDataKey } from '../config'

const { currentTheme } = inject(layoutThemeDataKey)!
const navbarHeight = inject<number>('navbarHeight')!
const sidebarWidth = inject<number>('sidebarWidth')!
const navTabHeight = inject<number>('navTabHeight')!
</script>

<style lang="scss">
#admin-layout-section {
	position: absolute;
	z-index: 0;
	overflow: hidden;
	overflow-y: auto;
}

html:not(.global-col-resize) #admin-layout-section {
	transition-property: width, height, left, top;
	transition-duration: var(--layout-transition-duration);
}
</style>
