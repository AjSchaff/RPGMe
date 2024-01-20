import { statBlock } from 'types';
import React, { FC } from 'react';

export interface Props {
  stats: statBlock[];
}

const StatBar: FC<Props> = ({ stats }) => {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          {stats.map((stat, index) => (
            <div key={`${index}`} className="rpgui-container rpgui-center framed flex">
              <div>
                <i className={`rpgui-icon ${stat.icon}`}></i>
              </div>
              <div>
                <h3 className="title">{stat.stat}</h3>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rpgui-container framed-golden-2 col-span-2">
          <div className="flex">
            <div>
              <h3>Front End Engineer at Realm [Arbitrum]</h3>
              <h4>February 2023 — July 2023</h4>
              <div className="overflow-y-scroll max-h-56">
                <ul className="list-disc">
                  <li>
                    Spearheaded the implementation of the Realms Loot-box system, resulting in a
                    more immersive and rewarding gameplay experience.
                  </li>
                  <li>
                    Contributed to the development of staking systems for in-game assets, enabling
                    players to earn rewards for their in-game actions.
                  </li>
                  <li>
                    Implemented TreasureTags, a unique feature that allows users to showcase their
                    Web3 presence and see who they are playing with.
                  </li>
                  <li>
                    Upgraded the Prime Convergence game loop by incorporating a live feed of
                    contributions using Subgraph and GraphQL, resulting in increased engagement and
                    improved player experience.
                  </li>
                </ul>
              </div>
            </div>
            <div className='max-h-4'>
              <h3>Front End Engineer, [Polygon]</h3>
              <h4>March 2022 — July 2022</h4>
              <div className="overflow-y-scroll max-h-56">
                <ul className="list-disc">
                  <li>
                    Revamped the Homepage for etherorcs.com, resulting in a more engaging and
                    user-friendly interface.
                  </li>
                  <li>
                    Developed the etherorcs.com/town experience, enabling users who own an Orc or
                    Ally NFT to visit multiple locations within the game.
                  </li>
                  <li>
                    Designed and implemented the Tour experience, providing users who do not own an
                    Orc with a captivating introduction to the game$apos;s world.
                  </li>
                  <li>
                    Contributed to the development of the Dungeon Crawl game, playing a key role in
                    designing and refining the combat system, loot system, and leader boards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rpgui-container framed-grey row-span-2 col-span-2">
          <label>React</label>
          <div className="rpgui-progress" data-value="0.8"></div>
          <label>TypeScript</label>
          <div className="rpgui-progress red" data-value="0.7"></div>

          <label>Tailwind</label>
          <div className="rpgui-progress blue" data-value="0.5"></div>

          <label>Green bar:</label>
          <div className="rpgui-progress green" data-value="0.4"></div>
        </div>
      </div>
    </>
  );
};

export default StatBar;
