import localFont from 'next/font/local';

export const mapleFont = localFont({
  src: [
    {
      path: './fonts/Maplestory-Light.woff2',
      weight: '400',
    },
    {
      path: './fonts/Maplestory-Bold.woff2',
      weight: '700',
    },
  ],
});
