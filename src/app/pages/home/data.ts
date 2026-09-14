import { EXPERIENCE_PROJECT_ANCHORS } from '../experience/project-anchors';
import type { RouteCardProps } from './components';

export interface WorkHighlight {
  readonly to: string;
  readonly title: string;
  readonly focus: string;
  readonly description: string;
}

export const WORK_HIGHLIGHTS: readonly WorkHighlight[] = [
  {
    to: `/experience#${EXPERIENCE_PROJECT_ANCHORS.eloqua}`,
    title: 'Eloqua messaging integration',
    focus: 'Full-stack delivery',
    description:
      'Independently built an Oracle Eloqua messaging integration with React and NestJS. Coordinated complex asynchronous campaign flows involving hundreds of thousands of messages, with careful race-condition handling, authentication, and extensive backend tests.',
  },
  {
    to: `/experience#${EXPERIENCE_PROJECT_ANCHORS.robotics}`,
    title: 'Warehouse robotics',
    focus: 'Modernization',
    description:
      'Independently migrated a robot-management frontend of roughly 100,000 lines from Angular 8 to 18, resolving over a thousand errors without observed regressions and removing a major blocker for its security audit.',
  },
  {
    to: `/experience#${EXPERIENCE_PROJECT_ANCHORS.fueling}`,
    title: 'Mobile fueling operations',
    focus: 'Production systems',
    description:
      'Owned backend subsystems in a live Node.js and MongoDB platform for a mobile fueling company. Delivered system-wide changes and production database migrations, coordinating with a large development team.',
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
