<template>
  <div
    class="header-icon-wrapper"
    :style="{ fontSize: size + 'px' }"
    @click="emits('click', $event)"
    @mousedown="addRipper"
    @mouseup="removeRipper"
    @mouseleave.passive="removeRipper">
    <div :class="[icon, 'icon']" style="pointer-events: none"></div>
    <Ripple ref="ripperRef" />
  </div>
</template>

<script setup lang="ts">
import Ripple from '../../../components/ripple/Ripple.vue'

defineProps({
  icon: String,
  size: {
    type: Number,
    default: 18
  }
})

const emits = defineEmits(['click'])

const ripperRef = ref()

function addRipper(e) {
  unref(ripperRef).addRipper(e)
}

function removeRipper() {
  unref(ripperRef).removeRipper()
}
</script>

<style scoped lang="scss">
.header-icon-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    background: var(--admin-layout-theme-navbar-hover);

    & > .icon {
      animation: logoAnimation 0.3s ease-in-out;
    }
  }
}

@keyframes logoAnimation {
  0% {
    transform: scale(0.3);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
