import Header from '@components/Header';
import React, { FC } from 'react';
import Button from '@mui/material/Button';
import XIcon from '@mui/icons-material/X';
import { Avatar } from '@mui/material';

const HeroName: FC = () => {
  return (
    <>
      <div className="rpgui-container framed-golden flex justify-between mb-2">
        <div className="flex">
          <Avatar
            sx={{ height: '70px', width: '70px' }}
            className="my-auto"
            alt="Remy Sharp"
            src="/img/Smol.jpg"
          />
          <div className="flex-col ml-2 my-auto">
            <Header title="Dicey" />
            <p>The Hero of Ages</p>
          </div>
        </div>

        <div className="flex-row my-auto">
          <Button variant="text" href="https://twitter.com/_Dicey__">
            <XIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroName;
