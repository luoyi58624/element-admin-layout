<template>
  <HeaderIcon
    :icon="isFullscreen ? 'i-mdi-fullscreen-exit' : 'i-mdi-fullscreen'"
    :size="22"
    @click="toggleScreen" />
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
import HeaderIcon from './HeaderIcon.vue'
import { showMessage } from '../../../utils'
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
