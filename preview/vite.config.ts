import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	server: {
		port: 8000
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
					'vendors/element-plus': ['element-plus'],
					'vendors/element-admin-layout': ['element-admin-layout']
				}
			}
		}
	}
})
