import Script from 'next/script';
import type { Metadata } from 'next';
import HeroOverview from '@components/HeroOverview';
import HeroName from '@components/HeroName/HeroName';
import { HeroStats } from '../constants';

export const metadata: Metadata = {
  title: 'The Hero of Ages: Andrew Schaffner',
  description: 'My personal character sheet',
  icons: '/favicon.ico',
};

export default function Home() {
  return (
    <>
      <Script src="/rpgui.js" strategy="afterInteractive" />

      <div className="rpgui-content rpgui-cursor-default">
        <div id="container">
          <div className="inner">
            <div className="rpgui-container framed">
              <HeroName />

              <HeroOverview stats={HeroStats} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
