<template>
	<div>
		<h1>首页</h1>
		<button @click="themeData.toggleDark()">切换黑暗模式</button>
	</div>
</template>

<script setup lang="ts">
import { themeKey } from 'element-admin-layout-components'

const themeData = inject(themeKey)!
</script>

<style scoped lang="scss"></style>
