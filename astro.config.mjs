// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://rooseveltjsj.github.io',
	base: '/veltber/',
	integrations: [tailwind()],
	build: {
		assets: '_astro'
	},
	vite: {
		build: {
			cssCodeSplit: false
		}
	}
});
