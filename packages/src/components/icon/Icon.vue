<template>
	<el-icon :size="size">
		<div v-if="icon.startsWith('i-')" :class="icon"></div>
		<IconWrapper v-else-if="icon.indexOf(':') !== -1" :icon="icon"></IconWrapper>
		<component v-else :is="icon"></component>
	</el-icon>
</template>

<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { Icon as IconWrapper } from '@iconify/vue'

withDefaults(
	defineProps<{
		/**
		 * 支持三种类型图标，静态图标、动态图标、组件图标。
		 *
		 * 静态图标：以 i- 开头的图标将被渲染为静态图标，由 unocss 插件处理。
		 *
		 * 动态图标：图标包含 : 分隔符将由 iconify 处理，图标将从 iconify 服务器加载。
		 *
		 * 组件图标：注册的全局组件名字或者组件对象，例如：element-plus 组件图标
		 * */
		icon: any

		/** 图标尺寸 */
		size?: number
	}>(),
	{
		size: 20
	}
)
</script>

<style scoped lang="scss"></style>
