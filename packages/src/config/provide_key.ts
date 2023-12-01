import type { InjectionKey, Ref, UnwrapNestedRefs } from 'vue'
import { LayoutConfig, BreakpointReactiveData, ThemeReactiveData, LayoutReactiveData, layoutSizeType } from '../types'

/** 注入layoutConfig配置*/
export const layoutSizeKey: InjectionKey<Ref<layoutSizeType>> = Symbol()

/** 注入layoutConfig配置*/
export const layoutConfigKey: InjectionKey<LayoutConfig> = Symbol()

/** 布局响应式数据 */
export const layoutDataKey: InjectionKey<UnwrapNestedRefs<LayoutReactiveData>> = Symbol()

/** 主题响应式数据 */
export const layoutThemeDataKey: InjectionKey<ThemeReactiveData> = Symbol()

/** 响应式断点数据 */
export const layoutBreakpointDataKey: InjectionKey<UnwrapNestedRefs<BreakpointReactiveData>> = Symbol()
