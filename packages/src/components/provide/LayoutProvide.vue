<script setup lang="ts">
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { layoutConfigKey, StorageKey } from '../../config'
import { safeStorageData } from '../../utils'

const { locale } = useI18n()
const layoutConfig = inject(layoutConfigKey)
locale.value = safeStorageData(StorageKey.language, layoutConfig.i18n!.languages[0].value)
</script>

<template>
	<slot />
</template>

<style scoped lang="scss"></style>
