/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"LibreFranklin"', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};
