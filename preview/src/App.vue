<script setup lang="ts">
import { LayoutProvide } from 'element-admin-layout'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const elLocale = computed(() => {
	if (locale.value === 'en') {
		return en
	} else {
		return zhCn
	}
})
</script>

<template>
	<layout-provide>
		<el-config-provider :locale="elLocale">
			<RouterView />
		</el-config-provider>
	</layout-provide>
</template>

<style></style>
