import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.scss';
import { SEO } from '@/config/SEO';
import Analytics from '@config/Analytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <SEO />
      </Head>

      <Analytics />

      <Component {...pageProps} />
    </>
  );
}
