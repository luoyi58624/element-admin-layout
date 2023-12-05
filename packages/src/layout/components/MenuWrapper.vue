<template>
	<el-scrollbar>
		<el-menu
			:backgroundColor="currentTheme.layout.sidebar"
			:textColor="sliderTextColor"
			:activeTextColor="currentTheme.layout.sidebarActiveText"
			:defaultActive="route.path"
			:uniqueOpened="false"
			:collapseTransition="false"
			:collapse="!breakpointData.mobile && layoutData.isCollapse">
			<menu-item v-for="menu in layoutMenus" :menu="menu" />
		</el-menu>
	</el-scrollbar>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElScrollbar, ElMenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
import {
	layoutBreakpointDataKey,
	layoutConfigKey,
	layoutDataKey,
	layoutMenusKey,
	layoutThemeDataKey
} from '../../config'
import { routeToMenu, isDark as isDarkColor } from '../../utils'

const router = useRouter()
const route = useRoute()

const layoutConfig = inject(layoutConfigKey)!
const layoutData = inject(layoutDataKey)!
const breakpointData = inject(layoutBreakpointDataKey)!
const { currentTheme } = inject(layoutThemeDataKey)!
const layoutMenus = inject(layoutMenusKey)!

const sliderTextColor = computed(() =>
	isDarkColor(currentTheme.value.layout.sidebar) ? layoutConfig.darkTextColor : layoutConfig.lightTextColor
)

const layoutRoutes = router.getRoutes().filter(item => item.name === 'Layout')
if (layoutRoutes.length > 0) {
	layoutMenus.value = routeToMenu(layoutRoutes[0].children, layoutRoutes[0].path)
	nextTick(() => {
		setTimeout(() => {
			const doms = document.getElementsByClassName('el-menu-item is-active')
			if (doms.length > 0) {
				doms[0].scrollIntoView()
			}
		}, 500)
	})
}

watchEffect(() => {
	document.documentElement.style.setProperty('--sidebar-active-color', currentTheme.value.layout.sidebarActiveText)
})
</script>

<style lang="scss">
.el-menu {
	border-right: none !important;
}

.el-sub-menu.is-active > .el-sub-menu__title {
	color: var(--sidebar-active-color) !important;
}
</style>
