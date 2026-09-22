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
        'I developed web and desktop software for government services, financial institutions, nuclear inspection, fuel dispenser monitoring and control, spreadsheet processing, and 3D animation. I built complete applications and components, implemented substantial parts of larger systems, and maintained existing software. My work covered user interfaces, business logic, databases, reporting, and hardware integration.',
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
    'I developed software for electricity consumption, accounting, parking payments, national single sign-on, government payment validation, telecom reporting, e-learning, and recruitment. My work ranged from mobile and web frontends to complete backends, integrations, and applications. I also built data export tools and resolved urgent issues before a production release.',
    'I independently built a configurable Java component for government payment validation from a specification of about 180 pages, with extensive automated tests, in less than two weeks. I added all 100 QA scenarios to the regression suite and fixed the reported failures. No further issues were reported.',
  ],
  contributions: [],
  startContinuationPage: false,
};

export const CONCISE_CV_PROJECT_OVERRIDES: Readonly<
  Partial<Record<ExperienceProjectKey, CvProject>>
> = {
  hvac: {
    title: 'HVAC monitoring and control web application',
    technologies: ['React', 'TypeScript', 'MobX', 'Tailwind CSS', 'FIN Framework', 'Copilot'],
    context: [
      "I worked in an established team developing a web application for a large multinational to monitor and control HVAC equipment across buildings and sites. Using the platform's specialized technologies and tools, I built sections of the frontend, components, and controls to match UI designs and fixed bugs.",
    ],
    contributions: [],
    startContinuationPage: false,
  },
  'warehouse-robotics': {
    title: 'Warehouse robotics web application',
    technologies: ['Angular', 'TypeScript', 'RxJS'],
    context: [
      'I joined an established warehouse automation project to resolve frontend issues and improve maintainability and developer experience. I independently migrated all four frontend variants from Angular 8 to 18. Each had more than 100,000 lines of code, although much of it was similar across variants. The migrations required resolving over a thousand errors per variant, adapting code to major dependency changes, and refactoring. I completed them without observed regressions, removing a major blocker for a security audit. Beyond the migration, my work included implementing substantial frontend features and subsystems based on client requirements, along with ongoing maintenance and bug fixes.',
    ],
    contributions: [],
    startContinuationPage: false,
  },
  eloqua: {
    title: 'Oracle Eloqua to mobile messaging integration',
    technologies: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Prisma', 'Jest', 'OAuth', 'JWT'],
    context: [
      'I independently built an integration for sending SMS and WhatsApp messages within Oracle Eloqua marketing campaigns. I clarified requirements with the client, defined the architecture, and implemented the frontend, backend, database, and external API connections. The application coordinated asynchronous flows involving hundreds of thousands of messages. I resolved race conditions, implemented multiple authentication methods, and wrote extensive backend tests covering endpoints and complex message flows.',
    ],
    contributions: [],
    startContinuationPage: false,
  },
  'mobile-fueling': {
    title: 'Mobile fueling management system',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Angular', 'TypeScript', 'NgRx'],
    context: [
      'I worked on the backend and Angular administration app of a production system for a leading mobile fueling company in California. I was responsible for backend subsystems and coordinated changes across the application. I wrote and ran migration scripts against the production MongoDB database without issues, improved testing practices, and interviewed, onboarded, and mentored developers.',
    ],
    contributions: [],
    startContinuationPage: false,
  },
  insurance: {
    title: 'Insurance web platform',
    technologies: ['React', 'TypeScript', 'Redux', 'RxJS', 'Material UI', 'Storybook', 'Jest'],
    context: [
      'I restructured substantial parts of a roughly 100,000-line frontend for a UK insurance platform. For most of my time on the project, I was its sole frontend developer. While developing new features, I resolved many of the existing TypeScript issues, rebuilt state management and API handling, and reorganized parts of the frontend architecture. I also improved build tooling, introduced automated tests, and built a component library with Material UI and Storybook.',
    ],
    contributions: [],
    startContinuationPage: false,
  },
  'graveyard-management': {
    title: 'Graveyard management web application',
    technologies: ['Vue', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'Jest'],
    context: [
      'I built nearly the entire frontend and backend of a multi-tenant graveyard management application, including interactive maps, PDF reports, and database migrations. I wrote frontend unit tests and backend integration tests covering much of the application across all layers.',
    ],
    contributions: [],
    startContinuationPage: false,
  },
};
