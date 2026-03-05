/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Tema Tecnologia Premium
				primary: {
					DEFAULT: '#0ea5e9', // sky-500 - Tecnologia
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
				accent: {
					DEFAULT: '#10b981', // emerald-500 - Eficiência e Economia
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
					950: '#022c22',
				},
				dark: {
					DEFAULT: '#020617', // slate-950 - Fundo principal
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				},
			},
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
				],
			},
			backgroundImage: {
				'gradient-premium': 'linear-gradient(135deg, #020617 0%, #0c4a6e 100%)',
				'gradient-accent': 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
			},
			boxShadow: {
				'premium': '0 4px 24px rgba(14, 165, 233, 0.2)',
				'premium-lg': '0 8px 40px rgba(14, 165, 233, 0.3)',
				'accent': '0 4px 24px rgba(16, 185, 129, 0.2)',
			},
		},
	},
	plugins: [],
}
