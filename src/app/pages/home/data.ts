import type { RouteCardProps } from './components';

export interface WorkHighlight {
  readonly title: string;
  readonly focus: string;
  readonly description: string;
}

export const WORK_HIGHLIGHTS: readonly WorkHighlight[] = [
  {
    title: 'Marketing integration',
    focus: 'Full-stack delivery',
    description:
      'Built an Eloqua messaging integration with React and NestJS, including authentication, asynchronous message processing, and extensive backend tests.',
  },
  {
    title: 'Warehouse robotics',
    focus: 'Modernization',
    description:
      'Migrated a robot-management application from Angular 8 to 18, resolving over a thousand errors and removing a major blocker for its security audit.',
  },
  {
    title: 'Building monitoring & control',
    focus: 'Product development',
    description:
      'Developed React interfaces and supporting backend changes for a multinational’s HVAC platform, helping bring the product toward its first release.',
  },
];

export const PRIMARY_TECHS: readonly string[] = [
  'React',
  'TypeScript',
  'Angular',
  'Node.js',
  'NestJS',
  'PostgreSQL',
];

export const ROUTE_CARDS: readonly RouteCardProps[] = [
  {
    title: 'Experience',
    to: '/experience',
    description: 'Client projects, technical decisions, and my role in each.',
  },
  {
    title: 'Skills',
    to: '/skills',
    description: 'Technologies grouped by depth and recency of experience.',
  },
  {
    title: 'Projects',
    to: '/projects',
    description: 'Personal work, from this website to games, with source code.',
  },
  {
    title: 'Background',
    to: '/background',
    description: 'Computing degree, continued learning, and personal context.',
  },
];
