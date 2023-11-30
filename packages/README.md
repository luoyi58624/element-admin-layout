# 一个基于 element-plus + vue3 的后台管理 Layout 组件

## 快速开始

### 1.安装依赖

```
// 安装依赖
npm i vue vue-router@4 vue-i18n@9 element-plus element-admin-layout
```

### 2.修改main.ts

```
import { createApp } from 'vue'
import i18n from './i18n'
import router from './router'
import App from './App.vue'

import ElementAdminLayout, {
	LayoutSetting,
	SwitchDark,
	SwitchFullScreen,
	SwitchLanguage,
	SwitchSize,
	SwitchTheme
} from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'

createApp(App)
	.use(i18n)
	.use(router)
	.use(ElementAdminLayout, {
		logo: 'vite.svg',
		navbarComponents: [SwitchFullScreen, SwitchDark, SwitchSize, SwitchLanguage, SwitchTheme, LayoutSetting]
	})
	.mount('#app')
```

### 3.修改App.vue

```
<script setup lang="ts">
import { LayoutProvide } from 'element-admin-layout'
</script>

<template>
	<layout-provide>
		<RouterView />
	</layout-provide>
</template>

<style></style>

```

### 4.src目录下新建router.ts

```
import { createRouter, createWebHashHistory } from 'vue-router'
import { createLayoutRouter } from 'element-admin-layout'

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

### 5.src目录下新建i18n.ts

```
import { createI18n } from 'vue-i18n'
import { layoutLanguage_zhCn, layoutLanguage_en } from 'element-admin-layout'

const messages = {
	'zh-cn': {
		...layoutLanguage_zhCn,
		message: {
			hello: '你好，世界'
		}
	},
	en: {
		...layoutLanguage_en,
		message: {
			hello: 'hello world'
		}
	}
}

const i18n = createI18n({
	legacy: false,
	allowComposition: true,
	locale: 'zh-cn',
	fallbackLocale: 'zh-cn',
	messages: messages
})

export default i18n

```

### 6.新增views文件夹，并创建home.vue

```
<script setup lang="ts"></script>

<template>
	<div style="padding: 8px">
		<h1>首页</h1>
		<p>{{ $t('message.hello') }}</p>
	</div>
</template>

<style></style>

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
