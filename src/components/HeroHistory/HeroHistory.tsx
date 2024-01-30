import React, { FC } from 'react';
import Image from 'next/image';
import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import { workHistoryEntry } from 'types';

export interface HistoryProps {
  entries: workHistoryEntry[];
}

const HeroHistory: FC<HistoryProps> = ({ entries }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      {entries.map((entry) => (
        <Grid key={entry.title} container>
          <Grid container item xs sm={3} md={2} justifyContent={matches ? 'center' : 'initial'}>
            <div className="rpgui-container framed mb-3 mr-3">
              <Image src={entry.image} alt={entry.title} loading="lazy" width={75} height={75} />
            </div>
          </Grid>
          <Grid item xs={12} sm={9} md={10} className="my-auto">
            <h3 className={matches ? 'text-center' : 'text-left'}>{entry.title}</h3>
            <h4 className={matches ? 'text-center' : 'text-left'}>{entry.timePeriod}</h4>
          </Grid>
          <Grid item xs={12} className="mb-6 rpgui-container framed">
            <ul className="rpgui-container framed-grey">
              {entry.accomplishments.map((item, index) => (
                <li key={index} className="pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
export default HeroHistory;
