<template>
	<aside
		id="admin-layout-sidebar"
		:style="{
			width: sidebarWidth + 'px',
			height: `calc(100% - ${navbarHeight}px)`,
			top: navbarHeight + 'px',
			backgroundColor: currentTheme.layout.sidebar
		}">
		<MenuWrapper />
	</aside>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { themeKey } from '../components'
import MenuWrapper from './components/MenuWrapper.vue'

const { currentTheme } = inject(themeKey)!
const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
</script>

<style lang="scss">
#admin-layout-sidebar {
	position: absolute;
	left: 0;
	user-select: none;
	transition: all 0.3s;
}
</style>
