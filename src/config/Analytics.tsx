import Script from 'next/script';

import { GOOGLE_ANALYTICS_KEY } from '@/env';

export const Analytics = () => {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`} />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_KEY}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
);
}

export default Analytics;
