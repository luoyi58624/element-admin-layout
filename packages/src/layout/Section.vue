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
		<div class="w-full h-full overflow-hidden overflow-y-auto">
			<NestRouterView />
		</div>
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import NestRouterView from './components/NestRouterView.vue'
import { layoutThemeDataKey } from '../config'

const { currentTheme } = inject(layoutThemeDataKey)!
const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
const navTabHeight = inject('navTabHeight')!
</script>

<style lang="scss">
#admin-layout-section {
	position: absolute;
	z-index: 0;
}

html:not(.global-col-resize) #admin-layout-section {
	transition-property: width, height, left, top;
	transition-duration: var(--layout-transition-duration);
}
</style>
