<template>
  <RouterLink v-if="menu.children == null" :to="menu.path">
    <ElMenuItem :index="menu.path">
      <ElIcon>
        <div v-if="menu.icon == ''" class="i-heroicons-solid-view-grid" />
        <Icon v-else :icon="menu.icon" />
      </ElIcon>
      <span>{{ menu.title }}</span>
    </ElMenuItem>
  </RouterLink>
  <ElSubMenu v-else :index="menu.path" :showTimeout="50" :hideTimeout="50">
    <template #title>
      <ElIcon>
        <div v-if="menu.icon == ''" class="i-mdi-folder" />
        <Icon v-else :icon="menu.icon" />
      </ElIcon>
      <span>{{ menu.title }}</span>
    </template>
    <MenuItem v-for="childMenu in menu.children" :menu="childMenu" />
  </ElSubMenu>
</template>

<script setup lang="ts">
import Icon from '../../components/Icon.vue'

defineProps(['menu'])
</script>

<style scoped lang="scss"></style>
