import React, { FC } from 'react';
import Image from 'next/image';
import { Grid, Box } from '@mui/material';
import { workHistoryEntry } from 'types';

export interface HistoryProps {
  entries: workHistoryEntry[];
}

const HeroHistory: FC<HistoryProps> = ({ entries }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {entries.map((entry) => (
        <Grid key={entry.title} container>
          <Grid item xs={12} sm={3} md={2}>
            <div className="rpgui-container framed mb-3 mr-3">
              <Image
                src={entry.image}
                alt={entry.title}
                loading="lazy"
                width={'200'}
                height={100}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={9} md={10} className="my-auto">
            <h3 className="text-left">{entry.title}</h3>
            <h4>{entry.timePeriod}</h4>
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
