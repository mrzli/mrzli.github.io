import { EXPERIENCE_SECTIONS } from '../experience';
import type { ExperienceProjectKey } from '../experience-keys';
import type { DateRangeBound } from '../types';
import type { CvDocument, LinkedInSection } from './types';

export const LINKEDIN_LIMITS = {
  headline: 220,
  about: 2600,
  experienceDescription: 2000,
  positionTitle: 100,
  company: 100,
  school: 100,
  degree: 100,
  educationDescription: 1000,
  skill: 80,
} as const;

const LINKEDIN_CONTRACTING_SKILLS: readonly string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Angular',
  'Node.js',
  'NestJS',
  'Vue',
  'React Native',
  'Java',
  'Kotlin',
  'Spring Boot',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Jest',
  'Copilot',
];

const LINKEDIN_PROJECT_HIGHLIGHTS: Readonly<Partial<Record<ExperienceProjectKey, string>>> = {
  hvac: "Built React and TypeScript interfaces and controls for a multinational's HVAC monitoring platform within an established team.",
  'warehouse-robotics':
    'Independently migrated all four similar warehouse robotics frontend variants from Angular 8 to 18, each with more than 100,000 lines of code. Resolved over a thousand errors per variant without observed regressions, removing a major security-audit blocker.',
  eloqua:
    'Independently built a React/NestJS integration for SMS and WhatsApp campaigns in Oracle Eloqua. Defined the architecture and clarified requirements. Coordinated asynchronous flows involving hundreds of thousands of messages, handled race conditions and authentication, and added extensive backend tests.',
  'mobile-fueling':
    'Owned Node.js backend subsystems, delivered system-wide changes, and ran production MongoDB migrations for a mobile fueling platform. Also worked on its Angular administration app, improved testing, and interviewed, onboarded, and mentored developers.',
  insurance:
    'Restructured substantial parts of a roughly 100,000-line React frontend for a UK insurance platform, resolving many existing TypeScript issues and rebuilding state management and API handling.',
  'graveyard-management':
    'Built nearly all of a multi-tenant graveyard management application using Vue, Kotlin/Spring Boot, and PostgreSQL, with maps, PDF reports, and frontend and backend tests.',
};

export function createLinkedInSections(cv: CvDocument): readonly LinkedInSection[] {
  if (cv.variant !== 'concise') {
    throw new Error('LinkedIn must be generated from the short CV.');
  }
  const { profile, contracting } = cv;
  const contractingUrl = new URL('experience#contracting', profile.website).href;
  const earlierUrl = new URL('experience#apis-it', profile.website).href;
  const highlights = EXPERIENCE_SECTIONS[0].projects.flatMap((project) => {
    const highlight = LINKEDIN_PROJECT_HIGHLIGHTS[project.contentKey];
    return highlight ? [`• ${highlight}`] : [];
  });
  return [
    {
      title: 'Introduction',
      fields: [
        { label: 'Name', value: profile.name },
        { label: 'Location', value: profile.location },
        { label: 'Headline', value: profile.title, limit: LINKEDIN_LIMITS.headline },
      ],
    },
    {
      title: 'About',
      fields: [
        {
          label: 'About',
          value: [...cv.summary, cv.ai, profile.availability, cv.contracts].join('\n\u00a0\n'),
          limit: LINKEDIN_LIMITS.about,
        },
      ],
    },
    {
      title: `Experience — ${contracting.title}`,
      fields: [
        { label: 'Title', value: profile.title, limit: LINKEDIN_LIMITS.positionTitle },
        { label: 'Company', value: 'Self-employed', limit: LINKEDIN_LIMITS.company },
        { label: 'Start date', value: formatDate(contracting.from) },
        { label: 'End date', value: formatDate(contracting.to) },
        { label: 'Location / workplace', value: contracting.location },
        { label: 'Website URL', value: contractingUrl },
        {
          label: 'Description',
          limit: LINKEDIN_LIMITS.experienceDescription,
          value: [
            'I deliver frontend, backend, and full-stack work for clients, independently or within their teams. My responsibilities include technical architecture, requirements clarification, implementation, and mentoring.',
            ...highlights,
            'Further work includes government services, accounting, parking payments, telecom reporting, e-learning, and recruitment.',
            `More projects and technical detail: ${contractingUrl}`,
          ].join('\n\u00a0\n'),
        },
        { label: 'Skills', value: LINKEDIN_CONTRACTING_SKILLS.join(', ') },
      ],
    },
    ...cv.earlierExperience.map((entry): LinkedInSection => ({
      title: `Experience — ${entry.title}`,
      note: 'This is the combined earlier-roles entry from the short CV, not a single employer. No company name is supplied.',
      fields: [
        { label: 'Title', value: entry.employment.role, limit: LINKEDIN_LIMITS.positionTitle },
        { label: 'Start date', value: formatDate(entry.employment.from) },
        { label: 'End date', value: formatDate(entry.employment.to) },
        { label: 'Location / workplace', value: entry.employment.location },
        { label: 'Website URL', value: earlierUrl },
        {
          label: 'Description',
          value: [
            ...entry.projects.flatMap((project) => [...project.context, ...project.contributions]),
            `More work and technical detail: ${earlierUrl}`,
          ].join('\n\u00a0\n'),
          limit: LINKEDIN_LIMITS.experienceDescription,
        },
        {
          label: 'Skills',
          value: [...new Set(entry.projects.flatMap((project) => project.technologies))].join(', '),
        },
      ],
    })),
    {
      title: 'Education',
      fields: [
        { label: 'School', value: cv.education.institution, limit: LINKEDIN_LIMITS.school },
        { label: 'Degree', value: cv.education.qualification, limit: LINKEDIN_LIMITS.degree },
        {
          label: 'Description',
          value: cv.educationHighlights.join('\n\u00a0\n'),
          limit: LINKEDIN_LIMITS.educationDescription,
        },
      ],
    },
    {
      title: 'Personal information',
      fields: cv.personalInformation.map((group) => ({
        label: group.title,
        value: group.tags.join(', '),
      })),
    },
    {
      title: 'Contact information',
      fields: [
        { label: 'Email', value: profile.email },
        { label: 'Phone', value: profile.phone },
      ],
    },
    {
      title: 'Links',
      fields: [
        { label: 'Website', value: profile.website },
        { label: 'GitHub', value: profile.github },
        { label: 'LinkedIn', value: profile.linkedin },
        {
          label: 'Short CV',
          value: new URL('data/cv-goran-mrzljak-short.pdf', profile.website).href,
        },
        {
          label: 'Detailed CV',
          value: new URL('data/cv-goran-mrzljak-detailed.pdf', profile.website).href,
        },
      ],
    },
  ];
}

function formatDate(date: DateRangeBound): string {
  if (date === 'Present') {
    return date;
  }
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(date.year, date.month - 1, 1)),
  );
}
