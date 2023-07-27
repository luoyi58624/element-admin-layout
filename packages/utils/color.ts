import { TinyColor } from '@ctrl/tinycolor';

/**
 * 将颜色与白色进行混合，获取更亮的颜色
 * @param color  颜色
 * @param num    比例：1-100
 */
export function lighten(color: string, num: number) {
	return new TinyColor(color).mix('#fff', num).toHexString();
}

/**
 * 将颜色与黑色进行混合，获取更暗的颜色
 * @param color  颜色
 * @param num    比例：1-100
 */
export function darken(color: string, num: number) {
	return new TinyColor(color).mix('#000', num).toHexString();
}

/**
 * 判断颜色是否为暗色
 * @param color
 */
export function isDark(color) {
	return new TinyColor(color).getBrightness() < 165;
}

/**
 * 在指定颜色上对其加深，如果是亮色，则颜色变深，如果是暗色，则颜色变浅
 * @param color 
 * @param scale 
 * @returns 
 */
export function deepenColor(color: string, scale: number): string {
  return isDark(color) ? lighten(color, scale) : darken(color, scale)
}
