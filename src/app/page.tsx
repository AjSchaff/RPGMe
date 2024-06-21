import HeroOverview from '@components/HeroOverview';
import HeroName from '@components/HeroName/HeroName';
import { HeroStats } from '../constants';

export default function Home() {
  return (
    <>
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
