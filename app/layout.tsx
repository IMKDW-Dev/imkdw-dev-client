import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import clsx from 'clsx';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { headers } from 'next/headers';

import generateCustomMetadata from '../utils/metadata';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SideMenu from '../components/sideMenu/SideMenu';
import { MANAGE_PAGE_PATH } from '../constants/path.constant';
import './global.css';

const urbanist = Urbanist({ subsets: ['latin'] });

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
  const pathname = headerList.get('x-pathname') || '';

  return (
    <html lang="en">
      <body
        className={clsx(
          urbanist.className,
          'flex justify-center',
          pathname.includes(MANAGE_PAGE_PATH) ? 'bg-[#f3f4f6]' : 'bg-primary',
        )}
      >
        <SideMenu />
        <div id="portal" />
        <Header />
        <main className={clsx('w-full pt-[100px]', !pathname.includes(MANAGE_PAGE_PATH) && 'max-w-[1200px]')}>
          {children}
          {!pathname.includes(MANAGE_PAGE_PATH) && <Footer />}
        </main>
      </body>
      <GoogleAnalytics gaId="G-DXRR1KZDDN" />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="afterInteractive" />
    </html>
  );
}
