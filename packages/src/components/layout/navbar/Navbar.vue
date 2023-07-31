<template>
  <header
    id="admin-layout-header"
    :style="{
      height: navbarHeight + 'px',
      color: deepenColor(navbarTextColor, 5, true),
      backgroundColor: currentTheme.layout.navbar
    }">
    <div style="display: flex; justify-content: center; align-items: center">
      <img
        v-if="!isEmpty(layoutConfig.logo)"
        :src="layoutConfig.logo"
        alt=""
        width="36"
        style="cursor: pointer"
        @click="toggleSidebar" />
      <h3
        class="ml-1"
        :style="{
          color: deepenColor(navbarTextColor, 15, true)
        }">
        {{ layoutConfig.title }}
      </h3>
    </div>

    <div style="flex-grow: 1" />

    <div style="display: flex; align-items: center">
      <Component v-for="component in navbarButtonComponents" :is="component" />
    </div>
  </header>
</template>

<script setup lang="ts">
import SwitchFullScreen from './SwitchFullScreen.vue'
import SwitchDark from './SwitchDark.vue'
import LayoutSize from './LayoutSize.vue'
import SwitchLanguage from './SwitchLanguage.vue'
import SwitchTheme from './theme/SwitchTheme.vue'
import LayoutSetting from './LayoutSetting.vue'
import { isEmpty, deepenColor, isDark as isDarkColor } from '../../../utils'
import { layoutKey, breakpointKey, themeKey, layoutConfigKey } from '../../../components'

const layoutConfig = inject(layoutConfigKey)!
const layoutData = inject(layoutKey)!
const { currentTheme } = inject(themeKey)!
const breakpointData = inject(breakpointKey)!
const navbarHeight = inject('navbarHeight')!
const navbarButtonComponents = shallowRef([])

const navbarTextColor = computed(() =>
  isDarkColor(currentTheme.value.layout.navbar)
    ? layoutConfig.darkTextColor
    : layoutConfig.lightTextColor
)

function toggleSidebar() {
  if (breakpointData.mobile) {
    layoutData.showSidebarDarwer = !layoutData.showSidebarDarwer
  } else {
    layoutData.isCollapse = !layoutData.isCollapse
  }
}

provide('navbarTextColor', navbarTextColor)
onBeforeMount(() => {
  const components = []
  if (layoutConfig.navbarButtons!.includes('full_screen')) {
    // components.push(defineAsyncComponent(() => import('./SwitchFullScreen.vue')))
    components.push(SwitchFullScreen)
  }
  if (layoutConfig.navbarButtons!.includes('switch_dark')) {
    // components.push(defineAsyncComponent(() => import('./SwitchDark.vue')))
    components.push(SwitchDark)
  }
  if (layoutConfig.navbarButtons!.includes('layout_size')) {
    // components.push(defineAsyncComponent(() => import('./LayoutSize.vue')))
    components.push(LayoutSize)
  }
  if (layoutConfig.navbarButtons!.includes('switch_language')) {
    // components.push(defineAsyncComponent(() => import('./SwitchLanguage.vue')))
    components.push(SwitchLanguage)
  }
  if (layoutConfig.navbarButtons!.includes('switch_theme')) {
    // components.push(defineAsyncComponent(() => import('./theme/SwitchTheme.vue')))
    components.push(SwitchTheme)
  }
  if (layoutConfig.navbarButtons!.includes('layout_setting')) {
    // components.push(defineAsyncComponent(() => import('./LayoutSetting.vue')))
    components.push(LayoutSetting)
  }
  navbarButtonComponents.value = components
})
</script>

<style lang="scss">
#admin-layout-header {
  width: 100%;
  padding: 0 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  box-shadow:
    0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
}
</style>
