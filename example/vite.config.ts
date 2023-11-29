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
    ElementPlus({})
  ],
  server:{
    port: 7989
  }
})
