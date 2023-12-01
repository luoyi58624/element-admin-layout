<template>
	<div
		class="header-icon-wrapper"
		:style="{
			width: iconWidth + 'px',
			height: iconWidth + 'px',
			fontSize: iconSize + 'px',
			color: navbarTextColor,
			margin: `0px ${iconMargin}px`
		}"
		@click="emits('click', $event)"
		@mousedown="addRipper"
		@mouseup="removeRipper"
		@mouseleave.passive="removeRipper">
		<div :class="[icon, 'icon']" style="pointer-events: none"></div>
		<Ripple ref="ripperRef" />
	</div>
</template>

<script setup lang="ts">
import { ref, unref, computed, inject } from 'vue'
import Ripple from '../ripper/Ripple.vue'
import { layoutSizeKey, layoutThemeDataKey } from '../../config'
import { deepenColor } from '../../utils'

interface Props {
	icon: string
	size?: number
	tooltip?: string
}

const props = withDefaults(defineProps<Props>(), {
	size: 20,
	tooltip: ''
})

const emits = defineEmits(['click'])
const layoutSize = inject(layoutSizeKey)
const { currentTheme } = inject(layoutThemeDataKey)
const navbarTextColor = inject<string>('navbarTextColor')!

const ripperRef = ref()

const iconSize = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return props.size - 4
		case 'large':
			return props.size + 2
		default:
			return props.size
	}
})

const iconWidth = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return 36
		case 'large':
			return 48
		default:
			return 44
	}
})

const iconMargin = computed(() => {
	switch (layoutSize.value) {
		case 'small':
			return 0
		case 'large':
			return 2
		default:
			return 1
	}
})

const hoverColor = computed(() => {
	return deepenColor(currentTheme.value.layout.navbar, 10)
})

function addRipper(e: any) {
	unref(ripperRef).addRipper(e)
}

function removeRipper() {
	unref(ripperRef).removeRipper()
}
</script>

<style scoped lang="scss">
.header-icon-wrapper {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 50%;
	overflow: hidden;
	outline: none;

	&:hover {
		background: v-bind(hoverColor);

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
