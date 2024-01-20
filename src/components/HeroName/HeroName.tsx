import Header from '@components/Header';
import React, { FC } from 'react';

const HeroName: FC = () => {
  return (
    <>
      <div className="rpgui-container framed-golden flex mb-2">
        
        <div className="flex-col">
          <Header title="Andrew" />
          <p>The Hero of Ages</p>
        </div>
      </div>
    </>
  );
};

export default HeroName;
