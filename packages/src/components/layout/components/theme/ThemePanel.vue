<template>
  <ElDrawer
    title="主题设置"
    modal-class="bg-transparent"
    size="400px"
    destroy-on-close
    :direction="layoutData.drawerPosition"
    :model-value="modelValue"
    @close="emits('update:modelValue', false)">
    <ElScrollbar>
      <div class="w-full p-4">
        <PresetTheme title="亮色主题" :is-dark="false" :themes="lightThemes" />
        <PresetTheme title="暗色主题" :is-dark="true" :themes="darkThemes" />
        <CustomTheme />
        <button class="w-full mt-4 py-2 rounded-full" @click="resetTheme">
          还原默认设置
        </button>
      </div>
    </ElScrollbar>
  </ElDrawer>
</template>

<script setup lang="ts">
import { StorageKey, darkThemes, layoutKey, lightThemes, themeKey } from '../../../../config'
import { ElDrawer, ElScrollbar } from 'element-plus'
import PresetTheme from './PresetTheme.vue'
import CustomTheme from './CustomTheme.vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:modelValue'])

const layoutData = inject(layoutKey)
const { isDark, lightTheme, darkTheme } = inject(themeKey)

function resetTheme() {
  localStorage.removeItem(StorageKey.lightTheme)
  localStorage.removeItem(StorageKey.darkTheme)
  isDark.value = false
  lightTheme.value = {
    layout: Object.assign({}, lightThemes[0].layout),
    element: Object.assign({}, lightThemes[0].element)
  }
  darkTheme.value = {
    layout: Object.assign({}, darkThemes[0].layout),
    element: Object.assign({}, darkThemes[0].element)
  }
}
</script>

<style lang="scss"></style>
