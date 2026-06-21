import type { ExperienceSectionProps } from './components';

export const EXPERIENCE_SECTIONS: readonly ExperienceSectionProps[] = [
  {
    title: 'Title',
    location: 'Location',
    role: 'Role',
    from: { year: 2007, month: 1 },
    to: { year: 2008, month: 12 },
    projects: [
      {
        title: 'Project Title',
        text: ['Project Text'],
        tags: ['Tag 1', 'Tag 2'],
        roleText: ['Role Text 1', 'Role Text 2'],
      },
    ],
  },
  {
    title: 'Visage Technologies (Student Project)',
    location: 'Zagreb (Croatia)',
    role: 'C++ Developer',
    from: { year: 2007, month: 1 },
    to: { year: 2007, month: 8 },
    projects: [
      {
        title: 'Body Animation Exporter',
        text: [
          'This project was a body animation exporter. It allowed exporting of body animation data built inside 3ds Max (3ds Max Biped format) into a format called MPEG-4 FBA, used by a larger face and body animation system.',
        ],
        tags: ['C++', '3ds Max SDK'],
        roleText: ['Role Text 1', 'Role Text 2'],
      },
    ],
  },
];
