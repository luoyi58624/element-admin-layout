import 'vue-router'
import { LayoutRouteMeta } from '..'

declare module 'vue-router' {
  interface RouteMeta extends LayoutRouteMeta {}
}
