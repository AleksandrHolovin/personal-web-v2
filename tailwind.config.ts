import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/containers/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			body: 'var(--body-font)',
			logo: 'var(--logo-font)',
			nav: 'var(--nav-font)',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				appGreen: '#00897B',
				appBrown: '#A1887F',
				appBlack: '#212121',
				appGrey: ': #E0E0E0',
				cyan: '#59f6c9',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
