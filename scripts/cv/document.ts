import { EDUCATION, EDUCATION_HIGHLIGHTS } from '../../src/content/background';
import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import { PRIMARY_TECHS } from '../../src/content/primary-technologies';
import { PROFILE, EXPERIENCE_START_YEARS } from '../../src/content/profile';
import type { ExperienceEntry, ProjectDescription } from '../../src/content/types';
import { DRAFT_PROJECTS, DRAFT_SUMMARY, DRAFT_EARLIER_EXPERIENCE } from './draft-content';

export const CV_VARIANTS = ['concise', 'detailed'] as const;
export type CvVariant = (typeof CV_VARIANTS)[number];

export interface CvDocument {
  readonly variant: CvVariant;
  readonly profile: typeof PROFILE;
  readonly summary: readonly string[];
  readonly technologies: readonly string[];
  readonly tools: readonly string[];
  readonly contracting: ExperienceEntry;
  readonly projects: readonly CvProject[];
  readonly earlierExperience: readonly CvEarlierExperience[];
  readonly education: typeof EDUCATION;
  readonly educationHighlights: readonly string[];
  readonly professionalYears: number;
  readonly contractingYears: number;
}

export interface CvProject {
  readonly title: string;
  readonly technologies: readonly string[];
  readonly context: readonly string[];
  readonly contributions: readonly string[];
  readonly startContinuationPage: boolean;
}

export interface CvEarlierExperience {
  readonly employment: ExperienceEntry;
  readonly title: string;
  readonly text: readonly string[];
}

export interface CvDraftProject {
  readonly source: ProjectDescription;
  readonly title: string;
  readonly technologies: readonly string[];
  readonly context: string;
  readonly contributions: readonly string[];
}

export function createCvDocument(variant: CvVariant, year = new Date().getFullYear()): CvDocument {
  return {
    variant,
    profile: PROFILE,
    summary: DRAFT_SUMMARY,
    technologies: PRIMARY_TECHS,
    tools: ['Jest', 'Docker', 'Git', 'Codex CLI', 'Copilot'],
    contracting: EXPERIENCE_SECTIONS[0],
    projects: DRAFT_PROJECTS.map((project, index) => ({
      title: project.title,
      technologies: project.technologies,
      context: variant === 'concise' ? [project.context] : project.source.text,
      contributions: variant === 'concise' ? project.contributions : project.source.roleText,
      startContinuationPage: variant === 'concise' && index === 2,
    })),
    earlierExperience: DRAFT_EARLIER_EXPERIENCE.map((entry) => ({
      employment: entry.employment,
      title: entry.title,
      text: variant === 'concise' ? [entry.summary] : entry.employment.projects[0].roleText,
    })),
    education: EDUCATION,
    educationHighlights:
      variant === 'concise' ? EDUCATION_HIGHLIGHTS.slice(0, 1) : EDUCATION_HIGHLIGHTS,
    professionalYears: year - EXPERIENCE_START_YEARS.professional,
    contractingYears: year - EXPERIENCE_START_YEARS.contracting,
  };
}
