## 一个基于 element-plus + vue3 的后台管理 Layout 组件

## 快速开始

### 1.安装依赖

```
npm i element-admin-layout

// 记得安装vue-router
npm i vue-router@4
```

### 2.修改main.ts

```
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import AdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'
createApp(App).use(router).use(AdminLayout).mount('#app')
```

### 3.修改App.vue

```
<template>
  <RouterView />
</template>
```

### 4.src目录下新建router.ts

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

### 5.新增views文件夹，并创建home.vue

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
