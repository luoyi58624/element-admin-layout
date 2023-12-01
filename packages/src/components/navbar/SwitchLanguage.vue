<template>
	<el-dropdown trigger="hover" @command="switchLanguage">
		<navbar-icon icon="i-mdi-translate" />
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="language in languages" :command="language">
					<span
						:style="{
							color: language == locale ? themeData.currentTheme.value.element.primary : null
						}">
						{{ layoutConfigData.i18n!.languages![language].label }}
					</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import NavbarIcon from './NavbarIcon.vue'
import { useI18n } from 'vue-i18n'
import { inject } from 'vue'
import { layoutConfigKey, StorageKey, layoutThemeDataKey } from '../../config'

const { locale } = useI18n()
const layoutConfigData = inject(layoutConfigKey)
const themeData = inject(layoutThemeDataKey)

function switchLanguage(command) {
	locale.value = command
	localStorage.setItem(StorageKey.language, command)
}

const languages = Object.keys(layoutConfigData.i18n?.languages)
</script>

<style scoped lang="scss"></style>
