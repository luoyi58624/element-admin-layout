<template>
  <ElScrollbar>
    <ElMenu
      backgroundColor="#E5E5E5"
      textColor="black"
      activeTextColor="#00AC9B"
      :defaultActive="route.path"
      :uniqueOpened="false"
      :collapseTransition="false">
      <MenuItem v-for="menu in menus" :menu="menu" />
    </ElMenu>
  </ElScrollbar>
</template>

<script setup lang="ts">
import { ElScrollbar, ElMenu } from 'element-plus'
import { inject } from 'vue'
import { layoutPropsKey } from '../../config/provide_key'
import { routeToMenu } from '../../utils/route'
import { useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
const layoutProps = inject(layoutPropsKey)!
const route = useRoute()
const menus = routeToMenu(layoutProps.initRoutes)
</script>

<style scoped lang="scss"></style>
