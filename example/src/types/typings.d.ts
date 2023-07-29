import 'vue-router'

import { LayoutRouteMeta } from 'element-admin-layout-types'

declare module 'vue-router' {
  interface RouteMeta extends LayoutRouteMeta {}
}
