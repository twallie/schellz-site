/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"LibreFranklin"', ...defaultTheme.fontFamily.sans]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			red: '#ee2f24',
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			black: '#101010',
			slate: colors.slate
		},
		extend: {}
	},
	plugins: []
};
