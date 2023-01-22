import { NextSeo } from 'next-seo';
import { OpenGraphMedia, Twitter } from 'next-seo/lib/types';

import { WEBSITE_URL } from '@/env';

interface SEOConfig {
  title: string;
  description: string;
  url: string;
  ogImage: OpenGraphMedia;
  twitter?: Twitter;
}

export const config: SEOConfig = {
  title: 'Blank App',
  description: 'This is a blank app',
  url: WEBSITE_URL,
  ogImage: {
    url: '',
    alt: 'Og Image Alt',
    type: 'image/png',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export const SEO = () => {
  return (
    <NextSeo
      title={config.title}
      description={config.description}
      openGraph={{
        url: config.url,
        title: config.title,
        description: config.description,
        images: [config.ogImage]
      }}
      twitter={config.twitter}
    />
  )
}
