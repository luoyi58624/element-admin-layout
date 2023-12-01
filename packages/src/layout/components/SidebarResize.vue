<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, shallowRef, unref } from 'vue'
import { throttle } from 'lodash-es'
import { layoutDataKey } from '../../config'

const layoutData = inject(layoutDataKey)
const defaultSidebarExpandWidth = inject('defaultSidebarExpandWidth')

const sidebarColResizeRef = shallowRef<HTMLElement>()

function mouseMoveHandler(e: MouseEvent) {
	if (e.pageX > defaultSidebarExpandWidth.value && e.pageX < window.screen.width / 2) layoutData.sidebarExpandWidth = e.pageX
}

const throttle1Fun = throttle(mouseMoveHandler, 16)

function mouseDownHandler() {
	document.documentElement.classList.add('global-col-resize')
	window.addEventListener('mousemove', throttle1Fun)
	window.addEventListener('mouseup', mouseUpHandler)
}

function mouseUpHandler() {
	document.documentElement.classList.remove('global-col-resize')
	window.removeEventListener('mousemove', throttle1Fun)
	window.removeEventListener('mouseup', mouseUpHandler)
}

onMounted(() => {
	unref(sidebarColResizeRef).addEventListener('mousedown', mouseDownHandler)
})
onBeforeUnmount(() => {
	unref(sidebarColResizeRef).removeEventListener('mousedown', mouseDownHandler)
})
</script>

<template>
	<div ref="sidebarColResizeRef" class="sidebar-col-resize"></div>
</template>

<style scoped lang="scss"></style>
