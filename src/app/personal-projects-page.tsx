import type { FC } from 'react';

interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

interface Project {
  readonly name: string;
  readonly description: string;
  readonly tech: string;
  readonly role: string;
  readonly links: readonly ProjectLink[];
}

const DATA: readonly Project[] = [
  {
    name: 'CV Website (this site)',
    description: 'Simple website for displaying my professional info:',
    tech: 'React, Typescript, Prettier, ESLint, Vite, Tailwind.',
    role: 'I did all the development. The site is static and very simple. All of the content of the pages is simply hardcoded into the components.',
    links: [
      { label: 'Site', url: 'https://mrzli.github.io/' },
      { label: 'Source', url: 'https://github.com/mrzli/mrzli.github.io' },
    ],
  },
  {
    name: 'Symbol Jump',
    description:
      'A clone of a popular game called "Doodle Jump". Complete and fully featured:',
    tech: 'Java, libGDX, Android SDK, Facebook SDK for Android (removed in later versions), Sinatra (Ruby)/Apache/MySQL.',
    role: 'This was a personal project so I wrote all the code and created all the graphics (which is black and white and pretty simple). I also implemented a global score service on a VPS server that is accessed from the game by asynchronous http calls (the server is no longer active).',
    links: [{ label: 'Source', url: 'https://github.com/mrzli-other/tria' }],
  },
  {
    name: 'Hell Hopper',
    description: "A more primitive predecessor of 'Symbol Jump'.",
    tech: 'Java, libGDX, Android SDK.',
    role: 'I wrote all the code and created all the graphics.',
    links: [
      {
        label: 'Source',
        url: 'https://github.com/mrzli-other/hellhopper',
      },
    ],
  },
  {
    name: 'Suchy Blocks',
    description: 'Tetris clone, available for Android and desktop:',
    tech: 'Java, libGDX, Android SDK.',
    role: 'I wrote all the code and created all the graphics.',
    links: [
      {
        label: 'Source',
        url: 'https://github.com/mrzli-other/suchyblocks',
      },
    ],
  },
];

export const PersonalProjectsPage: FC = () => {
  return (
    <div>
      <h1 className='mt-6 mb-3 text-lg font-bold text-slate-800 uppercase dark:text-slate-200'>
        Personal Projects
      </h1>
      <p>Projects I did in my free time.</p>
      {DATA.map((project, index) => (
        <div key={index}>
          <h2 className='my-2 font-bold text-pink-600 dark:text-pink-500'>
            {project.name}
          </h2>
          <div className='my-6'>
            <p className='my-2 font-semibold'>{project.description}</p>
            <ul className='ml-6 list-disc'>
              <li>Tech used: {project.tech}</li>
              <li>My role: {project.role}</li>
              <li>
                Links:{' '}
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target='_blank'
                    rel='noreferrer'
                    className='mr-2 underline'
                  >
                    {link.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
