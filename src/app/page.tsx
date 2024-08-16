import { Inter } from 'next/font/google'
import { Metadata } from 'next';

import defaultMetadata from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Index Page',
  ...defaultMetadata,
}

export default function Home() {
  return <h1 className={`text-3xl font-bold ${inter.className}`}>Hello World</h1>;
}
