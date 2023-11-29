import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
	base: '/element-admin-layout/',
	plugins: [
		vue(),
		Unocss({
			configFile: '../unocss.config.ts'
		}),
		AutoImport({
			imports: ['vue', 'vue-router', '@vueuse/core']
		}),
		Components({
			resolvers: [ElementPlusResolver()],
			extensions: ['vue', 'tsx'],
			deep: true,
			directoryAsNamespace: false,
			dirs: ['src/components']
		}),
		ElementPlus()
	],
	server: {
		port: 7989
	},
	build: {
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false,
		reportCompressedSize: true, // 禁止输出压缩尺寸
		cssCodeSplit: true, // css代码分割，true启用、false禁止
		chunkSizeWarningLimit: 2000, // 文件大小超出警告，单位kb
		rollupOptions: {
			output: {
				entryFileNames: `js/App.${new Date().getTime()}.js`,
				chunkFileNames: `js/[name].${new Date().getTime()}.js`,
				assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
				compact: true,
				manualChunks: {
					'vendors/vue': ['vue', 'vue-router'],
					'vendors/element-plus': ['element-plus']
				}
			}
		}
	}
})
