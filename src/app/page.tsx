import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="rpgui-content rpgui-container framed">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/styles/rpgui.js"></script>
      </Head>

      <div className="rpgui-container framed-golden">
        <i className="rpgui-icon sword"></i>
        <Header title="Hero Name:" />
        <p>Andrew Schaffner</p>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
