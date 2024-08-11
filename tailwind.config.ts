import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#FFF4F5',
        danger: '#F1556C',
      },
      borderColor: {
        box: '#FEEAEC',
      },
      colors: {
        accent: '#FF6481',
      },
      outlineColor: {
        accent: '#FF6481',
      },
    },
    screens: {
      mobile: { max: '639px' },
    },
  },
  plugins: [],
};
export default config;
