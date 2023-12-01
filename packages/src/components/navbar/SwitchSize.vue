<template>
	<el-dropdown trigger="hover">
		<navbar-icon icon="i-file-icons-font-outline" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="size in sizeList" @click="layoutSize = size.label">
					<div
						style="display: flex; align-items: center"
						:style="{
							color: size.label == layoutSize ? themeData.currentTheme.value.element.primary : null
						}">
						<div class="i-fe:text-size mr-1" :style="{ fontSize: size.fontSize + 2 + 'px' }" />
						<div :style="{ fontSize: size.fontSize + 'px' }">
							{{ $t(`element_admin_layout_language.size.${size.label}`) }}
						</div>
					</div>
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import NavbarIcon from './NavbarIcon.vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { layoutSizeKey, layoutThemeDataKey } from '../../config'

const layoutSize = inject(layoutSizeKey)
const themeData = inject(layoutThemeDataKey)

const sizeList = computed(() => {
	let fontSize
	switch (layoutSize.value) {
		case 'small':
			fontSize = 14
			break
		case 'large':
			fontSize = 16
			break
		default:
			fontSize = 15
			break
	}
	return [
		{
			label: 'large',
			fontSize: fontSize + 2
		},
		{
			label: 'default',
			fontSize: fontSize
		},
		{
			label: 'small',
			fontSize: fontSize - 2
		}
	]
})
</script>

<style scoped lang="scss"></style>
