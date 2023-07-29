## 安装依赖

```
npm i vue-router@4.2.4 element-admin-layout
```

## main.ts

```
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import AdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'
createApp(App).use(router).use(AdminLayout).mount('#app')
```

## 修改App.vue

```
<template>
  <RouterView />
</template>
```

## src目录下新建router.ts

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

## 新增views文件夹，并创建home.vue

```
<template>
  <div>
    <h1>首页</h1>
  </div>
</template>
```
