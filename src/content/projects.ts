import { PROFILE } from './profile';
import type { PersonalProject } from './types';

export const PROJECT_ITEMS: readonly PersonalProject[] = [
  {
    title: 'Personal website',
    text: ['This website presents my professional experience, skills, projects, and background.'],
    roleText: [
      'I built the entire site. It is static, with content stored in TypeScript data files and React components.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Bun',
      'Oxlint',
      'Oxfmt',
      'Storybook',
      'Codex',
    ],
    links: [
      {
        label: 'Site',
        href: PROFILE.website,
      },
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli/mrzli.github.io',
      },
    ],
  },
  {
    title: 'Symbol Jump',
    text: ['A complete, fully featured clone of Doodle Jump.'],
    roleText: [
      'I wrote all the code and created the simple black-and-white graphics.',
      'I also built a global score service on a VPS, accessed by the game through asynchronous HTTP calls. The server is no longer active.',
    ],
    tags: [
      'Java',
      'libGDX',
      'Android SDK',
      'Facebook SDK for Android',
      'Sinatra (Ruby)',
      'Apache',
      'MySQL',
    ],
    links: [{ label: 'Source Code', href: 'https://github.com/mrzli-other/tria' }],
  },
  {
    title: 'Hell Hopper',
    text: ['A simpler predecessor to Symbol Jump.'],
    roleText: ['I wrote all the code and created all the graphics.'],
    tags: ['Java', 'libGDX', 'Android SDK'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli-other/hellhopper',
      },
    ],
  },
  {
    title: 'Suchy Blocks',
    text: ['A Tetris clone for Android and desktop.'],
    roleText: ['I wrote all the code and created all the graphics.'],
    tags: ['Java', 'libGDX', 'Android SDK'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli-other/suchyblocks',
      },
    ],
  },
];
