import { statBlock, workHistoryEntry } from './types';

export const HeroStats: statBlock[] = [
  {
    stat: 'STR',
    value: 8,
    icon: 'sword',
  },
  {
    stat: 'DEX',
    value: 7,
    icon: 'potion-red',
  },
  { stat: 'CON', value: 6, icon: 'shield' },
  { stat: 'INT', value: 7, icon: 'potion-blue' },
  { stat: 'WIS', value: 9, icon: 'potion-green' },
  { stat: 'CHAR', value: 8, icon: 'exclamation' },
];

export const HeroHistoryWeb3: workHistoryEntry[] = [
  {
    title: 'Realm - Frontend Engineer, Treasure[Arbitrum]',
    timePeriod: 'February 2023 — Present',
    image: '/img/realm.png',
    accomplishments: [
      'Redesigned Realm Collectible Production loop so that users can now produce assets for all of their collectibles in 1 transaction.',
      'Spearheaded the implementation of the Realms Loot-box system, resulting in a more immersive and rewarding game-play experience.',
      'Contributed to the development of staking systems for in-game assets, enabling players to earn rewards for their in-game actions.',
      'Implemented TreasureTags, a unique feature that allows users to showcase their Web3 presence and see who they are playing with.',
    ],
    techUsed: ['TypeScript', 'React', 'Subgraph', 'GraphQL', 'Web3.js'],
  },
  {
    title: 'EtherOrcs - Frontend Engineer, [Polygon]',
    timePeriod: 'March 2022 — July 2022',
    image: '/img/orc.png',
    accomplishments: [
      'Revamped the Homepage for etherorcs.com, resulting in a more engaging and user-friendly interface.',
      'Developed the etherorcs.com town experience, enabling users who own an Orc or Ally NFT to visit multiple locations within the game.',
      "Designed and implemented the Tour experience, providing users who do not own an Orc with a captivating introduction to the game's world.",
      'Contributed to the development of the Dungeon Crawl game, playing a key role in designing and refining the combat system, loot system, and leader boards.',
    ],
    techUsed: ['React'],
  },
];

export const HeroHistoryCareer: workHistoryEntry[] = [
  {
    title: 'Principal Engineer at Ally Bank',
    timePeriod: 'May 2021 — Present',
    image: '/img/ally.png',
    accomplishments: [
      'Developed the authenticated user experience for Transfers & Wires, Debit-Card, Buckets, External Account Verification, and Zelle.',
      'Migrated Legacy Ember code to React/TypeScript using the latest technology standards, resulting in improved performance and maintainability.',
      'Maintained above 95% test coverage for all unit tests.',
      'Conducted interviews and facilitated on-boarding for new developers to our team, ensuring a seamless integration into the workflow.',
      'Ensured the security and privacy of Proprietary Information in the authenticated space, demonstrating a commitment to maintaining the highest standards of data protection.',
    ],
    techUsed: ['TypeScript', 'React', 'React testing library'],
  },
  {
    title: 'V.P., Software Engineer III at Bank of America',
    timePeriod: 'January 2020 — May 2021',
    image: '/img/bofa.png',
    accomplishments: [
      'Successfully migrated legacy PCM (Product Content Manager) code to a modern React-based interface, empowering business partners to easily add and edit content and deploy directly to LLE and PROD.',
      'Played a key role in developing a CMS for media and document storage, built using React to improve ease of use and accessibility for all users.',
      'Updated legacy code to the latest Frontend standards, ensuring compliance with ADA 2.1 WCAG standards.',
      'Developed a persistent Chat Store feature to retain chat history across pages, improving the overall user experience.',
      'Led interviewing and onboarding efforts of new hires by organizing knowledge transfers and serving as a mentor.',
      'Architected user journey charts to document user interactions and improve understanding of software delivery.',
    ],
    techUsed: ['React'],
  },
  {
    title: 'V.P., FESA(Front End Standards & Architecture) Team Lead at Bank of America',
    timePeriod: 'November 2018 — January 2020',
    image: '/img/bofa.png',
    accomplishments: [
      "Managed and maintained Bank of America's internal Component Library.",
      'Provided best in class support to all front-end teams, ensuring use of global components was seamless and met their teams specific needs.',
      'Provided regular reports on performance and coding quality standards to senior leadership through a weekly forum.',
      'Enforced performance optimization and code quality standards across Front End teams, ensuring consistency and efficiency.',
      'Provided expert guidance and consultation to developers, UX designers, and business partners on global UI concerns.',
      'Monitored sales application performance metrics and worked with the SEO team to develop AMP pages that increased performance on high traffic pages.',
      "Unified Bank of America's React Component Library documentation site, creating a single point of entry for new hires, developers, and designers.",
      'Assisted in the design and development of an ESLint auditing tool to improve code quality.',
    ],
    techUsed: ['JavaScript', 'Handlebars', 'SCSS'],
  },
  {
    title: 'V.P., UI Developer, SEO Technology Lead at Bank of America',
    timePeriod: 'February 2018 — November 2018',
    image: '/img/bofa.png',
    accomplishments: [
      'Developed best-in-class AMP Pages for high-traffic and high-impact pages to provide customers with the best possible user experience.',
      'Created the first paid-search AMP experience for the Credit Cards team, dynamically populating AMP elements based on customer entry point to display the most relevant products at the top of the page.',
      'Led a small team of developers to manage deadlines, risks, and capacity, while also maintaining a healthy backlog of work items.',
      'Ensured that all SEO-related platform modules were up-to-date and presented pre-render snapshots correctly for search engines.',
    ],
    techUsed: ['JavaScript', 'AMP'],
  },
];

export const HeroHistoryAbout: workHistoryEntry[] = [
  {
    title: 'Father',
    timePeriod: 'May 2022 - Present',
    image: '/img/father.png',
    accomplishments: [
      'My son is my whole wide world.  I love spending time with him and traveling the world as a family.  We recently got back from a trip to Portugal where we spent two months there.',
    ],
  },
  {
    title: 'Web 3 Enthusiast',
    timePeriod: 'October 2012-Present',
    image: '/img/bitcoin.jpg',
    accomplishments: [
      "I've loved Crypto since I learned about it, back when ETH was $15.00.  Since then, I've been fascinated by decentralized finance and GameFi.",
    ],
  },
  {
    title: 'Warhammer 40,000',
    timePeriod: 'June 2014-Present',
    image: '/img/warhammer.jpg',
    accomplishments: [
      'I started playing Warhammer 40k almost 10 years ago during 7th Edition.',
      'I started with Orcs, and now have Space Wolves & Aeldari.',
      'What I love about Warhammer is the strategy and sportsmanship it demands.',
    ],
  },
];
