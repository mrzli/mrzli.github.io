import type { LinkItem } from '../../types';
import type { TagCardProps } from './components';

export const EDUCATION_HIGHLIGHTS: readonly string[] = [
  'Five year course, total 284 ECTS credits.',
  'Gives good foundation in mathematics, physics, and electrical engineering in the first two years.',
  'Later part is focused on programming, computer science, and software engineering.',
  'Graduation thesis was in the domain of computer graphics - a BVH animation viewer that parses motion capture files and renders the animation.',
];

export const THESIS_LINKS: readonly LinkItem[] = [
  {
    href: 'https://www.fer.unizg.hr/en',
    label: 'Faculty of Electrical Engineering and Computing (FER)',
  },
  {
    href: 'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html',
    label: 'Short summary of the thesis on the faculty site',
  },
  {
    href: 'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc',
    label: 'Full thesis (.doc file)',
  },
  {
    href: 'https://github.com/mrzli/bvhviewer',
    label: 'Source code for the thesis application',
  },
  {
    href: 'https://youtu.be/7u4C-OBQZIk',
    label: 'Short video showing the thesis application',
  },
];

export interface AdditionalLearningItem {
  readonly title: string;
  readonly text: string;
}

export const ADDITIONAL_LEARNING_PARAGRAPHS: readonly string[] = [
  'Here are some online courses I took on Coursera, Udemy, Frontend Masters, and others.',
  'I did it for personal interest, or to learn something specific for work. It usually served the goal of introducing me to a framework, or giving me a deeper knowledge of a particular programming or tooling subject.',
  'This list is not exhaustive.',
];

export const ADDITIONAL_LEARNING_ITEMS: readonly AdditionalLearningItem[] = [
  {
    title: 'Frameworks and Libraries',
    text: 'React, Angular, Vue, Node, RxJs.',
  },
  {
    title: 'Tooling',
    text: 'Vim, Bash, Docker, software development machine setup.',
  },
  {
    title: 'Deep Dives',
    text: 'Some courses from the "Hard Parts" series on Frontend Masters.',
  },
  {
    title: 'Other Topics',
    text: 'Compilers (simple ones), code generation, foundational machine learning course on Coursera, some algorithms and data structures courses, Data Visualization (D3), some economics and statistics classes.',
  },
];

export const TAG_CARD_DATA: readonly TagCardProps[] = [
  { title: 'Locations', tags: ['Zagreb, Croatia'] },
  { title: 'Languages', tags: ['Croatian - native', 'English - fluent'] },
  { title: "Driver's License", tags: ['AM', 'B', 'F', 'G'] },
];
