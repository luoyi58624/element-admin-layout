<template>
	<el-dropdown trigger="hover">
		<header-icon icon="i-file-icons-font-outline" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="layoutData.size = 'large'">{{ $t('element_admin_layout_language.size.large') }} </el-dropdown-item>
				<el-dropdown-item @click="layoutData.size = 'default'">{{ $t('element_admin_layout_language.size.default') }} </el-dropdown-item>
				<el-dropdown-item @click="layoutData.size = 'small'">{{ $t('element_admin_layout_language.size.small') }} </el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import HeaderIcon from './HeaderIcon.vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { layoutKey } from '../index'

const layoutData = inject(layoutKey)
</script>

<style scoped lang="scss"></style>
