import 'vue-router'
import { LayoutRouteMeta } from '../types'

declare module 'vue-router' {
  interface RouteMeta extends LayoutRouteMeta {}
}
