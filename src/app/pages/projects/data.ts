import type { ProjectCardProps } from './components';

export const PROJECT_ITEMS: readonly ProjectCardProps[] = [
  {
    title: 'Personal Website',
    text: [
      'You are currently viewing it. It is just a simple static website displaying information relevant to my professional life.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Bun', 'ESLint', 'Prettier', 'Storybook'],
    roleText: [
      'I did all the development. The site is static and very simple. All of the content of the pages is simply hardcoded into the components.',
    ],
    links: [
      {
        label: 'Site',
        href: 'https://mrzli.github.io/',
      },
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli/mrzli.github.io',
      },
    ],
  },
  {
    title: 'Symbol Jump',
    text: ['A clone of a popular game called Doodle Jump. Complete and fully featured.'],
    tags: [
      'Java',
      'libGDX',
      'Android SDK',
      'Facebook SDK for Android',
      'Sinatra (Ruby)',
      'Apache',
      'MySQL',
    ],
    roleText: [
      'This was a personal project so I wrote all the code and created all the graphics. The graphics are black and white and pretty simple.',
      'I also implemented a global score service on a VPS server that was accessed from the game by asynchronous http calls. The server is no longer active.',
    ],
    links: [{ label: 'Source', href: 'https://github.com/mrzli-other/tria' }],
  },
  {
    title: 'Hell Hopper',
    text: ['A more primitive predecessor of the Symbol Jump game.'],
    tags: ['Java', 'libGDX', 'Android SDK'],
    roleText: ['I wrote all the code and created all the graphics.'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/mrzli-other/hellhopper',
      },
    ],
  },
  {
    title: 'Suchy Blocks',
    text: ['Tetris clone, available for Android and desktop.'],
    tags: ['Java', 'libGDX', 'Android SDK'],
    roleText: ['I wrote all the code and created all the graphics.'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/mrzli-other/suchyblocks',
      },
    ],
  },
];
