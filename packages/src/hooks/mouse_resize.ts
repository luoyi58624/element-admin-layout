import { onMounted, onUnmounted, Ref, unref } from 'vue'
import { throttle } from 'lodash-es'

interface OptionType {
	/** 目标元素 */
	targetDomRef: Ref
	/** 元素所处x坐标*/
	x?: Ref
	/** 元素所处y坐标*/
	y?: Ref
}

export function useMouseResize({ targetDomRef, x, y }: OptionType) {
	function mouseMoveHandler(e: MouseEvent) {
		if (x != null) x.value = e.pageX
		if (y != null) y.value = e.pageY
	}

	const throttle1Fun = throttle(mouseMoveHandler, 16)

	function mouseDownHandler() {
		document.documentElement.classList.add('global-col-resize')
		window.addEventListener('mousemove', throttle1Fun)
		window.addEventListener('mouseup', mouseUpHandler)
	}

	function mouseUpHandler() {
		document.documentElement.classList.remove('global-col-resize')
		window.removeEventListener('mousemove', throttle1Fun)
		window.removeEventListener('mouseup', mouseUpHandler)
	}

	onMounted(() => {
		unref(targetDomRef).addEventListener('mousedown', mouseDownHandler)
	})
	onUnmounted(() => {
		unref(targetDomRef).removeEventListener('mousedown', mouseDownHandler)
	})
}
