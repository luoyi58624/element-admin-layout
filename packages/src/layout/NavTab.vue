<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElIcon, ElDropdownItem } from 'element-plus'
import { ArrowDown, Refresh, CloseBold, Stamp, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'
import { ref, unref, watch, nextTick, inject, onUnmounted, computed, toRef } from 'vue'
import { baseColor, layoutDataKey, layoutSizeKey, layoutThemeDataKey } from '../config'
import { Icon } from '../components/index'
import { deepenColor, isDark, isEmpty } from '../utils'
import { NavTabModel } from '../types'
import { useEventListener } from '@vueuse/core'
import { useDraggable } from 'vue-draggable-plus'
import { throttle } from 'lodash-es'

const layoutData = inject(layoutDataKey)!
const layoutSize = inject(layoutSizeKey)!
const { currentTheme } = inject(layoutThemeDataKey)!
const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
const navTabHeight = inject('navTabHeight')!
const router = useRouter()
const route = useRoute()
const navTabRef = ref<HTMLElement>()
const navTabBackground = computed(() => currentTheme.value.layout.navTab)
const navTabHoverBackground = computed(() => deepenColor(navTabBackground.value, 15))
const navTabTextColor = computed(() => (isDark(navTabBackground.value) ? baseColor.lightColor3 : baseColor.darkColor3))
const navTabActiveBackground = computed(() => currentTheme.value.layout.navTabActive)
const navTabActiveTextColor = computed(() =>
	isDark(navTabActiveBackground.value) ? baseColor.lightColor1 : baseColor.darkColor1
)
const navTabCloseHoverBackground = computed(() => deepenColor(navTabBackground.value, 20))
const navTabCloseActiveHoverBackground = computed(() => deepenColor(navTabActiveBackground.value, 15))

const fontSize = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return '12px'
		case 'large':
			return '14px'
		default:
			return '13px'
	}
})

const iconSize = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return 14
		case 'large':
			return 18
		default:
			return 16
	}
})

const scrollSize = 200 // 滚动距离
const scrollSpeed = 8 // 滚动速度
let scrollAnimation: any // 滚动动画
let disableLeftScroll = false
let disableRightScroll = false

// const scrollThrottleFun = throttle(scrollHandler, 1000, {
// 	leading: true,
// 	trailing: true
// })

// 鼠标滚轮滚动事件处理
function scrollHandler(e: WheelEvent) {
	const scrollDom = getScrollDom()
	let i = 0 // 判断是否停止
	// 大于0（鼠标滚动向下滚）往右滚动，小于0（鼠标滚动向上滚）往左滚动
	if (e.deltaY > 0) {
		disableLeftScroll = false
		if (!disableRightScroll) {
			disableRightScroll = true
			if (scrollAnimation) clearInterval(scrollAnimation)
			scrollAnimation = setInterval(() => {
				i -= scrollSpeed
				if (i < -scrollSize) {
					clearInterval(scrollAnimation)
					disableRightScroll = scrollDom.scrollLeft + scrollDom.clientWidth >= scrollDom.scrollWidth
				} else {
					scrollDom.scrollLeft += scrollSpeed
				}
			}, 1)
		}
	} else if (e.deltaY < 0) {
		disableRightScroll = false
		if (!disableLeftScroll) {
			disableLeftScroll = true
			if (scrollAnimation) clearInterval(scrollAnimation)
			scrollAnimation = setInterval(() => {
				i += scrollSpeed
				if (i > scrollSize) {
					clearInterval(scrollAnimation)
					disableLeftScroll = scrollDom.scrollLeft <= 0
				} else {
					scrollDom.scrollLeft -= scrollSpeed
				}
			}, 1)
		}
	}
}

// 滚动到激活标签
function moveActiveTab(activeTabDom: HTMLElement) {
	const scrollDom = getScrollDom()
	const { offsetLeft, clientWidth } = activeTabDom
	const value = Math.min(
		scrollDom.scrollWidth - scrollDom.clientWidth,
		Math.max(0, offsetLeft + clientWidth / 2 - scrollDom.clientWidth / 2)
	)
	if (value != 0) {
		disableLeftScroll = false
		disableRightScroll = false
	}
	scrollDom.scrollTo({
		left: value,
		behavior: 'smooth'
	})
}

function addRouteTab(route: RouteLocationNormalizedLoaded) {
	let title: string
	let i18n
	let flag = true
	if (route.matched.length > 0) {
		const metaTitle = route.matched[route.matched.length - 1].meta.title
		const metaI18n = route.matched[route.matched.length - 1].meta.i18n
		if (isEmpty(metaTitle)) {
			title = route.name!.toString()
		} else {
			title = metaTitle!
		}
		i18n = metaI18n ?? false
	}
	for (let i = 0; i < layoutData.navTabs.length; i++) {
		if (layoutData.navTabs[i].path === route.fullPath) {
			flag = false
		}
	}
	if (flag) {
		layoutData.navTabs.push({
			title: title!,
			path: route.fullPath,
			icon: route.meta.icon!,
			i18n: i18n
		})
	}
}

// 关闭当前标签页
function closeRouteTab(tag: NavTabModel, route: RouteLocationNormalizedLoaded) {
	// 获取标签所在的位置
	const index = layoutData.navTabs.findIndex(item => {
		return item.path === tag.path
	})
	// 如果关闭的是其他标签
	if (route.fullPath !== tag.path) {
		layoutData.navTabs.splice(index, 1)
	} else {
		// 如果只有一个标签，则跳转到首页
		if (layoutData.navTabs.length === 1) {
			if (route.path !== '/') {
				router.push('/').then(() => {
					layoutData.navTabs.splice(index, 1)
				})
			}
		} else {
			// 优先跳转到下一个标签，如果没有则跳转到上一个标签
			if (!isEmpty(layoutData.navTabs[index + 1])) {
				router.push(layoutData.navTabs[index + 1].path).then(() => {
					layoutData.navTabs.splice(index, 1)
				})
			} else {
				router.push(layoutData.navTabs[index - 1].path).then(() => {
					layoutData.navTabs.splice(index, 1)
				})
			}
		}
	}
}

// 关闭全部标签
function closeAllTabs(route: RouteLocationNormalizedLoaded) {
	if (route.path == '/') {
		const navTab = layoutData.navTabs.find(item => item.path === '/')
		navTab ? (layoutData.navTabs = [navTab]) : []
	} else {
		layoutData.navTabs.splice(0, layoutData.navTabs.length)
		router.push('/')
	}
}

// 关闭其他标签
function closeOtherTabs(route: RouteLocationNormalizedLoaded) {
	layoutData.navTabs.splice(
		0,
		layoutData.navTabs.length,
		layoutData.navTabs.find(item => {
			return item.path === route.fullPath
		})!
	)
}

// 关闭左侧标签
function closeLeftTabs(route: RouteLocationNormalizedLoaded) {
	const index = layoutData.navTabs.findIndex(item => {
		return item.path === route.fullPath
	})
	layoutData.navTabs.splice(0, index)
}

// 关闭左侧标签
function closeRightTabs(route: RouteLocationNormalizedLoaded) {
	const index = layoutData.navTabs.findIndex(item => {
		return item.path === route.fullPath
	})
	layoutData.navTabs.splice(index + 1, layoutData.navTabs.length - index)
}

function getScrollDom(): HTMLElement {
	return unref(navTabRef)!
}

const routeWatch = watch(
	() => route.path,
	() => {
		addRouteTab(route)
		nextTick(() => {
			if (unref(navTabRef)) {
				const childDom = getScrollDom().children
				for (let i = 0; i < childDom.length; i++) {
					if (childDom[i].classList.contains('active')) {
						moveActiveTab(childDom[i])
						break
					}
				}
			}
		})
	},
	{
		immediate: true
	}
)

useDraggable(navTabRef, toRef(layoutData, 'navTabs'), {
	dataIdAttr: 'path',
	animation: 300, // 滚动动画时长
	delay: 50, // 延迟多少毫秒开始拖拽
	disabled: false,
	forceFallback: true,
	scroll: true, // 启用自动滚动
	scrollSensitivity: 80, // 距离容器多少像素开始滚动
	scrollSpeed: 15, // 滚动速度
	ghostClass: 'sortable-ghost',
	chosenClass: 'sortable-chosen'
})

useEventListener(window, 'resize', () => {
	disableLeftScroll = false
	disableRightScroll = false
})

onUnmounted(() => {
	routeWatch()
})
</script>

<template>
	<div
		id="admin-layout-nav-tab"
		:style="{
			top: navbarHeight + 'px',
			left: sidebarWidth + 'px',
			width: `calc(100% - ${sidebarWidth}px)`,
			height: navTabHeight + 'px'
		}">
		<div
			ref="navTabRef"
			class="tab-scroll-container scrollbar-hide"
			:style="{ height: navTabHeight + 'px' }"
			@wheel="scrollHandler">
			<div
				class="tab-item"
				v-for="element in layoutData.navTabs"
				:key="element.path"
				:class="{ active: route.fullPath === element.path }"
				@click="router.push(element.path)">
				<Icon :icon="element.icon ? element.icon : 'i-heroicons-solid-view-grid'" :size="iconSize" />
				<span class="mx-1 whitespace-nowrap">{{ element.i18n ? $t(element.title) : element.title }}</span>
				<div class="close-icon" @click.stop="closeRouteTab(element, route)">
					<div class="i-mdi-close" :style="{ fontSize: iconSize + 'px' }"></div>
				</div>
			</div>
		</div>
		<div class="h-full flex">
			<el-dropdown trigger="click">
				<div class="operate-item">
					<el-icon>
						<ArrowDown />
					</el-icon>
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>
							<el-icon>
								<Refresh />
							</el-icon>
							刷新当前页面
						</el-dropdown-item>
						<el-dropdown-item divided @click="closeAllTabs(route)">
							<el-icon>
								<CloseBold />
							</el-icon>
							关闭全部标签
						</el-dropdown-item>
						<el-dropdown-item @click="closeOtherTabs(route)">
							<el-icon>
								<Stamp />
							</el-icon>
							关闭其他标签
						</el-dropdown-item>
						<el-dropdown-item @click="closeLeftTabs(route)">
							<el-icon>
								<DArrowLeft />
							</el-icon>
							关闭左侧全部标签
						</el-dropdown-item>
						<el-dropdown-item @click="closeRightTabs(route)">
							<el-icon>
								<DArrowRight />
							</el-icon>
							关闭右侧全部标签
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<style lang="scss">
#admin-layout-nav-tab {
	position: absolute;
	z-index: 1;
	display: flex;
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
	background: v-bind(navTabBackground);
}

html:not(.global-col-resize) #admin-layout-nav-tab {
	transition-property: width, height, left, top;
	transition-duration: var(--layout-transition-duration);
}

.tab-scroll-container {
	width: 100%;
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
}

.tab-item {
	height: 100%;
	padding: 0 8px;
	cursor: pointer;
	user-select: none;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: v-bind(fontSize);
	background-color: v-bind(navTabBackground);
	color: v-bind(navTabTextColor);

	&.active {
		background-color: v-bind(navTabActiveBackground);
		color: v-bind(navTabActiveTextColor);

		& > .close-icon {
			&:hover {
				background-color: v-bind(navTabCloseActiveHoverBackground);
			}
		}
	}

	&:not(.active):hover {
		background-color: v-bind(navTabHoverBackground) !important;
		color: v-bind(navTabTextColor);
	}

	&:not(.active):active {
		background-color: v-bind(navTabHoverBackground) !important;
		color: v-bind(navTabTextColor);
	}

	& > .close-icon {
		padding: 2px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			background-color: v-bind(navTabCloseHoverBackground);
		}
	}
}

.operate-item {
	height: 100%;
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: v-bind(navTabTextColor);

	&:hover {
		background: v-bind(navTabHoverBackground);
	}
}

.sortable-ghost {
	opacity: 0.8;
}

.sortable-chosen {
	opacity: 0.8;
}
</style>
