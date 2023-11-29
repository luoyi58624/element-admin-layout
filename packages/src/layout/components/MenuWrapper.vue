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
			<menu-item v-for="menu in menus" :menu="menu" />
		</el-menu>
	</el-scrollbar>
</template>

<script setup lang="ts">
import { ElScrollbar, ElMenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
import { breakpointKey, layoutConfigKey, layoutKey, themeKey } from '../../components'
import { routeToMenu, isDark as isDarkColor } from '../../utils'
import { LayoutMenuModel } from '../../types'

const router = useRouter()
const route = useRoute()

const layoutConfig = inject(layoutConfigKey)!
const layoutData = inject(layoutKey)!
const breakpointData = inject(breakpointKey)!
const { currentTheme } = inject(themeKey)!

const menus = ref<LayoutMenuModel[]>([])

const sliderTextColor = computed(() =>
	isDarkColor(currentTheme.value.layout.sidebar) ? layoutConfig.darkTextColor : layoutConfig.lightTextColor
)

const layoutRoutes = router.getRoutes().filter(item => item.name === 'Layout')
if (layoutRoutes.length > 0) {
	menus.value = routeToMenu(layoutRoutes[0].children, layoutRoutes[0].path)
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
