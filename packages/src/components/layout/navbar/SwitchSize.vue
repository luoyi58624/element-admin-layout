<template>
	<ElDropdown trigger="hover">
		<HeaderIcon icon="i-file-icons-font-outline" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="layoutData.size = 'large'">大型</el-dropdown-item>
				<el-dropdown-item @click="layoutData.size = 'default'">默认</el-dropdown-item>
				<el-dropdown-item @click="layoutData.size = 'small'">小型</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</ElDropdown>
</template>

<script setup lang="ts">
import HeaderIcon from './HeaderIcon.vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { layoutKey } from '../../index'

const layoutData = inject(layoutKey)
</script>

<style scoped lang="scss"></style>
