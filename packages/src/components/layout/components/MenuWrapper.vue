<template>
  <el-scrollbar>
    <ElMenu
      :backgroundColor="isDark ? darkTheme.layout.sidebar : lightTheme.layout.sidebar"
      :textColor="sliderTextColor"
      :activeTextColor="
        isDark ? darkTheme.layout.sidebarActiveText : lightTheme.layout.sidebarActiveText
      "
      :defaultActive="route.path"
      :uniqueOpened="false"
      :collapseTransition="false">
      <MenuItem v-for="menu in menus" :menu="menu" />
    </ElMenu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { layoutPropsKey, themeKey } from '../../../config'
import { routeToMenu, isDark as isDarkColor } from '../../../utils'
import MenuItem from './MenuItem.vue'

const layoutProps = inject(layoutPropsKey)!
const route = useRoute()

const lightText = '#f8f9fa'
const darkText = '#495057'

const { isDark, lightTheme, darkTheme } = inject(themeKey)!
const menus = ref([])

const sliderTextColor = computed(() => {
  if (isDark.value) {
    return isDarkColor(darkTheme.value.layout.sidebar) ? lightText : darkText
  } else {
    return isDarkColor(lightTheme.value.layout.sidebar) ? lightText : darkText
  }
})

const layoutRoutes = layoutProps.router.getRoutes().filter(item => item.name === 'Layout')
if (layoutRoutes.length > 0) {
  menus.value = routeToMenu(layoutRoutes[0].children, layoutRoutes[0].path)
}
</script>

<style scoped lang="scss"></style>
