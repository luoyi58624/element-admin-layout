<script setup lang="ts">
import NestRouterView from './components/NestRouterView.vue'

const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
</script>

<template>
  <div
    id="admin-layout-section"
    :style="{
      width: `calc(100% - ${sidebarWidth}px)`,
      height: `calc(100% - ${navbarHeight}px)`,
      left: sidebarWidth + 'px',
      top: navbarHeight + 'px'
    }">
    <div class="w-full p-2 overflow-hidden overflow-y-auto">
      <NestRouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
#admin-layout-section {
  position: absolute;
  background-color: var(--admin-layout-theme-light-section);
}

.dark #admin-layout-section {
  color: white;
  background-color: var(--admin-layout-theme-dark-section);
}
</style>
