import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import generateCustomMetadata from '../utils/metadata';
import clsx from 'clsx';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './global.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: 'Tech Blog',
    description:
      '오픈소스로 운영되는 기술블로그 IMKDW DEV 입니다. 삽질하고 깨달은 내용에 대해서 기록합니다. 다양한 기술에 대한 내용을 다룹니다.',
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
      <body className={clsx(urbanist.className, 'bg-primary')}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
