<script setup lang="ts">
import Sortable from 'sortablejs'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'
import { ref, unref, watch, nextTick, inject, onMounted, onUnmounted } from 'vue'
import { layoutDataKey, layoutThemeDataKey } from '../config'
import { Icon } from '../components/index'
import { isEmpty } from '../utils'

const layoutData = inject(layoutDataKey)
const { currentTheme } = inject(layoutThemeDataKey)!
const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
const navTabHeight = inject('navTabHeight')!
const router = useRouter()
const route = useRoute()
const navTabRef = ref<HTMLElement>()

const scrollSize = 240 // 滚动距离
const scrollSpeed = 8 // 滚动速度
let scrollAnimation // 滚动动画

// 鼠标滚轮滚动事件处理
function scrollHandler(e: MouseEvent) {
	const scrollDom = unref(navTabRef)
	let i = 0 // 判断是否停止
	if (e.wheelDelta < 0) {
		if (scrollAnimation) clearInterval(scrollAnimation)
		scrollAnimation = setInterval(() => {
			i -= scrollSpeed
			if (i < -scrollSize) {
				clearInterval(scrollAnimation)
			} else {
				scrollDom.scrollLeft += scrollSpeed
			}
		}, 1)
	} else {
		if (scrollAnimation) clearInterval(scrollAnimation)
		scrollAnimation = setInterval(() => {
			i += scrollSpeed
			if (i > scrollSize) {
				clearInterval(scrollAnimation)
			} else {
				scrollDom.scrollLeft -= scrollSpeed
			}
		}, 1)
	}
}

// 滚动到激活标签
function moveActiveTab(activeTabDom) {
	const scrollDom = unref(navTabRef)
	const { offsetLeft, clientWidth } = activeTabDom
	scrollDom.scrollTo({
		left: Math.min(
			scrollDom.scrollWidth - scrollDom.clientWidth,
			Math.max(0, offsetLeft + clientWidth / 2 - scrollDom.clientWidth / 2)
		),
		behavior: 'smooth'
	})
}

function addRouteTab(route: RouteLocationNormalizedLoaded) {
	let title
	let flag = true
	isEmpty(route.meta.title) ? (title = route.name) : (title = route.meta.title)
	for (let i = 0; i < layoutData.navTabs.length; i++) {
		if (layoutData.navTabs[i].path === route.fullPath) {
			flag = false
		}
	}
	if (flag) {
		layoutData.navTabs.push({
			title: title,
			path: route.fullPath,
			icon: route.meta.icon
		})
	}
}

const routeWatch = watch(
	() => route.path,
	() => {
		addRouteTab(route)
		nextTick(() => {
			if (unref(navTabRef)) {
				const childDom = unref(navTabRef).children
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

onMounted(() => {
	Sortable.create(navTabRef.value, {
		animation: 300, // 滚动动画时长
		delay: 150, // 延迟多少毫秒开始拖拽
		disabled: false,
		forceFallback: true,
		scroll: true, // 启用自动滚动
		scrollSensitivity: 80, // 距离容器多少像素开始滚动
		scrollSpeed: 15, // 滚动速度
		ghostClass: 'sortable-ghost',
		chosenClass: 'sortable-chosen'
	})
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
			height: navTabHeight + 'px',
			backgroundColor: currentTheme.layout.navbar
		}">
		<div
			ref="navTabRef"
			class="w-full flex overflow-x-scroll overflow-y-hidden scrollbar-hide"
			:style="{ height: navTabHeight + 'px' }"
			@wheel="scrollHandler">
			<div
				v-for="tab in layoutData.navTabs"
				class="tab-item"
				:class="{ active: route.fullPath === tab.path }"
				@click="router.push(tab.path)">
				<div class="flex-center">
					<Icon v-if="tab.icon" :icon="tab.icon" />
					<div v-else class="i-heroicons-solid-view-grid"></div>
				</div>
				<span class="mx-1 whitespace-nowrap">{{ tab.title }}</span>
				<div class="close-icon">
					<div class="i-mdi-close"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
#admin-layout-nav-tab {
	@apply absolute z-1;
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.12);
}

html:not(.global-col-resize) #admin-layout-nav-tab {
	transition-property: width, height, left, top;
	transition-duration: var(--layout-transition-duration);
}

.tab-item {
	@apply h-full px-2 text-xs inline-block cursor-pointer relative flex-center transition-colors;

	&.active {
		background-color: var(--layout-color-navTabActive);
		color: var(--layout-color-navTabActiveText);

		& > .close-icon {
			&:hover {
				background-color: var(--layout-color-navTabActiveHover);
			}
		}
	}

	&:not(.active):hover {
		background-color: var(--layout-color-navTabHover) !important;
	}

	& > .close-icon {
		@apply h-[calc(100%-10px)] aspect-square rounded-full flex-center;

		&:hover {
			background-color: var(--layout-color-navTabHover2);
		}
	}
}

.operate-item {
	@apply h-full aspect-square flex-center cursor-pointer text-$layout-color-navTabText hover:bg-$layout-color-navTabHover;
}

.sortable-ghost {
	opacity: 0.8;
	background: var(--layout-color-navTabActive) !important;
	color: var(--layout-color-navTabActiveText) !important;
}

.sortable-chosen {
	opacity: 0.8;
	background: var(--layout-color-navTabActive) !important;
	color: var(--layout-color-navTabActiveText) !important;
}
</style>
