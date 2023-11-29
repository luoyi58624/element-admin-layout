<template>
  <ElDropdown trigger="hover">
    <HeaderIcon icon="i-file-icons-font-outline" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>大型</el-dropdown-item>
        <el-dropdown-item>默认</el-dropdown-item>
        <el-dropdown-item>小型</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import HeaderIcon from './HeaderIcon.vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
</script>

<style scoped lang="scss"></style>
