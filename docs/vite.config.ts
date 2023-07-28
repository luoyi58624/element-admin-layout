import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', '@vueuse/core']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      extensions: ['vue', 'tsx'],
      deep: true,
      directoryAsNamespace: false,
      dirs: ['src/components']
    })
  ],
  server: {
    port: 8000
  }
})
