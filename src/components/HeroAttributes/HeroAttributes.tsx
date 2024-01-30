import { statBlock } from 'types';
import React, { FC } from 'react';
import { Grid } from '@mui/material';

export interface Props {
  stats: statBlock[];
}

const HeroAttributes: FC<Props> = ({ stats }) =>
  stats.map((stat, index) => (
    <Grid key={`${index}`} item xs={6} md={12}>
      <div className="rpgui-container rpgui-center framed flex mb-1">
        <div>
          <i className={`rpgui-icon ${stat.icon}`}></i>
        </div>
        <div>
          <h3 className="title">{stat.stat}</h3>
          <p>{stat.value}</p>
        </div>
      </div>
    </Grid>
  ));

export default HeroAttributes;
