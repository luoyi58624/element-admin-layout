<template>
	<div
		id="admin-layout-section"
		:style="{
			width: `calc(100% - ${sidebarWidth}px)`,
			height: `calc(100% - ${navbarHeight}px)`,
			left: sidebarWidth + 'px',
			top: navbarHeight + 'px',
			backgroundColor: currentTheme.layout.section
		}">
		<div class="w-full h-full overflow-hidden overflow-y-auto">
			<NestRouterView />
		</div>
	</div>
</template>

<script setup lang="ts">
import { themeKey } from '../../components'
import NestRouterView from './components/NestRouterView.vue'

const { currentTheme } = inject(themeKey)!
const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
</script>

<style lang="scss">
#admin-layout-section {
	position: absolute;
	transition-property: width, left;
	transition-duration: 300ms;
}
</style>
