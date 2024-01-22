import React, { FC } from 'react';

const StatBars: FC = () => {
  return (
    <>
      <label>React</label>
      <div className="rpgui-progress" data-value="0.8"></div>
      <label>TypeScript</label>
      <div className="rpgui-progress red" data-value="0.7"></div>

      <label>Tailwind</label>
      <div className="rpgui-progress blue" data-value="0.5"></div>

      <label>Green bar:</label>
      <div className="rpgui-progress green" data-value="0.4"></div>
    </>
  );
};

export default StatBars;
