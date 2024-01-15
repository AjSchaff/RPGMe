import Header from '@components/Header';
import React, { FC } from 'react';

const HeroName: FC = () => {
  return (
    <>
      <div className="rpgui-container framed-golden flex">
        <i className="rpgui-icon sword"></i>
        <div className="flex-col">
          <Header title="Andrew" />
          <p>The Hero of Ages</p>
        </div>
      </div>
    </>
  );
};

export default HeroName;
