import Header from '@components/Header';
import React, { FC } from 'react';
import Button from '@mui/material/Button';
import XIcon from '@mui/icons-material/X';

const HeroName: FC = () => {
  return (
    <>
      <div className="rpgui-container framed-golden flex justify-between mb-2">
        <div className="flex-col">
          <Header title="Andrew" />
          <p>The Hero of Ages</p>
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
