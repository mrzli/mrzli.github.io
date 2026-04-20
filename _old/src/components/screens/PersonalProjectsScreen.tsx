import React from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import {
  PersonalProjectItem,
  PersonalProjectItemProps,
} from '../reusable/PersonalProjectItem';

const DATA: readonly PersonalProjectItemProps[] = [
  {
    name: 'CV Website (this site)',
    project: {
      description: 'Simple website for displaying my professional info:',
      tech: 'React, Typescript, Prettier, ESLint, Jest, React Testing Library.',
      role: 'I did all the development. The site is static and very simple. All of the content of the pages is simply hardcoded into the components. I used Heroku for development, the deployment is automatic (on each push to master branch). "Production" deployment to GitHub Pages is manual, but it is done by executing a single command.',
      links: [
        {
          label: 'Site',
          url: 'https://mrzli.github.io/',
        },
        { label: 'Source', url: 'https://github.com/mrzli/mrzli.github.io' },
      ],
    },
  },
  {
    name: 'Symbol Jump',
    project: {
      description:
        'A clone of a popular game called "Doodle Jump". Complete and fully featured:',
      tech: 'Java, libGDX, Android SDK, Facebook SDK for Android (removed in later versions), Sinatra (Ruby)/Apache/MySQL.',
      role: 'This was a personal project so I wrote all the code and created all the graphics (which is black and white and pretty simple). I also implemented a global score service on a VPS server that is accessed from the game by asynchronous http calls (the server is no longer active).',
      links: [{ label: 'Source', url: 'https://github.com/mrzli-other/tria' }],
    },
  },
  {
    name: 'Hell Hopper',
    project: {
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
  },
  {
    name: 'Suchy Blocks',
    project: {
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
  },
];

export function PersonalProjectsScreen(): React.ReactElement {
  return (
    <div>
      <div>
        <Title>Personal Projects</Title>
        <SimpleText>Projects I did in my free time.</SimpleText>
      </div>
      <br />
      {DATA.map((item, index) => (
        <PersonalProjectItem key={index} {...item} />
      ))}
    </div>
  );
}
