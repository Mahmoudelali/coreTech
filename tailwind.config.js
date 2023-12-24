/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: '#d50e25',
				reddishBG: '#fcf5f5',
				lightgray: '#f8f8f7',
			},
			fontFamily: {
				robotoThin: ['Roboto Flex', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				blackops : 'Black Ops One'
			},
		},
	},
	plugins: [],
};
