import { WEBSITE_URL } from '@/env';
import { Metadata } from 'next';
import { defaultConfig } from 'next/dist/server/config-shared';

const defaultData = {
  title: 'Blank App',
  description: 'This is a blank app',
  url: WEBSITE_URL,
  images: [
    {
      url: 'og.png',
      alt: 'Og Image Alt',
      type: 'image/png',
    }
  ],
  creatorName: 'Creator Name',
};

const metadata: Metadata = {
  title: defaultData.title,
  description: defaultData.description,
  abstract: 'abstract',
  creator: defaultConfig.creatorName,
  keywords: ['keyword'],
  twitter: {
    creator: '@creator',
    description: defaultData.description,
    images: defaultData.images,
    title: defaultData.title,
  },
  openGraph: {
    description: defaultData.description,
    images: defaultData.images,
    title: defaultData.title,
    url: defaultData.url,
  }
};

export default metadata;
