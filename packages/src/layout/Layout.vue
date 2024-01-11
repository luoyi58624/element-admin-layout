<script setup lang="ts">
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import Section from './Section.vue'
import NavTab from './NavTab.vue'
</script>

<template>
	<div id="admin-layout-wrapper">
		<Navbar />
		<Sidebar />
		<NavTab />
		<Section />
	</div>
</template>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

#admin-layout-wrapper {
	width: 100vw;
	height: 100vh;
	position: relative;
	top: 0;
	left: 0;
	overflow: hidden;

	.el-drawer__title {
		font-weight: bold;
		font-size: 18px;
	}

	/* 全屏 dialog 固定 body 高度，防止被内容撑开 */
	.el-dialog__body {
		height: calc(100% - 30px);
		min-height: 400px;
	}

	/*drawer抽屉样式*/
	.drawer_content {
		width: 100%;
		padding: 0 20px;
	}

	/* drawer开启滚动条 */
	.el-drawer__body {
		padding: 0;
		overflow: auto;
	}

	.drawer_footer {
		width: 100%;
		margin-top: 20px;
		padding-left: 20px;
		padding-bottom: 20px;
	}

	/* 隐藏颜色选择器清除按钮 */
	.el-color-dropdown__btns > :nth-child(2) {
		display: none !important;
	}
}
</style>
