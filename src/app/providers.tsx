"use client";

import { ThemeProvider } from "next-themes";
import PlausibleProvider from "next-plausible";

type ProvidersProps = {
  host?: string | null;
  children: React.ReactNode;
};

export function Providers({ host, children }: ProvidersProps) {
  const publicDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN?.replace("www.", "");
  const element = (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );

  return element;

  // return publicDomain && host && publicDomain === host.replace("www.", "") ? (
  //   <PlausibleProvider domain={publicDomain}>{element}</PlausibleProvider>
  // ) : (
  //   element
  // );
}
