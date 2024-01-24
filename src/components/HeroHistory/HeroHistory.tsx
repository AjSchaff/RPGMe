import Image from 'next/image';
import React, { FC } from 'react';
import { workHistoryEntry } from 'types';

export interface HistoryProps {
  entries: workHistoryEntry[];
}

const HeroHistory: FC<HistoryProps> = ({ entries }) => {
  return (
    <div className="flex-col overflow-y-scroll">
      {entries.map((entry) => (
        <div key={entry.title}>
          <div className="flex flex-row mb-2">
            <div className="rpgui-container framed">
              <Image src={entry.image} alt={entry.title} loading="lazy" width={100} height={100} />
            </div>
            <div className="my-auto">
              <h3 className="text-left">{entry.title}</h3>
              <h4>{entry.timePeriod}</h4>
            </div>
          </div>
          <div className="rpgui-container framed mb-6">
            <ul className="rpgui-container framed-grey">
              {entry.accomplishments.map((item, index) => (
                <li key={index} className="pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HeroHistory;
