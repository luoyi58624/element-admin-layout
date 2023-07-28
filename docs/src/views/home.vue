<template>
  <div>
    <h1>首页</h1>
    {{ themeData.isDark }}
    <el-button @click="themeData.toggleDark()">切换黑暗模式</el-button>
  </div>
</template>

<script setup lang="ts">
import { themeKey } from 'element-admin-layout'

const themeData = inject(themeKey)!
</script>

<style scoped lang="scss"></style>
