<template>
	<div>
		<h1>首页</h1>
		<p>{{ $t('message.hello') }}</p>
		<button @click="themeData.toggleDark()">切换黑暗模式</button>
	</div>
</template>

<script setup lang="ts">
import { layoutThemeDataKey } from 'element-admin-layout-config'

const themeData = inject(layoutThemeDataKey)!
</script>

<style scoped lang="scss"></style>
