import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import '@styles/rpgui.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Hero of Ages: Andrew Schaffner',
  description: 'My personal character sheet',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
