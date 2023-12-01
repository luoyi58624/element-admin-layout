<template>
	<header-icon :icon="isDark ? 'i-mdi-weather-night' : 'i-mdi-white-balance-sunny'" @click="isDark = !isDark" />
</template>

<script setup lang="ts">
import { inject } from 'vue'
import HeaderIcon from './HeaderIcon.vue'
import { layoutThemeDataKey } from '../../config'
const { isDark } = inject(layoutThemeDataKey)!
</script>

<style scoped lang="scss"></style>
