import { PROFILE } from './profile';
import type { BackgroundGroup, LinkItem } from './types';

export const EDUCATION_HIGHLIGHTS: readonly string[] = [
  'Five-year degree program, totaling 284 ECTS credits.',
  'The first two years covered foundations in mathematics, physics, and electrical engineering.',
  'Later years focused on programming, computer science, and software engineering.',
  'For my thesis in computer graphics, I built a BVH animation viewer that parses motion capture files and renders the animation.',
];

export const THESIS_LINKS: readonly LinkItem[] = [
  {
    href: 'https://www.fer.unizg.hr/en',
    label: 'Faculty of Electrical Engineering and Computing (FER)',
  },
  {
    href: 'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html',
    label: 'Thesis summary on the faculty site',
  },
  {
    href: 'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc',
    label: 'Full thesis (.doc)',
  },
  {
    href: 'https://github.com/mrzli/bvhviewer',
    label: 'Thesis application source code',
  },
  {
    href: 'https://youtu.be/7u4C-OBQZIk',
    label: 'Thesis application demo video',
  },
];

export interface AdditionalLearningItem {
  readonly title: string;
  readonly text: string;
}

export const ADDITIONAL_LEARNING_PARAGRAPHS: readonly string[] = [
  'A selection of topics from courses I have taken on Coursera, Udemy, Frontend Masters, and other platforms.',
  'I took these courses out of personal interest or for specific work needs, to learn frameworks and deepen my knowledge of programming and tools.',
];

export const ADDITIONAL_LEARNING_ITEMS: readonly AdditionalLearningItem[] = [
  {
    title: 'Frameworks and Libraries',
    text: 'React, Angular, Vue, Node.js, RxJS.',
  },
  {
    title: 'Tooling',
    text: 'Vim, Bash, Docker, and development environment setup.',
  },
  {
    title: 'Deep Dives',
    text: 'Courses from the "Hard Parts" series on Frontend Masters.',
  },
  {
    title: 'Other Topics',
    text: 'Simple compilers, code generation, introductory machine learning on Coursera, algorithms and data structures, data visualization with D3, economics, and statistics.',
  },
];

export const TAG_CARD_DATA: readonly BackgroundGroup[] = [
  { title: 'Location', tags: [PROFILE.location] },
  { title: 'Nationality', tags: ['Croatian'] },
  { title: 'Languages', tags: ['Croatian - native', 'English - fluent'] },
  { title: "Driver's License", tags: ['AM', 'B', 'F', 'G'] },
];

export const EDUCATION = {
  institution: 'Faculty of Electrical Engineering and Computing (FER), University of Zagreb',
  qualification: 'Graduate Engineer of Computing',
} as const;
