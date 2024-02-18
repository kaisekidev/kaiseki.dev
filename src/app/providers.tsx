'use client';
import { GetServerSideProps } from 'next';

import { ThemeProvider } from 'next-themes';
import PlausibleProvider from 'next-plausible';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      host: context.req.headers.host,
    },
  }
}

export function Providers({ host, children }: { host: string; children: React.ReactNode }) {
  const publicDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN?.replace('www.', '');

  const element = (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );

  console.log(host, publicDomain, publicDomain ? host.includes(publicDomain) : null);

  if (!host || !publicDomain || !host.includes(publicDomain)) {
    return element;
  }

  return <PlausibleProvider domain={publicDomain}>{element}</PlausibleProvider>;
}
