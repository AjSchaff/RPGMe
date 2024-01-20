import Head from 'next/head';
import Script from 'next/script';
import Header from '@components/Header';
import Footer from '@components/Footer';
import StatBar from '@components/Stats/StatBar';
import HeroName from '@components/HeroName/HeroName';
import { HeroStats } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/rpgui.js" strategy="beforeInteractive" />

      <div className="rpgui-content rpgui-cursor-default">
        <div id="container">
          <div className="inner">
            <div className="rpgui-container framed grid">
              <HeroName />

              <StatBar stats={HeroStats} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
