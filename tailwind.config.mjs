/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
		require('@tailwindcss/aspect-ratio'),

	],
	theme: {
		extend: {
		  fontFamily: {
			'sans': ['"Poppins"', "sans-serif"],
		  }
		}
	  },
	  daisyui: {
		themes: [
		  'business',
		  'winter',
		]
	  }
}
