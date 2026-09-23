import type { ReactNode } from 'react';
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
import { App } from './app/app';
import { THEME_INITIALIZATION_SCRIPT } from './app/util/theme-preference';
import { AppProvider } from './setup/app-provider';

import './index.css';

export function loader(): { readonly initialYear: number } {
  return { initialYear: new Date().getFullYear() };
}

export function shouldRevalidate(): boolean {
  return false;
}

export default function Root({ loaderData }: Route.ComponentProps): ReactNode {
  return (
    <AppProvider initialYear={loaderData.initialYear}>
      <App />
    </AppProvider>
  );
}

export function Layout({ children }: { readonly children: ReactNode }): ReactNode {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0' />
        <title>Portfolio</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' />
        <script dangerouslySetInnerHTML={{ __html: THEME_INITIALIZATION_SCRIPT }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
