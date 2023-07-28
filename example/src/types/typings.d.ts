import 'vue-router'

import { LayoutRouteMeta } from 'vue3-admin-layout-types'

declare module 'vue-router' {
  interface RouteMeta extends LayoutRouteMeta {}
}
