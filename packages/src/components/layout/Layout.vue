<script setup lang="ts">
import Navbar from './navbar/Navbar.vue'
import Sidebar from './Sidebar.vue'
import Section from './Section.vue'
import { layoutKey, breakpointKey, themeKey, layoutConfigKey } from '../../components'
import { StorageKey } from '../../config'
import { drawerPositionType } from '../../types'

const layoutConfig = inject(layoutConfigKey)

const scope = effectScope()
const isDark = useDark({
  initialValue: layoutConfig.themeMode
})
const toggleDark = useToggle(isDark)
const lightTheme = ref(layoutConfig.lightTheme)
const darkTheme = ref(layoutConfig.darkTheme)
const currentTheme = computed(() => (isDark.value ? darkTheme.value : lightTheme.value))

const layoutData = reactive({
  size: 'default',
  isCollapse: false,
  openNavTab: false,
  showSidebarDarwer: false,
  autoCloseMenu: false,
  openKeepalive: false,
  drawerPosition: 'rtl' as drawerPositionType,
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

provide(layoutKey, layoutData)
provide(themeKey, {
  isDark,
  currentTheme,
  lightTheme,
  darkTheme,
  toggleDark
})
provide(breakpointKey, breakpointData)
provide('navbarHeight', navbarHeight)
provide('sidebarWidth', sidebarWidth)

scope.run(() => {
  watch(lightTheme, value => {
    localStorage.setItem(StorageKey.lightTheme, JSON.stringify(value))
  })
  watch(darkTheme, value => {
    localStorage.setItem(StorageKey.darkTheme, JSON.stringify(value))
  })
})

onUnmounted(() => {
  scope.stop()
})
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

h1 {
  @apply text-2xl font-bold text-dark-2 dark:text-light-5;
}
h2 {
  @apply text-xl font-bold text-dark-2 dark:text-light-5;
}
h3 {
  @apply text-lg font-bold text-dark-2 dark:text-light-5;
}
h4 {
  @apply text-base font-bold text-dark-2 dark:text-light-5;
}
h5 {
  @apply text-sm font-bold text-dark-2 dark:text-light-5;
}
h6 {
  @apply text-xs font-bold text-dark-2 dark:text-light-5;
}

#admin-layout-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;

  .el-drawer__title {
    @apply font-bold text-lg text-dark-2 dark:text-light-5;
  }

  /* 全屏 dialog 固定 body 高度，防止被内容撑开 */
  .el-dialog__body {
    height: calc(100% - 30px);
    min-height: 400px;
  }

  /*drawer抽屉样式*/
  .drawer_content {
    width: 100%;
    padding: 0 20px;
  }

  /* drawer开启滚动条 */
  .el-drawer__body {
    padding: 0;
    overflow: auto;
  }

  .drawer_footer {
    width: 100%;
    margin-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  /* 隐藏颜色选择器清除按钮 */
  .el-color-dropdown__btns > :nth-child(2) {
    display: none !important;
  }
}
</style>
