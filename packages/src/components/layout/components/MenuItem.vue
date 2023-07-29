<template>
  <RouterLink v-if="menu.children == null" :to="menu.path">
    <ElMenuItem :index="menu.path">
      <ElIcon :size="22">
        <Icon :icon="menu.icon == '' ? 'i-heroicons-solid-view-grid' : menu.icon" />
      </ElIcon>
      <template #title>{{ menu.title }}</template>
    </ElMenuItem>
  </RouterLink>
  <ElSubMenu v-else :index="menu.path" :showTimeout="50" :hideTimeout="50">
    <template #title>
      <ElIcon :size="22">
        <Icon :icon="menu.icon == '' ? 'i-mdi-folder' : menu.icon" />
      </ElIcon>
      <span>{{ menu.title }}</span>
    </template>
    <MenuItem v-for="childMenu in menu.children" :menu="childMenu" />
  </ElSubMenu>
</template>

<script setup lang="ts">
import { ElSubMenu, ElMenuItem, ElIcon } from 'element-plus'
import Icon from '../../../components/icon/Icon.vue'

defineProps(['menu'])
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
