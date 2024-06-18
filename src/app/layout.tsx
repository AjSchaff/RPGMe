'use client';

import { Press_Start_2P } from 'next/font/google';
import '@styles/globals.css';
import { AppProvider } from './AppContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PS2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: 'Press Start 2P',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fff',
          },
        },
      },
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={PS2P.className}>
        <AppProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
