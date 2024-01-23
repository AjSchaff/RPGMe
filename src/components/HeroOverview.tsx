'use client';
import { statBlock } from 'types';
import React, { FC } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import StatBars from './HeroAttributes/StatBars';
import HeroAttributes from './HeroAttributes/HeroAttributes';
import HeroHistory from './HeroHistory/HeroHistory';
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
          selected: {
            color: 'pink',
          },
        },
      },
    },
  },
});

const HeroOverview: FC<Props> = ({ stats }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <HeroAttributes stats={stats} />
        </div>
        <div className="rpgui-container framed col-span-2">
          <StatBars />
        </div>
        <div className="rpgui-container framed-grey row-span-2 col-span-2">
          <HeroHistoryTabsWrapper />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HeroOverview;
