import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import { Header, LayoutWrapper } from '@imkdw-dev-client/ui';

const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
});

export const metadata: Metadata = {
  title: 'IMKDW Dev | BRAIN',
  description: 'IMKDW Dev | BRAIN',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <LayoutWrapper>
          <Header title="BRAIN" />
          <main>{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
