import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import clsx from 'clsx';

import generateCustomMetadata from '../utils/metadata';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './global.css';
import SideMenu from '../components/sideMenu/SideMenu';

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
  return (
    <html lang="en">
      <body className={clsx(urbanist.className, 'flex justify-center bg-primary')}>
        <SideMenu />
        <Header />
        <main className="w-full max-w-[1200px] pt-[100px]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
