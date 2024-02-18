'use client';

import { ThemeProvider } from 'next-themes';
import PlausibleProvider from 'next-plausible'

export function Providers({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === 'production';
  const element = (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
  return isProduction ? <PlausibleProvider domain="kaiseki.dev">{element}</PlausibleProvider> : element;
}
