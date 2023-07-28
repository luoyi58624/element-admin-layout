## 安装依赖

```
npm i vue-router@4.2.4 element-admin-layout
```

## main.ts

```
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'element-admin-layout/dist/style.css'
createApp(App).use(router).mount('#app')
```

## 新建router.ts

```
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from './views/index.vue'
import Home from './views/home.vue'
import Test from './views/test.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'mdi:home'
    },
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试页面'
    },
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: routes
    }
  ]
})

export default router
```

## 新增views文件夹，并创建三个文件，index.vue、home.vue、test.vue

#### index.vue

```
<template>
  <Layout :init-routes="routes" />
</template>

<script setup lang="ts">
import { Layout } from 'element-admin-layout'
import { routes } from '../router'
</script>
```

#### home.vue

```
<template>
  <div>
    <h1>首页</h1>
    <button @click="themeData.toggleDark()">切换黑暗模式</button>
  </div>
</template>

<script setup lang="ts">
import { themeKey } from 'element-admin-layout'
import { inject } from 'vue'

const themeData = inject(themeKey)!
</script>
```

#### test.vue

```
<template>
  <div>
    <h1>测试页面</h1>
  </div>
</template>

<script setup lang="ts"></script>
```
