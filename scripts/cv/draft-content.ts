import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import type { CvDraftProject } from './document';

export const DRAFT_SUMMARY: readonly string[] = [
  'I build web applications from start to finish or join existing teams, working on frontend, backend, or the full stack. I can define the technical architecture, help clarify requirements, and support a team through mentoring and onboarding.',
];

export const DRAFT_PROJECTS: readonly CvDraftProject[] = [
  {
    source: EXPERIENCE_SECTIONS[0].projects[0],
    title: 'HVAC monitoring and control',
    technologies: ['React', 'TypeScript', 'MobX', 'Tailwind CSS'],
    context:
      'An application for monitoring and controlling HVAC equipment across buildings and sites, developed for a large multinational.',
    contributions: [
      'Built frontend sections, components, and controls to match UI designs, and fixed issues as part of an established team.',
    ],
  },
  {
    source: EXPERIENCE_SECTIONS[0].projects[1],
    title: 'Warehouse robotics',
    technologies: ['Angular', 'TypeScript', 'RxJS'],
    context:
      'A web application for managing robots and fleets, with roughly 100,000 lines of frontend code in each of several related repositories.',
    contributions: [
      'Independently migrated Angular 8 to 18, resolving over a thousand errors without observed regressions and removing a major blocker for the security audit.',
      'Organized the migration for reuse across related applications and branches.',
    ],
  },
  {
    source: EXPERIENCE_SECTIONS[0].projects[2],
    title: 'Oracle Eloqua messaging integration',
    technologies: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Jest'],
    context: 'An integration enabling SMS and WhatsApp messaging within Oracle Eloqua campaigns.',
    contributions: [
      'Independently built the frontend, backend, database, and API integrations, making technical and architectural decisions and clarifying requirements with the client.',
      'Coordinated asynchronous flows involving hundreds of thousands of messages. Resolved race conditions and added extensive backend and regression tests.',
    ],
  },
  {
    source: EXPERIENCE_SECTIONS[0].projects[4],
    title: 'Mobile fueling operations',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Angular'],
    context: 'A production platform supporting the operations of a large mobile fueling company.',
    contributions: [
      'Owned backend subsystems, delivered changes affecting the whole application, and ran production database migrations with careful testing and coordination.',
      'Worked on the Angular administration app and interviewed, onboarded, and mentored developers.',
    ],
  },
];

export const DRAFT_EARLIER_EXPERIENCE = [
  {
    employment: EXPERIENCE_SECTIONS[1],
    title: EXPERIENCE_SECTIONS[1].title,
    summary:
      'Implemented seven complete e-Tax forms and contributed to about ten others, covering web interfaces, XML import and export, PDF reports, server-side validation, and data access.',
  },
  {
    employment: EXPERIENCE_SECTIONS[3],
    title: 'INETEC d.o.o.',
    summary:
      'Developed substantial parts of nuclear inspection software, including custom 2D and 3D signal charts, multithreaded rendering, signal processing, and persistence.',
  },
] as const;
