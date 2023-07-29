<script setup lang="ts">
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import Section from './Section.vue'
import { layoutKey, breakpointKey, themeKey, layoutConfigKey } from '../../config'
import { deepenColor } from '../../utils'

const scope = effectScope()
const layoutConfig = inject(layoutConfigKey)
const isDark = useDark()
const toggleDark = useToggle(isDark)
const lightTheme = ref(layoutConfig.lightTheme)
const darkTheme = ref(layoutConfig.darkTheme)

const layoutData = reactive({
  size: 'default',
  isCollapse: false,
  openNavTab: false,
  showSidebarDarwer: false,
  autoCloseMenu: false,
  openKeepalive: false,
  drawerPosition: 'rtl',
  menus: [],
  navTabs: []
})

const breakpointData = reactive({
  width: 0,
  height: 0,
  mobile: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
})

const navbarHeight = computed(() => {
  switch (layoutData.size) {
    case 'small':
      return 48
    case 'default':
      return 56
    case 'large':
      return 64
  }
})

const sidebarWidth = computed(() => {
  if (breakpointData.mobile) return 0
  else return layoutData.isCollapse ? 64 : 240
})

scope.run(() => {
  watch([isDark, lightTheme.value, darkTheme.value], () => {
    setSubThemeVar()
  })
  watch(lightTheme.value, () => {
    setLightThemeVar()
  })
  watch(darkTheme.value, () => {
    setDarkThemeVar()
  })
})

function setLightThemeVar() {
  Object.entries(lightTheme.value.layout).forEach(([key, value]) => {
    document.body.style.setProperty('--admin-layout-theme-light-' + key, value)
  })
}

function setDarkThemeVar() {
  Object.entries(darkTheme.value.layout).forEach(([key, value]) => {
    document.body.style.setProperty('--admin-layout-theme-dark-' + key, value)
  })
}

function setSubThemeVar() {
  const targetTheme = isDark.value ? darkTheme.value : lightTheme.value
  document.body.style.setProperty(
    '--admin-layout-theme-navbar-hover',
    deepenColor(targetTheme.layout.navbar, 10)
  )
}

onBeforeMount(() => {
  setLightThemeVar()
  setDarkThemeVar()
  setSubThemeVar()
})

onUnmounted(() => {
  scope.stop()
})
provide(layoutKey, layoutData)
provide(themeKey, {
  isDark,
  lightTheme,
  darkTheme,
  toggleDark
})
provide(breakpointKey, breakpointData)
provide('navbarHeight', navbarHeight)
provide('sidebarWidth', sidebarWidth)
</script>

<template>
  <div id="admin-layout-wrapper">
    <Navbar />
    <Sidebar />
    <Section />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#admin-layout-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>
