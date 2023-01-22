import type { AppProps } from 'next/app';

import '@styles/globals.scss';
import Analytics from '@config/Analytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
