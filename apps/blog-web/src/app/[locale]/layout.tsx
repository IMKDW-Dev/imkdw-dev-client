import type { Metadata } from 'next';
import { routing, SupportLocale } from '@imkdw-dev-client/i18n';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import { Header, Wrapper } from '@imkdw-dev-client/ui';

import './globals.css';

import { NextIntlClientProvider } from 'next-intl';

const pretendard = localFont({
  src: [
    {
      path: '../../fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../fonts/Pretendard-Bold.woff2',
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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as SupportLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={pretendard.className}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Wrapper>
            <Header title="BLOG" />
            <main>{children}</main>
          </Wrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
