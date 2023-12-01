<template>
	<aside
		id="admin-layout-sidebar"
		:style="{
			width: sidebarWidth + 'px',
			height: `calc(100% - ${navbarHeight}px)`,
			top: navbarHeight + 'px',
			backgroundColor: currentTheme.layout.sidebar
		}">
		<menu-wrapper />
		<sidebar-resize v-if="!breakpointData.mobile && !layoutData.isCollapse" />
	</aside>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { layoutBreakpointDataKey, layoutDataKey, layoutThemeDataKey } from '../config'
import MenuWrapper from './components/MenuWrapper.vue'

import SidebarResize from './components/SidebarResize.vue'

const { currentTheme } = inject(layoutThemeDataKey)!
const layoutData = inject(layoutDataKey)
const breakpointData = inject(layoutBreakpointDataKey)
const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
</script>

<style lang="scss">
#admin-layout-sidebar {
	position: absolute;
	left: 0;
	user-select: none;
}

html:not(.global-col-resize) #admin-layout-sidebar {
	transition: all 0.3s;
}

.sidebar-col-resize {
	position: absolute;
	top: 0;
	right: -4px;
	width: 6px;
	height: 100%;
	cursor: col-resize !important;
	z-index: 100000;
}
</style>
