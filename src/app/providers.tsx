'use client';

import { ThemeProvider } from 'next-themes';
import PlausibleProvider from 'next-plausible'

export function Providers({ children }: { children: React.ReactNode }) {
  const publicDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN?.replace('www.', '');
  const element = (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );

  return publicDomain ? <PlausibleProvider domain={publicDomain}>{element}</PlausibleProvider> : element;
}
