import { EXPERIENCE_SECTIONS } from '../experience';
import { getExperienceProjectAnchor } from '../project-anchors';
import type { DateRangeBound } from '../types';
import type { CvDocument, LinkedInSection } from './types';

export const LINKEDIN_LIMITS = {
  headline: 220,
  about: 2600,
  experienceDescription: 2000,
  projectDescription: 2000,
  positionTitle: 100,
  company: 100,
  school: 100,
  degree: 100,
  educationDescription: 1000,
  skill: 80,
} as const;

export function createLinkedInSections(cv: CvDocument): readonly LinkedInSection[] {
  if (cv.variant !== 'concise') {
    throw new Error('LinkedIn must be generated from the short CV.');
  }
  const { profile, contracting } = cv;
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
      note: 'The project descriptions below reproduce the short CV. Add them as separate Projects associated with this Self-employed entry because they exceed one employment description when combined.',
      fields: [
        { label: 'Title', value: contracting.role, limit: LINKEDIN_LIMITS.positionTitle },
        { label: 'Company', value: 'Self-employed', limit: LINKEDIN_LIMITS.company },
        { label: 'Start date', value: formatDate(contracting.from) },
        { label: 'End date', value: formatDate(contracting.to) },
        { label: 'Location / workplace', value: contracting.location },
      ],
    },
    ...cv.projects.map((project): LinkedInSection => ({
      title: `Project — ${project.title}`,
      note: 'Copy the description into Projects and select Self-employed under Associated with. Technologies reproduce the CV tags. Choose up to five for the project skill selector.',
      fields: [
        { label: 'Project name', value: project.title },
        { label: 'Associated with', value: 'Self-employed' },
        { label: 'Technologies', value: project.technologies.join(', ') },
        {
          label: 'Description',
          value: [...project.context, ...project.contributions].join('\n\u00a0\n'),
          limit: LINKEDIN_LIMITS.projectDescription,
        },
      ],
    })),
    ...cv.earlierExperience.map((entry): LinkedInSection => ({
      title: `Experience — ${entry.title}`,
      note: 'This is the combined earlier-roles entry from the short CV, not a single employer. No company name is supplied.',
      fields: [
        { label: 'Title', value: entry.employment.role, limit: LINKEDIN_LIMITS.positionTitle },
        { label: 'Start date', value: formatDate(entry.employment.from) },
        { label: 'End date', value: formatDate(entry.employment.to) },
        { label: 'Location / workplace', value: entry.employment.location },
        ...entry.projects.flatMap((project) => [
          { label: 'Project name', value: project.title },
          { label: 'Technologies', value: project.technologies.join(', ') },
          {
            label: 'Description',
            value: [...project.context, ...project.contributions].join('\n\u00a0\n'),
            limit: LINKEDIN_LIMITS.experienceDescription,
          },
        ]),
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
    ...EXPERIENCE_SECTIONS.map((entry): LinkedInSection => ({
      title: `Website links — ${entry.title}`,
      note: 'Direct links to the full website entries. These are reference links, not additional LinkedIn experience descriptions.',
      fields: [
        {
          label: 'Employment URL',
          value: new URL(`experience#${entry.contentKey}`, profile.website).href,
        },
        ...entry.projects.map((project) => ({
          label: `${project.title} URL`,
          value: new URL(`experience#${getExperienceProjectAnchor(project)}`, profile.website).href,
        })),
      ],
    })),
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
