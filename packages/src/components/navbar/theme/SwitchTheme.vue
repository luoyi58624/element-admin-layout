<template>
	<div>
		<NavbarIcon icon="i-icon-park-outline-theme" @click="showThemePanel = true" />
		<ElDrawer
			title="主题设置"
			modal-class="bg-transparent"
			size="400px"
			destroy-on-close
			:direction="layoutData.drawerPosition"
			v-model="showThemePanel">
			<ElScrollbar>
				<div class="w-full p-4">
					<PresetTheme title="亮色主题" :is-dark="false" :themes="layoutLightThemes" />
					<PresetTheme title="暗色主题" :is-dark="true" :themes="layoutDarkThemes" />
					<CustomTheme />
					<button
						class="w-full mt-4 py-2 outline-none border-none cursor-pointer rounded-full bg-light-8 dark:bg-dark-1"
						@click="resetTheme">
						还原默认设置
					</button>
				</div>
			</ElScrollbar>
		</ElDrawer>
	</div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { StorageKey, layoutDarkThemes, layoutLightThemes, layoutDataKey, layoutThemeDataKey } from '../../../config'
import { ElDrawer, ElScrollbar } from 'element-plus'
import NavbarIcon from '../NavbarIcon.vue'
import PresetTheme from './PresetTheme.vue'
import CustomTheme from './CustomTheme.vue'

const showThemePanel = ref(false)
const layoutData = inject(layoutDataKey)!
const { isDark, lightTheme, darkTheme } = inject(layoutThemeDataKey)!

function resetTheme() {
	localStorage.removeItem(StorageKey.lightTheme)
	localStorage.removeItem(StorageKey.darkTheme)
	isDark.value = false
	lightTheme.value = {
		layout: Object.assign({}, layoutLightThemes[0].layout),
		element: Object.assign({}, layoutLightThemes[0].element)
	}
	darkTheme.value = {
		layout: Object.assign({}, layoutDarkThemes[0].layout),
		element: Object.assign({}, layoutDarkThemes[0].element)
	}
}
</script>

<style lang="scss"></style>
