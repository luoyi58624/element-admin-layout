import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import Unocss from 'unocss/vite'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
	plugins: [
		vue(),
		Unocss({
			configFile: '../unocss.config.ts'
		}),
		ElementPlus(),
		dts({
			outDir: 'dist'
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, './src/index.ts'),
			name: 'AdminLayout',
			fileName: 'index',
			formats: ['es']
		},
		rollupOptions: {
			external: ['vue', 'vue-router', 'vue-i18n', 'element-plus']
		}
	}
})
