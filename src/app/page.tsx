import { Inter } from 'next/font/google'
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Index Page',
}

export default function Home() {
  return <h1 className={`text-3xl font-bold ${inter.className}`}>Hello World</h1>;
}
