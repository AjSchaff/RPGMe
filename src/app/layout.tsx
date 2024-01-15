import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import '@styles/globals.css';
import '@styles/rpgui.css';

const PS2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'The Hero of Ages: Andrew Schaffner',
  description: 'My personal character sheet',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={PS2P.className}>{children}</body>
    </html>
  );
}
