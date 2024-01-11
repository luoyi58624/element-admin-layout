<template>
	<div>
		<h1>{{ $t('menu.home') }}</h1>
		<p>{{ title }}</p>
		<p>{{ $t('message.hello') }}</p>
		<button @click="themeData.toggleDark()">切换黑暗模式</button>
		<!--		<FolderFill />-->
		<div contenteditable="true" class="p-2"></div>
	</div>
</template>

<script setup lang="tsx">
import { layoutThemeDataKey } from 'element-admin-layout-config'
import i18n from '../i18n'
import { Folder } from '@element-plus/icons-vue'

const themeData = inject(layoutThemeDataKey)!
const title = computed(() => i18n.global.t('menu.home'))
const FolderFill = <Folder style="fill: red" />
</script>

<style scoped lang="scss"></style>
