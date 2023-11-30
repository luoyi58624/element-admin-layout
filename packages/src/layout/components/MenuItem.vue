<template>
	<router-link v-if="menu.children == null" :to="menu.path">
		<el-menu-item :index="menu.path">
			<el-icon :size="22">
				<Icon :icon="menu.icon == '' ? 'i-heroicons-solid-view-grid' : menu.icon" />
			</el-icon>
			<template #title>{{ menu.title }}</template>
		</el-menu-item>
	</router-link>
	<el-sub-menu v-else :index="menu.path" :showTimeout="50" :hideTimeout="50">
		<template #title>
			<el-icon :size="22">
				<Icon :icon="menu.icon == '' ? 'i-mdi-folder' : menu.icon" />
			</el-icon>
			<span>{{ menu.title }}</span>
		</template>
		<menu-item v-for="childMenu in menu.children" :menu="childMenu" />
	</el-sub-menu>
</template>

<script setup lang="ts">
import { ElSubMenu, ElMenuItem, ElIcon } from 'element-plus'
import Icon from '../../components/icon/Icon.vue'

defineProps(['menu'])
</script>

<style scoped lang="scss">
a {
	text-decoration: none;
}
</style>
