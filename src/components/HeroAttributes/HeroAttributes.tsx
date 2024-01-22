import { statBlock } from 'types';
import React, { FC } from 'react';

export interface Props {
  stats: statBlock[];
}

const HeroAttributes: FC<Props> = ({ stats }) =>
  stats.map((stat, index) => (
    <div key={`${index}`} className="rpgui-container rpgui-center framed flex">
      <div>
        <i className={`rpgui-icon ${stat.icon}`}></i>
      </div>
      <div>
        <h3 className="title">{stat.stat}</h3>
        <p>{stat.value}</p>
      </div>
    </div>
  ));

export default HeroAttributes;
