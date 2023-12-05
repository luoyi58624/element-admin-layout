<template>
	<router-link v-if="menu.children == undefined" :to="menu.path">
		<el-menu-item :index="menu.path">
			<Icon :icon="menu.icon == '' ? 'i-heroicons-solid-view-grid' : menu.icon" :size="iconSize" />
			<template #title>
				<span :style="{ fontSize: layoutFontSize + 'px' }">{{ menu.i18n ? $t(menu.title) : menu.title }}</span>
			</template>
		</el-menu-item>
	</router-link>
	<el-sub-menu v-else :index="menu.path" :showTimeout="50" :hideTimeout="50">
		<template #title>
			<Icon :icon="menu.icon == '' ? 'i-mdi-folder' : menu.icon" :size="iconSize" />
			<span :style="{ fontSize: layoutFontSize + 'px' }">{{ menu.i18n ? $t(menu.title) : menu.title }}</span>
		</template>
		<menu-item v-for="childMenu in menu.children" :menu="childMenu" />
	</el-sub-menu>
</template>

<script setup lang="ts">
import { ElSubMenu, ElMenuItem } from 'element-plus'
import Icon from '../../components/icon/Icon.vue'
import { computed, inject } from 'vue'
import { layoutSizeKey } from '../../config'
import { LayoutMenuModel } from '../../types'

defineProps<{
	menu: LayoutMenuModel
}>()

const layoutFontSize = inject('layoutFontSize')!
const layoutSize = inject(layoutSizeKey)

const iconSize = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return 20
		case 'large':
			return 24
		default:
			return 22
	}
})
</script>

<style scoped lang="scss">
a {
	text-decoration: none;
}
</style>
