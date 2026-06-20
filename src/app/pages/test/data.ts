import type { ProjectCardProps } from './components';

export const PROJECT_ITEMS: readonly ProjectCardProps[] = [
  {
    title: 'Personal Website',
    text: 'You are currently viewing it. It is just a simple static website displaying information relevant to my professional life.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Bun',
      'ESLint',
      'Prettier',
      'Storybook',
    ],
    roleText:
      'I did all the development. The site is static and very simple. All of the content of the pages is simply hardcoded into the components.',
    links: [
      {
        href: 'https://mrzli.github.io/',
        label: 'Site',
      },
      {
        href: 'https://github.com/mrzli/mrzli.github.io',
        label: 'Source Code',
      },
    ],
  },
];
