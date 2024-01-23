'use client';

import React, { FC } from 'react';

const StatBars: FC = () => {
  return (
    <div>
      <label>React</label>
      <div className="rpgui-progress" data-value="0.85"></div>
      <label>TypeScript</label>
      <div className="rpgui-progress red" data-value="0.8"></div>
      <label>Tailwind</label>
      <div className="rpgui-progress blue" data-value="0.75"></div>
      <label>Leadership:</label>
      <div className="rpgui-progress green" data-value="0.9"></div>
    </div>
  );
}

export default StatBars;
