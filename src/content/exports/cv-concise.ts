import { EXPERIENCE_SECTIONS } from '../experience';
import type { ExperienceProjectKey } from '../experience-keys';
import { SKILLS_SECTIONS } from '../skills';
import type { ConciseProject, CvEarlierExperience, CvProject } from './types';
export const CONCISE_CV = {
  summary: [
    'I build complete web applications independently or within a team: frontend, backend, or full stack. I define architecture, modernize systems, and mentor developers.',
  ],
  ai: 'Development with AI coding agents or without AI assistance.',
  contracts: 'B2B contracts: full-time, part-time, or fixed-price. Remote; hybrid in Zagreb.',
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

export const CONCISE_CV_SECTION_NOTES = {
  experience: {
    beforeLink: 'Selected projects are shown below. See the ',
    afterLink: ' for the full project history.',
  },
  skills: {
    beforeLink: 'Selected skills are listed below. See the ',
    afterLink: ' for the full list.',
  },
} as const;

export const CONCISE_CV_SKILLS = SKILLS_SECTIONS.filter(
  (section) => section.title === 'Extensive and recent experience',
);

export const CONCISE_CV_EARLIER_EXPERIENCE: CvEarlierExperience = {
  employment: {
    title: 'Earlier software development roles',
    role: 'C# Software Developer',
    location: 'Croatia and remote',
    from: EXPERIENCE_SECTIONS.find((entry) => entry.contentKey === 'visage')!.from,
    to: EXPERIENCE_SECTIONS.find((entry) => entry.contentKey === 'apis-it')!.to,
  },
  title: 'Earlier software development roles',
  text: [],
  projects: [
    {
      title: 'Web and desktop applications',
      technologies: ['C#', '.NET', 'ASP.NET', 'WPF', 'Windows Forms', 'C++', 'SQL'],
      context: [
        'I developed web and desktop software for government services, financial institutions, nuclear inspection, fuel dispenser monitoring and control, spreadsheet processing, and 3D animation. My work covered user interfaces, business logic, databases, reporting, and hardware integration. I built complete applications and components, implemented substantial parts of larger systems, and maintained existing software.',
      ],
      contributions: [],
      startContinuationPage: false,
    },
  ],
};

export const CONCISE_CV_PROJECT_KEYS: readonly ExperienceProjectKey[] = [
  'hvac',
  'warehouse-robotics',
  'eloqua',
  'mobile-fueling',
  'insurance',
  'graveyard-management',
];

export const CONCISE_CV_OTHER_PROJECTS: CvProject = {
  title: 'Other projects',
  technologies: [
    'TypeScript',
    'React',
    'React Native',
    'Angular',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'C#',
    'Ruby',
  ],
  context: [
    'I worked on electricity consumption, accounting, parking payments, national single sign-on, government payment validation, telecom reporting, e-learning, and recruitment software. My contributions ranged from mobile and web frontends to complete backends, integrations, and applications. I also built data export tools and resolved urgent issues before a production release.',
    'For government payment validation, I independently translated a specification of about 180 pages into a configurable Java component with extensive automated tests in less than two weeks. I incorporated all 100 QA scenarios into the regression suite, fixed the reported failures, and had no further issues reported.',
  ],
  contributions: [],
  startContinuationPage: false,
};
