'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function HomeGoogleAd() {
  useEffect(() => {
    const pushAd = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    if (window.adsbygoogle) {
      pushAd();
    } else {
      window.addEventListener('load', pushAd);
    }

    return () => {
      window.removeEventListener('load', pushAd);
    };
  }, []);

  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2998473783210725"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2998473783210725"
        data-ad-slot="5467101329"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}
