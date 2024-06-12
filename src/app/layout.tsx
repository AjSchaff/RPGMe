import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
// import '@styles/rpgui.css';
import '@styles/globals.css';
import '@styles/rpgui.css';
import { AppProvider } from './AppContext';


const PS2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'The Hero of Ages: Andrew Schaffner',
  description: 'My personal character sheet',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={PS2P.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
