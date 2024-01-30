'use client';

import { statBlock } from 'types';
import React, { FC } from 'react';
import { Grid, ThemeProvider, createTheme, useMediaQuery, useTheme } from '@mui/material';
import StatBars from './HeroAttributes/StatBars';
import HeroAttributes from './HeroAttributes/HeroAttributes';
import HeroHistoryTabsWrapper from './HeroHistory/HeroHistoryTabsWrapper';
export interface Props {
  stats: statBlock[];
}

const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: 'Press Start 2P',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          paddingTop: 24,
          '&.Mui-selected': {
            color: '#fff',
          },
        },
      },
    },
  },
});

const HeroOverview: FC<Props> = ({ stats }) => {
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid container={matches} spacing={1} item xs={12} md={3} lg={2}>
          <HeroAttributes stats={stats} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <div className="rpgui-container framed mb-2">
            <StatBars />
          </div>
          <div>
            <HeroHistoryTabsWrapper />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HeroOverview;
