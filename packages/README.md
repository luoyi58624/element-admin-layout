## 一个基于 element-plus + vue3 的后台管理 Layout 组件

## 快速开始

### 1.安装依赖

```
npm i element-admin-layout

// 安装vue-router和element-plus
npm i vue-router@4 element-plus

// 安装按需加载插件unplugin-auto-import、unplugin-vue-components
npm i -D unplugin-auto-import unplugin-vue-components
```

### 2.修改vite.config.ts配置，添加按需引入element-plus
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
})
```
### 3.修改main.ts

```
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import AdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'
createApp(App).use(router).use(AdminLayout).mount('#app')
```

### 4.修改App.vue

```
<template>
  <RouterView />
</template>
```

### 5.src目录下新建router.ts

```
import { createLayoutRouter } from 'element-admin-layout'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    createLayoutRouter([
      {
        path: '',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'mdi:home'
        },
        component: () => import('./views/home.vue')
      }
    ])
  ]
})

export default router
```

### 6.新增views文件夹，并创建home.vue

```
<template>
  <div>
    <h1>首页</h1>
  </div>
</template>
```

## 自定义配置

### 1.全局配置

```
createApp(App).use(router).use(AdminLayout, {
  title: '管理系统测试', // 自定义标题
  logo: '/image/logo.png', // 引用public目录下的图片
}).mount('#app')
```

### 2.声明路由meta类型

> 创建typings.d.ts

```
import 'vue-router'

import { LayoutRouteMeta } from 'element-admin-layout'

declare module 'vue-router' {
  // 继承LayoutRouteMeta
  interface RouteMeta extends LayoutRouteMeta {
    // 自定义类型
    auth: boolean
  }
}
```
