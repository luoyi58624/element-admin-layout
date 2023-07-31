<template>
	<div
		class="header-icon-wrapper"
		:style="{ fontSize: size + 'px', color: navbarTextColor }"
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
import { themeKey } from '../../../components'
import { deepenColor } from '../../../utils'

defineProps({
	icon: String,
	size: {
		type: Number,
		default: 20
	}
})

const emits = defineEmits(['click'])
const { currentTheme } = inject(themeKey)!
const navbarTextColor = inject<string>('navbarTextColor')!

const ripperRef = ref()

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
	width: 48px;
	height: 48px;
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
