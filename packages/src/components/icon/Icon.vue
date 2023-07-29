<template>
  <div v-if="icon.startsWith('i-')" :class="icon"></div>
  <IconWrapper v-else-if="icon.indexOf(':') !== -1" :icon="icon"></IconWrapper>
  <component v-else :is="icon"></component>
</template>

<script setup lang="ts">
import { Icon as IconWrapper } from '@iconify/vue'

defineProps({
  // 支持三种类型图标，静态图标、动态图标、组件图标
  // 静态图标：以 i- 开头的图标将被渲染为静态图标，由 unocss 插件处理
  // 动态图标：图标包含 : 分隔符将由 iconify 处理，图标将从 iconify 服务器加载
  // 组件图标：传入组件名称将渲染为动态组件图标，例如：element-plus 图标
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
