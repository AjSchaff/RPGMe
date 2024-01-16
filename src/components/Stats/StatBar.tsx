import { statBlock } from 'types';
import React, { FC } from 'react';

export interface Props {
  stats: statBlock[];
}

const StatBar: FC<Props> = ({ stats }) => {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          {stats.map((stat, index) => (
            <div key={`${index}`} className="rpgui-container rpgui-center framed">
              <h3 className="title">{stat.stat}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="col-span-2">2</div>
        <div className="rpgui-container framed-grey row-span-2 col-span-2">
          <label>Purple bar:</label>
          <div className="rpgui-progress"></div>
          <label>Red bar:</label>
          <div className="rpgui-progress red" data-value="0.4"></div>

          <label>Blue bar:</label>
          <div className="rpgui-progress blue" data-value="0.4"></div>

          <label>Green bar:</label>
          <div className="rpgui-progress green" data-value="0.4"></div>
        </div>
      </div>
    </>
  );
};

export default StatBar;
