<template>
	<header-icon icon="i-mdi-cog-outline" @click="showSettingPanel = true" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderIcon from './HeaderIcon.vue'
const showSettingPanel = ref(false)
</script>

<style scoped lang="scss"></style>
