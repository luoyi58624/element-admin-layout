<script setup lang="ts">
import HeaderIcon from './components/HeaderIcon.vue'
import screenfull from 'screenfull'
import { showMessage, isEmpty } from 'element-admin-layout-utils'
import { layoutKey, breakpointKey, layoutPropsKey, themeKey } from 'element-admin-layout-config'

const layoutProps = inject(layoutPropsKey)!
const layoutData = inject(layoutKey)!
const { isDark } = inject(themeKey)!
const breakpointData = inject(breakpointKey)!
const navbarHeight = inject('navbarHeight')!
const isFullscreen = ref(false)
const showThemePanel = ref(false)
const showSettingPanel = ref(false)

function toggleSidebar() {
  if (breakpointData.mobile) {
    layoutData.showSidebarDarwer = !layoutData.showSidebarDarwer
  } else {
    layoutData.isCollapse = !layoutData.isCollapse
  }
}

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
  console.log(layoutProps.title)

  screenfull.on('change', setFullscreen)
})

onUnmounted(() => {
  screenfull.off('change', setFullscreen)
})
</script>

<template>
  <header
    id="admin-layout-header"
    :class="[layoutData.openNavTab ? 'shadow' : 'm-shadow']"
    :style="{
      height: navbarHeight + 'px'
    }">
    <div style="display: flex; justify-content: center; align-items: center">
      <img
        v-if="!isEmpty(layoutProps.logo)"
        :src="layoutProps.logo"
        alt=""
        width="36"
        style="cursor: pointer"
        @click="toggleSidebar" />
      <h3 style="margin-left: 8px">
        {{ isEmpty(layoutProps.title) ? '后台管理系统' : layoutProps.title }}
      </h3>
    </div>

    <div style="flex-grow: 1" />

    <div style="display: flex; align-items: center">
      <HeaderIcon
        :icon="isFullscreen ? 'i-mdi-fullscreen-exit' : 'i-mdi-fullscreen'"
        :size="22"
        @click="toggleScreen" />
      <HeaderIcon
        :icon="isDark ? 'i-mdi-weather-night' : 'i-mdi-white-balance-sunny'"
        @click="isDark = !isDark" />
      <HeaderIcon icon="i-file-icons-font-outline" />
      <HeaderIcon icon="i-mdi-translate" />
      <HeaderIcon icon="i-icon-park-outline-theme" @click="showThemePanel = true" />
      <HeaderIcon icon="i-mdi-cog-outline" @click="showSettingPanel = true" />
    </div>
  </header>
</template>

<style lang="scss">
#admin-layout-header {
  width: 100%;
  padding: 0 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  color: black;
  background-color: var(--admin-layout-theme-light-navbar);
  box-shadow:
    0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
}
.dark #admin-layout-header {
  color: white;
  background-color: var(--admin-layout-theme-dark-navbar);
}
</style>
