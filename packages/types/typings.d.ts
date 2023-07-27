import 'vue-router';

declare module 'vue-router' {
	interface RouteMeta {
		auth?: boolean;
		title?: string;
		icon?: string;
	}
}
