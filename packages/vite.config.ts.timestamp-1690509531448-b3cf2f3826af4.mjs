// vite.config.ts
import { defineConfig } from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/vite@4.4.5_@types+node@20.4.5_sass@1.64.1/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.4.5_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/vite-plugin-dts@3.3.1_@types+node@20.4.5_typescript@5.0.2_vite@4.4.5/node_modules/vite-plugin-dts/dist/index.mjs";
import Unocss from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/unocss@0.53.6_postcss@8.4.27_vite@4.4.5/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/unplugin-auto-import@0.16.6_@vueuse+core@10.2.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/unplugin-vue-components@0.25.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///F:/luoyi/my/vue3-admin-layout/node_modules/.pnpm/unplugin-vue-components@0.25.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "F:\\luoyi\\my\\vue3-admin-layout\\packages";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Unocss({
      configFile: "../unocss.config.ts"
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    dts({
      outDir: "dist"
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "AdminLayout",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-router"
        // 'element-plus',
        // '@vueuse/core',
        // '@ctrl/tinycolor',
        // 'screenfull',
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxsdW95aVxcXFxteVxcXFx2dWUzLWFkbWluLWxheW91dFxcXFxwYWNrYWdlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbHVveWlcXFxcbXlcXFxcdnVlMy1hZG1pbi1sYXlvdXRcXFxccGFja2FnZXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L2x1b3lpL215L3Z1ZTMtYWRtaW4tbGF5b3V0L3BhY2thZ2VzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBVbm9jc3Moe1xyXG4gICAgICBjb25maWdGaWxlOiAnLi4vdW5vY3NzLmNvbmZpZy50cydcclxuICAgIH0pLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXVxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxyXG4gICAgfSksXHJcbiAgICBkdHMoe1xyXG4gICAgICBvdXREaXI6ICdkaXN0J1xyXG4gICAgfSlcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAnQWRtaW5MYXlvdXQnLFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgICAgZm9ybWF0czogWydlcyddXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJ1xyXG4gICAgICAgIC8vICdlbGVtZW50LXBsdXMnLFxyXG4gICAgICAgIC8vICdAdnVldXNlL2NvcmUnLFxyXG4gICAgICAgIC8vICdAY3RybC90aW55Y29sb3InLFxyXG4gICAgICAgIC8vICdzY3JlZW5mdWxsJyxcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UyxTQUFTLG9CQUFvQjtBQUMzVSxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFQcEMsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLElBQy9CLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
