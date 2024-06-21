'use client';

import { statBlock } from 'types';
import React, { FC } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import StatBars from './HeroAttributes/StatBars';
import HeroAttributes from './HeroAttributes/HeroAttributes';
import HeroHistoryTabsWrapper from './HeroHistory/HeroHistoryTabsWrapper';
export interface Props {
  stats: statBlock[];
}

const HeroOverview: FC<Props> = ({ stats }) => {
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Grid container spacing={2}>
      <Grid container={matches} spacing={matches ? 1 : undefined} item xs={12} md={3} lg={2}>
        <HeroAttributes stats={stats} />
      </Grid>
      <Grid item xs={12} md={9} lg={10}>
        <StatBars />

        <div>
          <HeroHistoryTabsWrapper />
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroOverview;
