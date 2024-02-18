import { type Metadata } from 'next';
import { Inter, Teko } from 'next/font/google';
import localFont from 'next/font/local';
import clsx from 'clsx';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';
import path from 'path';
import { promises as fs } from 'fs';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const display = Teko({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-display',
});

// Use local version of Lexend so that we can use OpenType features
// const display = localFont({
//   src: '../fonts/fira-sans-800.woff2',
//   display: 'swap',
//   variable: '--font-display',
// });

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: 'Kaiseki - Never miss the cache again.',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
};

export async function getPackages() {
  const directoryPath = path.join(process.cwd(), 'src/app/docs/packages');
  return await fs.readdir(directoryPath);
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const packages = await getPackages();
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, display.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-paper dark:bg-neutral-900">
        <Providers>
          <Layout packages={packages}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
