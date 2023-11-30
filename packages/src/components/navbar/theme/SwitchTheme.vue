<template>
	<div>
		<HeaderIcon icon="i-icon-park-outline-theme" @click="showThemePanel = true" />
		<ElDrawer
			title="主题设置"
			modal-class="bg-transparent"
			size="400px"
			destroy-on-close
			:direction="layoutData.drawerPosition"
			v-model="showThemePanel">
			<ElScrollbar>
				<div class="w-full p-4">
					<PresetTheme title="亮色主题" :is-dark="false" :themes="lightThemes" />
					<PresetTheme title="暗色主题" :is-dark="true" :themes="darkThemes" />
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
import { StorageKey, darkThemes, lightThemes } from '../../../config'
import { layoutKey, themeKey } from '../../index'
import { ElDrawer, ElScrollbar } from 'element-plus'
import HeaderIcon from '../HeaderIcon.vue'
import PresetTheme from './PresetTheme.vue'
import CustomTheme from './CustomTheme.vue'

const showThemePanel = ref(false)
const layoutData = inject(layoutKey)!
const { isDark, lightTheme, darkTheme } = inject(themeKey)!

function resetTheme() {
	localStorage.removeItem(StorageKey.lightTheme)
	localStorage.removeItem(StorageKey.darkTheme)
	isDark.value = false
	lightTheme.value = {
		layout: Object.assign({}, lightThemes[0].layout),
		element: Object.assign({}, lightThemes[0].element)
	}
	darkTheme.value = {
		layout: Object.assign({}, darkThemes[0].layout),
		element: Object.assign({}, darkThemes[0].element)
	}
}
</script>

<style lang="scss"></style>
