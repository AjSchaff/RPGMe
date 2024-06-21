'use client';

import React, { FC } from 'react';

const StatBars: FC = () => {
  return (
    <div className="rpgui-container framed mb-2">
      <label>React</label>
      <div id="react" data-value="0.4" className="rpgui-progress" data-rpguitype="progress">
        <div className="rpgui-progress-track">
          <div className="rpgui-progress-fill" style={{ left: '0px', width: '85%' }}></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
        <div className="rpgui-progress-right-edge"></div>
      </div>
      <label>TypeScript</label>
      <div id="react" data-value="0.4" className="rpgui-progress red" data-rpguitype="progress">
        <div className="rpgui-progress-track">
          <div className="rpgui-progress-fill red" style={{ left: '0px', width: '80%' }}></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
        <div className="rpgui-progress-right-edge"></div>
      </div>
      <label>Tailwind</label>
      <div id="react" data-value="0.4" className="rpgui-progress blue" data-rpguitype="progress">
        <div className="rpgui-progress-track">
          <div className="rpgui-progress-fill blue" style={{ left: '0px', width: '75%' }}></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
        <div className="rpgui-progress-right-edge"></div>
      </div>
      <label>Leadership:</label>
      <div id="react" data-value="0.4" className="rpgui-progress green" data-rpguitype="progress">
        <div className="rpgui-progress-track">
          <div className="rpgui-progress-fill green" style={{ left: '0px', width: '90%' }}></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
        <div className="rpgui-progress-right-edge"></div>
      </div>
    </div>
  );
};

export default StatBars;
