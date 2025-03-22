import type { Metadata } from 'next';
import { mapleFont } from '@imkdw-dev-client/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'IMKDW Dev | MEMO',
  description: 'IMKDW Dev | MEMO',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={mapleFont.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
