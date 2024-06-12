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
      'Spearheaded the implementation of the Realms Loot-box system, resulting in a more immersive and rewarding gameplay experience.',
      'Contributed to the development of staking systems for in-game assets, enabling players to earn rewards for their in-game actions.',
      'Implemented TreasureTags, a unique feature that allows users to showcase their Web3 presence and see who they are playing with.',
    ],
    techUsed: ['TypeScript', 'React', 'Subgraph', 'Web3.js'],
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
      'Designed and implemented the authenticated user experience for Transfers & Wires, Debit-Card, Buckets, External Account Verification, and Zelle.',
      'Migrated Legacy Ember code to React/TypeScript using the latest technology standards, resulting in improved performance and maintainability.',
      'Conducted interviews and facilitated on-boarding for new developers to our team, ensuring a seamless integration into the workflow.',
      'Ensured the security and privacy of Proprietary Information in the authenticated space, demonstrating a commitment to maintaining the highest standards of data protection.',
    ],
    techUsed: ['TypeScript', 'React'],
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
      'Diligently ensured thorough story grooming, comprehensive acceptance criteria, and complete artifact preparation prior to beginning development.',
      'Led successful onboarding efforts of new hires, organizing knowledge transfers and serving as a mentor to new team members.',
      'Created detailed User Journey charts to document user interactions and improve understanding of software delivery.',
    ],
    techUsed: ['TypeScript'],
  },
  {
    title: 'V.P., FESA(Front End Standards & Architecture) Team Lead at Bank of America',
    timePeriod: 'November 2018 — January 2020',
    image: '/img/bofa.png',
    accomplishments: [
      'Successfully led a team of developers while also managing personal deliverables and meeting project deadlines.',
      'Provided regular reports on performance and coding quality standards to senior leadership through a weekly forum.',
      'Collaborated closely with the platform and UX teams to ensure that new global components met ADA 2.1 requirements from a Frontend perspective.',
      'Implemented Agile methodologies to effectively translate ideas into deliverables.',
      'Enforced performance optimization and code quality standards across Front End teams, ensuring consistency and efficiency.',
      'Provided expert guidance and consultation to developers, UX designers, and business partners on global UI concerns.',
      'Monitored sales application performance metrics and worked with the SEO team to develop AMP pages that increased performance on high traffic pages.',
      'Ensured compliance and best practices were followed by partnering with UX and ADA teams.',
      'Spearheaded the effort to unify documentation site, creating a single point of entry for new hires, developers, and designers.',
      'Assisted in the design and development of an ESLint auditing tool to improve code quality.',
      'Conducted preliminary research and proof of concept of Vue for potential integration into our ecosystem.',
    ],
  },
  {
    title: 'V.P., UI Developer, SEO Technology Lead at Bank of America',
    timePeriod: 'February 2018 — November 2018',
    image: '/img/bofa.png',
    accomplishments: [
      'Delivered best-in-class AMP Pages for high-traffic and high-impact pages to provide customers with the best possible user experience.',
      'Created the first paid-search AMP experience for the Credit Cards team, dynamically populating AMP elements based on customer entry point to display the most relevant products at the top of the page.',
      'Led a small team of developers to manage deadlines, risks, and capacity, while also maintaining a healthy backlog of work items.',
      'Ensured that all SEO-related platform modules were up-to-date and presented pre-render snapshots correctly for search engines.',
    ],
  },
];

export const HeroHistoryAbout: workHistoryEntry[] = [
  {
    title: 'Father',
    timePeriod: 'May 2022 - Present',
    image: '/img/father.png',
    accomplishments: ['test'],
  },
  {
    title: 'Web 3 Enthusiast',
    timePeriod: 'some time',
    image: '/img/father.png',
    accomplishments: [''],
  },
  {
    title: 'Warhammer',
    timePeriod: 'some time',
    image: '/img/father.png',
    accomplishments: [''],
  },
];
