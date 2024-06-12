import Script from 'next/script';
import HeroOverview from '@components/HeroOverview';
import HeroName from '@components/HeroName/HeroName';
import { HeroStats } from '../constants';

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
