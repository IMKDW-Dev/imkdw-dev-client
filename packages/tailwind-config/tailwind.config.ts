import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      maxWidth: {
        wrapper: '1440px',
      },
      backgroundColor: {
        own: '#FF0000',
      },
    },
  },
  plugins: [],
};
export default config;
