import type { Metadata } from 'next';
import clsx from 'clsx';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { headers } from 'next/headers';
import { ToastContainer } from 'react-toastify';
import localFont from 'next/font/local';

import generateCustomMetadata from '../utils/metadata';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SideMenu from '../components/sideMenu/SideMenu';
import { MANAGE_PAGE_PATH } from '../constants/path.constant';
import { X_PATHNAME } from '../constants/header.constants';

import './global.css';
import 'react-toastify/dist/ReactToastify.css';

const maplestoryFont = localFont({
  src: [
    {
      path: '../fonts/maplestory_light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/maplestory_bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: 'Tech Blog',
    desc: '오픈소스로 운영되는 기술블로그 IMKDW DEV 입니다. 삽질하고 깨달은 내용에 대해서 기록합니다. 다양한 기술에 대한 내용을 다룹니다.',
    link: 'https://imkdw.dev',
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = headers();
  const pathname = headerList.get(X_PATHNAME) || '';

  const IS_MANAGE_PAGE = pathname.includes(MANAGE_PAGE_PATH);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={clsx(
          maplestoryFont.className,
          'flex justify-center',
          pathname.includes(MANAGE_PAGE_PATH) ? 'bg-[#f3f4f6]' : 'bg-primary',
        )}
      >
        <SideMenu />
        <div id="portal" />
        <Header />
        <main className={clsx('w-full pt-[100px]', !IS_MANAGE_PAGE && 'max-w-[1200px]')}>
          {children}
          {!pathname.includes(MANAGE_PAGE_PATH) && <Footer />}
          <ToastContainer position="top-center" autoClose={2000} closeOnClick theme="dark" />
        </main>
      </body>

      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-DXRR1KZDDN" />

      {/* 카카오 SDK */}
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="afterInteractive" />

      {/* Google Ads */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2998473783210725"
        crossOrigin="anonymous"
      />
    </html>
  );
}
