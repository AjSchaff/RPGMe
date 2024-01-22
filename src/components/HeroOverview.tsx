import { statBlock } from 'types';
import React, { FC } from 'react';
import StatBars from './HeroAttributes/StatBars';
import HeroAttributes from './HeroAttributes/HeroAttributes';
import HeroHistory from './HeroAttributes/HeroHistory';

export interface Props {
  stats: statBlock[];
}

const HeroOverview: FC<Props> = ({ stats }) => {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <HeroAttributes stats={stats} />
        </div>
        <div className="rpgui-container framed-grey col-span-2">
          <StatBars />
        </div>
        <div className="rpgui-container framed-golden-2 row-span-2 col-span-2">
          <HeroHistory />
        </div>
      </div>
    </>
  );
};

export default HeroOverview;
