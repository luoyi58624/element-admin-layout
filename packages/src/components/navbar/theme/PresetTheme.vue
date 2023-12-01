<template>
	<el-divider contentPosition="left">
		<h4>{{ title }}</h4>
	</el-divider>
	<div class="w-full flex flex-nowrap">
		<div v-for="theme in themes" class="aspect-square flex-1 m-1 relative cursor-pointer" @click="setTheme(theme)">
			<header class="w-full h-15/100 absolute top-0 left-0" :style="{ background: theme.layout.navbar }" />
			<aside class="w-25/100 h-85/100 absolute top-15/100 left-0" :style="{ background: theme.layout.sidebar }" />
			<main class="w-75/100 h-85/100 absolute top-15/100 left-25/100" :style="{ background: theme.layout.section }" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ElDivider } from 'element-plus'
import { layoutThemeDataKey } from '../../../config'
import { LayoutThemeModel } from '../../../index'

interface Props {
	title: string
	isDark: boolean
	themes: LayoutThemeModel[]
}
const props = defineProps<Props>()

const themeData = inject(layoutThemeDataKey)!

function setTheme(theme: LayoutThemeModel) {
	if (props.isDark) {
		themeData.isDark.value = true
		themeData.darkTheme.value = Object.assign({}, theme)
	} else {
		themeData.isDark.value = false
		themeData.lightTheme.value = Object.assign({}, theme)
	}
}
</script>

<style scoped lang="scss"></style>
