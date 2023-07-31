<template>
  <ElDropdown trigger="hover">
    <HeaderIcon icon="i-mdi-translate" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>简体中文</el-dropdown-item>
        <el-dropdown-item>English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import HeaderIcon from './HeaderIcon.vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
</script>

<style scoped lang="scss"></style>
