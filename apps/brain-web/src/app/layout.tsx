import type { Metadata } from 'next';
import { routing, SupportLocale } from '@imkdw-dev-client/i18n';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';

import './globals.css';

import { NextIntlClientProvider } from 'next-intl';

const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/Pretendard-SemiBold.woff2',
      weight: '600',
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
        <main>{children}</main>
      </body>
    </html>
  );
}
