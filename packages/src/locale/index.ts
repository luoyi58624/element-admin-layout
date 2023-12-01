import { LayoutLanguage } from '../types'

import { layoutLanguage_zhCn } from './zh_cn'
import { layoutLanguage_en } from './en'

/** element-admin-layout支持的语言列表 */
export const layoutLanguage: LayoutLanguage = {
	'zh-cn': layoutLanguage_zhCn,
	en: layoutLanguage_en
}
