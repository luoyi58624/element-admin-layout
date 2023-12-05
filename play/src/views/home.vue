<template>
	<div>
		<h1>{{ $t('menu.home') }}</h1>
		<p>{{ title }}</p>
		<p>{{ $t('message.hello') }}</p>
		<button @click="themeData.toggleDark()">切换黑暗模式</button>
	</div>
</template>

<script setup lang="ts">
import { layoutThemeDataKey } from 'element-admin-layout-config'
import i18n from '../i18n'

const themeData = inject(layoutThemeDataKey)!
const title = computed(() => i18n.global.t('menu.home'))
</script>

<style scoped lang="scss"></style>
