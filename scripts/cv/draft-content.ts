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
  },
  {
    source: EXPERIENCE_SECTIONS[0].projects[1],
    title: 'Warehouse robotics',
    technologies: ['Angular', 'TypeScript', 'RxJS'],
  },
  {
    source: EXPERIENCE_SECTIONS[0].projects[2],
    title: 'Oracle Eloqua messaging integration',
    technologies: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Jest'],
  },
  {
    source: EXPERIENCE_SECTIONS[0].projects[4],
    title: 'Mobile fueling operations',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Angular'],
  },
];

export const DRAFT_EARLIER_EXPERIENCE = [
  { employment: EXPERIENCE_SECTIONS[1], title: EXPERIENCE_SECTIONS[1].title },
  { employment: EXPERIENCE_SECTIONS[3], title: 'INETEC d.o.o.' },
] as const;
