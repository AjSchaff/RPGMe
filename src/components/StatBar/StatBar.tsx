import React, { FC } from 'react';

export interface Props {
  title: string[];
}

const StatBar: FC<Props> = ({ title }) => {
  return (
    <>
      <div className="flex">
        {title.map((stat, index) => (
          <div key={`${index}`} className="rpgui-container framed">
            <h3 className="title">{stat}</h3>
            <p>3</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatBar;
