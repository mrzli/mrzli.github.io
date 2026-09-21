import type { ExperienceProjectKey } from '../experience-keys';
import type { ConciseProject } from './types';
export const CONCISE_CV = {
  summary: [
    'I build complete web applications independently or within a team: frontend, backend, or full stack. I define architecture, modernize systems, and mentor developers.',
  ],
  ai: 'Development with AI coding agents or without AI assistance.',
  contracts: 'B2B contracts: full-time, part-time, or fixed-price. Remote; hybrid in Zagreb.',
  tools: ['Jest', 'Docker', 'Git', 'Codex CLI', 'Copilot'],
} as const;

export const CONCISE_CV_PROJECTS: Readonly<Partial<Record<ExperienceProjectKey, ConciseProject>>> =
  {
    hvac: {
      title: 'HVAC monitoring and control',
      technologies: ['React', 'TypeScript', 'MobX'],
      context: '',
      contributions: [
        "Built interfaces and controls for a multinational's HVAC monitoring application within an established team.",
      ],
    },
    'warehouse-robotics': {
      title: 'Warehouse robotics',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      context:
        'Robot and fleet management with roughly 100,000 lines of frontend code per repository.',
      contributions: [
        'Independently migrated Angular 8 to 18, resolving over a thousand errors without observed regressions and removing a major security-audit blocker.',
        'Organized the migration for reuse across related applications and branches.',
      ],
    },
    eloqua: {
      title: 'Oracle Eloqua messaging integration',
      technologies: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Jest'],
      context: 'SMS and WhatsApp messaging within marketing campaigns.',
      contributions: [
        'Independently built the integration, defined its architecture, and clarified requirements with the client.',
        'Coordinated asynchronous flows involving hundreds of thousands of messages. Resolved race conditions, implemented multiple authentication protocols, and added extensive backend tests.',
      ],
    },
    'mobile-fueling': {
      title: 'Mobile fueling operations',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Angular'],
      context: 'A production platform supporting a large mobile fueling company.',
      contributions: [
        'Owned backend subsystems, delivered system-wide changes, and ran production database migrations. Also worked on the Angular administration app.',
        'Improved testing practices and interviewed, onboarded, and mentored developers.',
      ],
    },
    'graveyard-management': {
      title: 'Graveyard management',
      technologies: ['Vue', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL'],
      context: '',
      contributions: [
        'Built nearly all of a multi-tenant application with maps and PDF reports. Added frontend unit tests and backend integration tests using Jest and TypeScript.',
      ],
    },
  };
