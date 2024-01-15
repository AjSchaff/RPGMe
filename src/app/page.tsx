import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import StatBar from '@components/StatBar/StatBar';
import HeroName from '@components/HeroName/HeroName';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/styles/rpgui.js"></script>
      </Head>

      <div className="rpgui-content rpgui-cursor-default">
        <div id="container">
          <div className="inner">
            <div className="rpgui-container framed">
              <HeroName />

              <StatBar title={['STR']} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
