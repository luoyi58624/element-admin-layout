<template>
	<ElScrollbar>
		<ElMenu
			:backgroundColor="currentTheme.layout.sidebar"
			:textColor="sliderTextColor"
			:activeTextColor="currentTheme.layout.sidebarActiveText"
			:defaultActive="route.path"
			:uniqueOpened="false"
			:collapseTransition="false"
			:collapse="!breakpointData.mobile && layoutData.isCollapse">
			<MenuItem v-for="menu in menus" :menu="menu" />
		</ElMenu>
	</ElScrollbar>
</template>

<script setup lang="ts">
import { ElScrollbar, ElMenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
import { breakpointKey, layoutConfigKey, layoutKey, themeKey } from '../../index'
import { routeToMenu, isDark as isDarkColor } from '../../../utils'
import { LayoutMenuModel } from '../../../types'

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
}
</script>

<style lang="scss">
.el-menu {
	border-right: none !important;
}

.is-active > .el-sub-menu__title,
.is-active > .el-submenu__title > i:nth-child(1) {
	color: v-bind('currentTheme.layout.sidebarActiveText') !important;
}
</style>
