<template>
	<el-divider contentPosition="left">
		<h4>Layout主题</h4>
	</el-divider>

	<div class="w-full mt-2 flex items-center justify-between">
		<span>导航头部背景</span>
		<el-color-picker v-model="currentTheme.layout.navbar" />
	</div>
	<div class="w-full mt-2 flex items-center justify-between">
		<span>侧边栏背景</span>
		<el-color-picker v-model="currentTheme.layout.sidebar" />
	</div>
	<div class="w-full mt-2 flex items-center justify-between">
		<span>页面展示区域背景</span>
		<el-color-picker v-model="currentTheme.layout.section" />
	</div>
	<!-- <div class="w-full mt-2 flex items-center justify-between">
    <span>导航标签背景</span>
    <el-color-picker v-model="theme.layout.navbar" />
  </div> -->
	<!-- <div class="w-full mt-2 flex items-center justify-between">
    <span>导航标签激活背景</span>
    <el-color-picker v-model="theme.layout.navbar" />
  </div> -->
	<div class="w-full mt-2 flex items-center justify-between">
		<span>侧边栏激活菜单文字颜色</span>
		<el-color-picker v-model="currentTheme.layout.sidebarActiveText" />
	</div>

	<ElDivider contentPosition="left">
		<h4>Element-UI主题</h4>
	</ElDivider>
	<div class="w-full mt-2 flex items-center justify-between">
		<span :style="{ color: currentTheme.element.primary }">主要颜色(Primary)</span>
		<el-color-picker v-model="currentTheme.element.primary" />
	</div>
	<div class="w-full mt-2 flex items-center justify-between">
		<span :style="{ color: currentTheme.element.success }">成功颜色(Success)</span>
		<el-color-picker v-model="currentTheme.element.success" />
	</div>
	<div class="w-full mt-2 flex items-center justify-between">
		<span :style="{ color: currentTheme.element.warning }">警告颜色(Warning)</span>
		<el-color-picker v-model="currentTheme.element.warning" />
	</div>
	<div class="w-full mt-2 flex items-center justify-between">
		<span :style="{ color: currentTheme.element.danger }">错误颜色(Error)</span>
		<el-color-picker v-model="currentTheme.element.danger" />
	</div>
	<div class="w-full mt-2 flex items-center justify-between">
		<span :style="{ color: currentTheme.element.info }">基础颜色(Info)</span>
		<el-color-picker v-model="currentTheme.element.info" />
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ElDivider, ElColorPicker } from 'element-plus'
import { layoutThemeDataKey } from '../../../config'

const { currentTheme } = inject(layoutThemeDataKey)!
</script>

<style scoped lang="scss"></style>
