<script setup lang="ts">
import { inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { layoutConfigKey, layoutSizeKey, StorageKey } from '../../config'
import { safeStorageData } from '../../utils'
import { LayoutLanguageItem } from '../../types'
import en from 'element-plus/dist/locale/en.mjs'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ElConfigProvider } from 'element-plus'
import { merge } from 'lodash-es'

const i18n = useI18n()
const layoutSize = inject(layoutSizeKey)
const layoutConfig = inject(layoutConfigKey)
i18n.locale.value = safeStorageData(StorageKey.language, i18n.locale.value)

Object.keys(layoutConfig.i18n?.languages).forEach(e => {
	i18n.setLocaleMessage(
		e,
		merge((layoutConfig.i18n?.languages[e] as LayoutLanguageItem).messages, i18n.messages.value[e])
	)
})

const elLocale = computed(() => {
	if (i18n.locale.value === 'en') {
		return en
	} else {
		return zhCn
	}
})
</script>

<template>
	<el-config-provider :locale="elLocale" :size="layoutSize">
		<slot />
	</el-config-provider>
</template>

<style scoped lang="scss"></style>
