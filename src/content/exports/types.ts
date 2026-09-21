import type { EDUCATION } from '../background';
import type { PROFILE } from '../profile';
import type { ExperienceEntry, SkillSection, LinkItem } from '../types';

export const CV_VARIANTS = ['concise', 'detailed'] as const;
export type CvVariant = (typeof CV_VARIANTS)[number];

export interface CvDocument {
  readonly variant: CvVariant;
  readonly profile: typeof PROFILE;
  readonly summary: readonly string[];
  readonly ai: string;
  readonly contracts: string;
  readonly technologies: readonly string[];
  readonly tools: readonly string[];
  readonly contracting: ExperienceEntry;
  readonly projects: readonly CvProject[];
  readonly earlierExperience: readonly CvEarlierExperience[];
  readonly education: typeof EDUCATION;
  readonly educationHighlights: readonly string[];
  readonly professionalYears: number;
  readonly contractingYears: number;
  readonly skills: readonly SkillSection[];
  readonly languages: readonly string[];
  readonly thesisLinks: readonly LinkItem[];
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
  readonly projects: readonly CvProject[];
}

export interface ConciseProject {
  readonly title: string;
  readonly technologies: readonly string[];
  readonly context: string;
  readonly contributions: readonly string[];
}

export interface DetailedProject {
  readonly title?: string;
  readonly technologies?: readonly string[];
  readonly context?: readonly string[];
  readonly contributions?: readonly string[];
}

export interface ExportExperienceSummary {
  readonly title: string;
  readonly summary: string;
}

export interface LinkedInSection {
  readonly title: string;
  readonly note?: string;
  readonly fields: readonly LinkedInField[];
}

export interface LinkedInField {
  readonly label: string;
  readonly value: string;
  readonly limit?: number;
}

export interface CvSource {
  readonly variant: CvVariant;
  readonly tex: string;
}

export interface CvBuildOptions {
  readonly workDirectory: string;
  readonly publishDirectory?: string;
  readonly texOnly?: boolean;
}
