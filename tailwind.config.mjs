/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {	
			colors: {
				primary: '#262626'
			},	
			container: {
			center: true,
			padding: {
			sm: '1rem',
			md: '0'
			},
		   },
		},

		fontfamily: {
			'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: [ function ({ addComponents }) {
		addComponents({
	   '.container': {
		 maxWidth: '90%',
		 '@screen sm': {
		maxWidth: '640px',
		 },
		 '@screen md': {
		maxWidth: '768px',
		 },
		 '@screen lg': {
		maxWidth: '1024px',
		 },
		 '@screen xl': {
		maxWidth: '1280px',
		 },
	   }
		})
	  },
	],
}