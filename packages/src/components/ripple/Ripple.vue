<template>
  <div class="ripper-container">
    <div
      v-for="ripperItem in rippers"
      :key="ripperItem.key"
      :style="{
        width: ripperItem.width + 'px',
        height: ripperItem.height + 'px',
        left: ripperItem.left + 'px',
        top: ripperItem.top + 'px'
      }"
      :class="['ripper-item', ripperItem.addHideClass && 'hide-ripper']" />
  </div>
</template>

<script setup lang="ts">
interface Ripple {
  key: any
  width: number
  height: number
  left: number
  top: number
  isHide: boolean
  addHideClass: boolean
}

const rippers = ref<Array<Ripple>>([])

function addRipper(e) {
  const rippleDom = e.currentTarget as HTMLElement
  const size = Math.floor(rippleDom.clientWidth * 2)
  rippers.value.unshift({
    key: Date.now(),
    width: size,
    height: size,
    left: e.pageX - e.target.offsetLeft - size / 2,
    top: e.pageY - e.target.offsetTop - size / 2,
    isHide: false,
    addHideClass: false
  })
}

function removeRipper() {
  if (rippers.value.length === 0) return
  let index = 1
  let ripper
  for (let i = 0; i < rippers.value.length; i++) {
    if (rippers.value[i].isHide) {
      if (i > 1) {
        index = i
      }
      break
    }
  }
  rippers.value[index - 1].isHide = true
  ripper = unref(rippers.value[index - 1])
  const delay = Math.max(300 - (Date.now() - ripper.key), 0)
  setTimeout(() => {
    rippers.value.find(item => item.key === ripper.key).addHideClass = true
    setTimeout(() => {
      rippers.value.pop()
    }, 250)
  }, delay)
}

defineExpose({
  addRipper,
  removeRipper
})
</script>

<style scoped lang="scss">
.ripper-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;

  & > .ripper-item {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background-color: currentColor;
    animation: ripperEnter 0.3s ease-out forwards;

    &.hide-ripper {
      animation: ripperLeave 0.25s ease-out forwards;
    }
  }
}

@keyframes ripperEnter {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}

@keyframes ripperLeave {
  0% {
    opacity: 0.3;
  }

  100% {
    opacity: 0;
  }
}
</style>
