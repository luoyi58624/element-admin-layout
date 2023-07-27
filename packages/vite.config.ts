import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'vue3-admin-layout',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
