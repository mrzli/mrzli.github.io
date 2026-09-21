import { EDUCATION, EDUCATION_HIGHLIGHTS, TAG_CARD_DATA } from '../background';
import { EXPERIENCE_SECTIONS } from '../experience';
import type { ExperienceProjectKey } from '../experience-keys';
import { PROFILE, EXPERIENCE_START_YEARS } from '../profile';
import { SKILLS_SECTIONS } from '../skills';
import type { DateRangeBound } from '../types';
import { EXPORT_EXPERIENCE_SUMMARIES } from './experience';
import type { LinkedInSection } from './types';

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

const PRIORITIZED_SKILLS: readonly string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Angular',
  'NestJS',
  'PostgreSQL',
  'JavaScript',
  'Express',
  'MongoDB',
  'MySQL',
  'RxJS',
  'Jest',
  'Vitest',
  'Storybook',
  'Docker',
  'Git',
  'GitHub Actions',
  'Tailwind CSS',
  'Codex CLI',
  'Copilot',
];

export const LINKEDIN_PROJECT_HIGHLIGHTS: Readonly<Partial<Record<ExperienceProjectKey, string>>> =
  {
    hvac: "Built React and TypeScript interfaces and controls for a multinational's HVAC monitoring platform within an established team.",
    'warehouse-robotics':
      'Independently migrated Angular 8 to 18 in a warehouse robotics frontend of roughly 100,000 lines per repository. Resolved over a thousand errors without observed regressions, removing a major security-audit blocker.',
    eloqua:
      'Independently built a React/NestJS integration for SMS and WhatsApp campaigns in Oracle Eloqua. Defined the architecture and clarified requirements. Coordinated asynchronous flows involving hundreds of thousands of messages, handled race conditions and authentication, and added extensive backend tests.',
    'mobile-fueling':
      'Owned Node.js backend subsystems, delivered system-wide changes, and ran production MongoDB migrations for a mobile fueling platform. Also worked on its Angular administration app, improved testing, and interviewed, onboarded, and mentored developers.',
    'graveyard-management':
      'Built nearly all of a multi-tenant graveyard management application using Vue, Kotlin/Spring Boot, and PostgreSQL, with maps, PDF reports, and frontend and backend tests.',
  };

export function createLinkedInSections(
  currentYear = new Date().getFullYear(),
): readonly LinkedInSection[] {
  const [contracting, ...earlier] = EXPERIENCE_SECTIONS;
  const student = earlier.find((entry) => entry.title.includes('(Student Project)'));
  const skills = new Set(SKILLS_SECTIONS[0].groups.flatMap((group) => group.skills));
  for (const skill of PRIORITIZED_SKILLS) {
    if (!skills.has(skill)) {
      throw new Error(
        `Review LinkedIn skill selection: ${skill} is no longer extensive and recent.`,
      );
    }
  }
  const highlights = contracting.projects.flatMap((project) => {
    const highlight = LINKEDIN_PROJECT_HIGHLIGHTS[project.contentKey];
    return highlight ? [`• ${highlight}`] : [];
  });
  return [
    {
      title: 'Introduction',
      fields: [
        { label: 'Name', value: PROFILE.name },
        {
          label: 'Headline',
          value: `${PROFILE.title} | React, TypeScript, Node.js | Frontend, backend & full-stack development`,
          limit: LINKEDIN_LIMITS.headline,
        },
        { label: 'Location', value: PROFILE.location },
      ],
    },
    {
      title: 'About',
      fields: [
        {
          label: 'About',
          limit: LINKEDIN_LIMITS.about,
          value: [
            PROFILE.lead,
            `I have ${currentYear - EXPERIENCE_START_YEARS.professional} years of professional software development experience and ${currentYear - EXPERIENCE_START_YEARS.contracting} years of independent contract work. ${PROFILE.summary}`,
            PROFILE.services,
            'My work ranges from independently delivering applications to modernizing large frontends and maintaining production backends. I have worked on marketing integrations, warehouse robotics, HVAC monitoring, and mobile fueling operations, as well as desktop and mobile applications.',
            PROFILE.ai,
            `${PROFILE.availability} ${PROFILE.contracts}`,
            `Work and project details: ${PROFILE.website}`,
          ].join('\n\n'),
        },
      ],
    },
    {
      title: 'Experience — independent contracting',
      note: 'Use one ongoing entry. “Self-employed” is a suggested company label, not a client company. Select the matching employment type in LinkedIn. Keep the source dates, including the overlap with APIS IT.',
      fields: [
        {
          label: 'Title',
          value: `${PROFILE.title} / Independent contractor`,
          limit: LINKEDIN_LIMITS.positionTitle,
        },
        { label: 'Company', value: 'Self-employed', limit: LINKEDIN_LIMITS.company },
        { label: 'Start date', value: formatDate(contracting.from) },
        { label: 'End date', value: formatDate(contracting.to) },
        { label: 'Location / workplace', value: contracting.location },
        {
          label: 'Description',
          limit: LINKEDIN_LIMITS.experienceDescription,
          value: [
            'I deliver frontend, backend, and full-stack work for clients, independently or within their teams. My responsibilities include technical architecture, requirements clarification, implementation, and mentoring.',
            ...highlights,
            `More projects and technical detail: ${new URL('experience', PROFILE.website).href}`,
          ].join('\n\n'),
        },
      ],
    },
    ...earlier
      .filter((entry) => entry !== student)
      .map((entry): LinkedInSection => {
        const summary = EXPORT_EXPERIENCE_SUMMARIES[entry.contentKey]?.summary;
        if (!summary) {
          throw new Error(`Missing LinkedIn summary for ${entry.title}`);
        }
        return {
          title: `Experience — ${entry.title}`,
          fields: [
            { label: 'Title', value: entry.role, limit: LINKEDIN_LIMITS.positionTitle },
            { label: 'Company', value: entry.title, limit: LINKEDIN_LIMITS.company },
            { label: 'Start date', value: formatDate(entry.from) },
            { label: 'End date', value: formatDate(entry.to) },
            { label: 'Location / workplace', value: entry.location },
            {
              label: 'Description',
              value: summary,
              limit: LINKEDIN_LIMITS.experienceDescription,
            },
          ],
        };
      }),
    {
      title: 'Education',
      note: 'Education dates are not recorded in the shared source, so they are omitted. Keep or enter your actual dates. The student project is included here, rather than presented as employment.',
      fields: [
        { label: 'School', value: EDUCATION.institution, limit: LINKEDIN_LIMITS.school },
        { label: 'Degree', value: EDUCATION.qualification, limit: LINKEDIN_LIMITS.degree },
        {
          label: 'Description',
          value: [
            EDUCATION_HIGHLIGHTS[0],
            EDUCATION_HIGHLIGHTS[3],
            ...(student
              ? [
                  `${student.title}, ${formatDate(student.from)} to ${formatDate(student.to)}: ${student.projects[0].text[0]} ${student.projects[0].roleText[0]}`,
                ]
              : []),
          ].join('\n\n'),
          limit: LINKEDIN_LIMITS.educationDescription,
        },
      ],
    },
    {
      title: 'Skills — suggested order',
      note: 'Add skills individually, choosing the closest available LinkedIn skill names. This selection uses only the website’s extensive-and-recent group. Earlier and limited experience remain on the website; this is not a reclassification.',
      fields: PRIORITIZED_SKILLS.map((skill, index) => ({
        label: `Skill ${index + 1}`,
        value: skill,
        limit: LINKEDIN_LIMITS.skill,
      })),
    },
    {
      title: 'Languages',
      note: 'These are the source descriptions. Choose the corresponding proficiency in LinkedIn rather than copying an invented proficiency rating.',
      fields: (TAG_CARD_DATA.find((group) => group.title === 'Languages')?.tags ?? []).map(
        (value, index) => ({ label: `Language ${index + 1}`, value }),
      ),
    },
    {
      title: 'Contact information',
      note: 'Set contact visibility in LinkedIn as you prefer. These values already appear on the website.',
      fields: [
        { label: 'Email', value: PROFILE.email },
        { label: 'Phone', value: PROFILE.phone },
        { label: 'Website', value: PROFILE.website },
        { label: 'GitHub', value: PROFILE.github },
        { label: 'Stack Overflow', value: PROFILE.stackOverflow },
      ],
    },
    {
      title: 'Featured — suggested links',
      note: 'Add the portfolio first. It provides both CV downloads. GitHub is an optional second link. These are suggestions, not separate experience entries.',
      fields: [
        { label: 'Portfolio URL', value: PROFILE.website },
        { label: 'GitHub URL', value: PROFILE.github },
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
