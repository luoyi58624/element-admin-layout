<template>
	<header
		id="admin-layout-navbar"
		:style="{
			height: navbarHeight + 'px',
			backgroundColor: currentTheme.layout.navbar
		}">
		<div v-if="!isEmpty(layoutConfig.logo)" class="navbar-logo" @click="toggleSidebar">
			<img :src="layoutConfig.logo" alt="" :width="logoSize" />
		</div>
		<span
			:style="{
				fontSize: titleSize + 'px',
				fontWeight: 'bold',
				color: deepenColor(navbarTextColor, 15, true),
				marginLeft: !isEmpty(layoutConfig.logo) ? '4px' : '16px'
			}">
			{{ layoutConfig.title }}
		</span>
		<div style="flex-grow: 1" />
		<div class="navbar-icons">
			<Component v-for="component in layoutConfig.navbarComponents" :is="component" />
		</div>
	</header>
</template>

<script setup lang="ts">
import { computed, inject, provide } from 'vue'
import { isEmpty, deepenColor, isDark as isDarkColor } from '../utils'
import { layoutDataKey, layoutBreakpointDataKey, layoutThemeDataKey, layoutConfigKey, layoutSizeKey } from '../config'

const layoutConfig = inject(layoutConfigKey)!
const layoutSize = inject(layoutSizeKey)!
const layoutData = inject(layoutDataKey)!
const { currentTheme } = inject(layoutThemeDataKey)!
const breakpointData = inject(layoutBreakpointDataKey)!
const navbarHeight = inject('navbarHeight')!

const navbarTextColor = computed(() =>
	isDarkColor(currentTheme.value.layout.navbar) ? layoutConfig.darkTextColor! : layoutConfig.lightTextColor!
)

const logoSize = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return 32
		case 'large':
			return 40
		default:
			return 36
	}
})

const titleSize = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return 16
		case 'large':
			return 20
		default:
			return 18
	}
})

function toggleSidebar() {
	if (breakpointData.mobile) {
		layoutData.showSidebarDarwer = !layoutData.showSidebarDarwer
	} else {
		layoutData.isCollapse = !layoutData.isCollapse
	}
}

provide('navbarTextColor', navbarTextColor)
</script>

<style lang="scss">
#admin-layout-navbar {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	align-items: center;
	transition-property: height, left;
	transition-duration: var(--layout-transition-duration);
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);

	.navbar-logo {
		width: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.navbar-icons {
		display: flex;
		align-items: center;
		padding-right: 16px;
	}
}

.dark {
	#admin-layout-navbar {
		box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.6);
	}
}
</style>
