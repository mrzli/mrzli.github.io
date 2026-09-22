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
  hvac: 'HVAC monitoring: Worked on a React web application for monitoring and controlling HVAC equipment across buildings and sites.',
  'warehouse-robotics':
    'Warehouse robotics: Worked on a web application for monitoring and managing fleets of autonomous warehouse robots. Upgraded this large application from Angular 8 to 18 to help it pass a security audit.',
  eloqua:
    'Oracle Eloqua messaging: Built a React and NestJS application that integrates SMS and WhatsApp messaging into Oracle Eloqua marketing campaigns.',
  'electricity-consumption':
    'Electricity consumption: Worked on a React Native mobile app for monitoring and managing electricity use in Norway.',
  'mobile-fueling':
    'Mobile fueling: Worked on the Node.js backend and Angular administration application of a mobile fueling management system.',
  insurance:
    'Insurance platform: Restructured and improved the React frontend of a UK insurance web platform.',
  accounting:
    'Accounting: Developed the Angular frontend of an accounting and financial transactions application for a Finnish company.',
  'graveyard-management':
    'Graveyard management: Developed the frontend and backend of a multi-tenant graveyard management application using Vue, Kotlin, and Spring Boot.',
  parking:
    'Parking payments: Built the Java backend integration connecting mobile apps with parking providers and payment processing in Zagreb.',
  nias: 'NIAS single sign-on: Built a Java integration enabling access to Croatian government services through NIAS.',
  'government-payments':
    'Government payment validation: Developed a configurable Java component for validating government payment data.',
  'eu-roaming':
    'EU roaming: Built the Java and Spring Boot backend and reporting system for a telecom roaming usage tracking application.',
  'e-learning':
    'E-learning: Developed an AngularJS and Java/Spring Boot application for video courses and online meetings.',
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
        {
          label: 'Headline',
          value: `${profile.title} | React, Angular, Node.js | Frontend, backend & full-stack development`,
          limit: LINKEDIN_LIMITS.headline,
        },
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
          value: [...highlights, `More projects and technical detail: ${contractingUrl}`].join(
            '\n\u00a0\n',
          ),
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
            `Full descriptions: ${earlierUrl}\nThis link opens at APIS IT. Scroll down for the other roles included here.`,
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
