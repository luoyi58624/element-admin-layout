import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	shortcuts: {
		'flex-center': 'flex justify-center items-center',
		'inline-flex-center': 'inline-flex justify-center items-center'
	},
	presets: [
		presetUno(),
		presetIcons({
			prefix: 'i-'
		}),
		presetAttributify(),
		presetTypography()
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	safelist: 'prose prose-sm m-auto text-left'.split(' '),
	theme: {},
	rules: []
})
