<script setup lang="ts">
import { inject } from 'vue'

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
      <router-view v-slot="{ Component }">
        <transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
#admin-layout-section {
  position: absolute;
}
</style>
