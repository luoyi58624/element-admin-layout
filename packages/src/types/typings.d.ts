import 'vue-router'
import { LayoutRouteMeta } from './index'

declare module 'vue-router' {
	interface RouteMeta extends LayoutRouteMeta {}
}
