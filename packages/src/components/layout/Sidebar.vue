<template>
  <aside
    id="admin-layout-sidebar"
    class="transition-all duration-300"
    :style="{
      width: sidebarWidth + 'px',
      height: `calc(100% - ${navbarHeight}px)`,
      top: navbarHeight + 'px'
    }">
    <MenuWrapper />
  </aside>
</template>

<script setup lang="ts">
import MenuWrapper from './components/MenuWrapper.vue'

const navbarHeight = inject('navbarHeight')!
const sidebarWidth = inject('sidebarWidth')!
</script>

<style lang="scss">
#admin-layout-sidebar {
  position: absolute;
  left: 0;
  user-select: none;
  background-color: var(--admin-layout-theme-light-sidebar);
}

.dark #admin-layout-sidebar {
  color: white;
  background-color: var(--admin-layout-theme-dark-sidebar);
}
</style>
