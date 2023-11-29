<template>
	<el-dropdown trigger="hover">
		<header-icon icon="i-mdi-translate" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>简体中文</el-dropdown-item>
				<el-dropdown-item>English</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import HeaderIcon from './HeaderIcon.vue'
</script>

<style scoped lang="scss"></style>
