<template>
	<navbar-icon :icon="isFullscreen ? 'i-mdi-fullscreen-exit' : 'i-mdi-fullscreen'" :size="22" @click="toggleScreen" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showMessage } from '../../utils'
import screenfull from 'screenfull'
import NavbarIcon from './NavbarIcon.vue'

const isFullscreen = ref(false)

function setFullscreen() {
	isFullscreen.value = screenfull.isFullscreen
}

function toggleScreen() {
	if (!screenfull.isEnabled) {
		showMessage('该浏览器不支持全屏', 'warning')
		return false
	}
	screenfull.toggle()
}

onMounted(() => {
	screenfull.on('change', setFullscreen)
})

onUnmounted(() => {
	screenfull.off('change', setFullscreen)
})
</script>

<style scoped lang="scss"></style>
