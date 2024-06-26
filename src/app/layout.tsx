import type { Metadata } from 'next';
import Script from 'next/script';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { AppProvider } from './AppContext';
import { ThemeProvider } from '@mui/material/styles';

import { Press_Start_2P } from 'next/font/google';
import '@styles/globals.css';

import { theme } from '../theme';

const PS2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'The Hero of Ages: Dicey',
  description: 'My personal character sheet',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={PS2P.className}>
        <AppProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </AppProvider>
      </body>

      {/* <Script src="/rpgui.js" strategy="lazyOnload" /> */}
    </html>
  );
}
