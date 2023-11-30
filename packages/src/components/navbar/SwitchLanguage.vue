<template>
	<el-dropdown trigger="hover" @command="switchLanguage">
		<header-icon icon="i-mdi-translate" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="language in layoutConfigData.i18n?.languages" :command="language.value">
					<span
						:style="{
							color: language.value == locale ? themeData.currentTheme.value.element.primary : null
						}">
						{{ language.label }}
					</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import HeaderIcon from './HeaderIcon.vue'
import { useI18n } from 'vue-i18n'
import { inject } from 'vue'
import { layoutConfigKey, StorageKey, themeKey } from '../index'

const { locale } = useI18n()
const layoutConfigData = inject(layoutConfigKey)
const themeData = inject(themeKey)

function switchLanguage(command) {
	locale.value = command
	localStorage.setItem(StorageKey.language, command)
}
</script>

<style scoped lang="scss"></style>
