import Head from 'next/head';
import Script from 'next/script';
import HeroOverview from '@components/HeroOverview';
import HeroName from '@components/HeroName/HeroName';
import { HeroStats } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dicey: The Hero Of Ages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/rpgui.js" strategy="beforeInteractive" />

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
