<script setup lang="ts">
import { LayoutProvide } from 'element-admin-layout-components'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('en')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
	language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>

<template>
	<layout-provide>
		<el-config-provider :locale="locale">
			<RouterView />
		</el-config-provider>
	</layout-provide>
</template>

<style scoped></style>
