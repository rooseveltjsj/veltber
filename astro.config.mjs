// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://seu-usuario.github.io',
	base: import.meta.env.PROD ? '/AutomacaoResidencial' : '/',
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
