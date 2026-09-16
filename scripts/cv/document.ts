import { EDUCATION, EDUCATION_HIGHLIGHTS } from '../../src/content/background';
import { CONCISE_CV } from '../../src/content/cv-concise';
import { DETAILED_CV } from '../../src/content/cv-detailed';
import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import { PRIMARY_TECHS } from '../../src/content/primary-technologies';
import { PROFILE, EXPERIENCE_START_YEARS } from '../../src/content/profile';
import type {
  ExperienceEntry,
  ProjectDescription,
  SkillSection,
  LinkItem,
} from '../../src/content/types';

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

export function createCvDocument(variant: CvVariant, year = new Date().getFullYear()): CvDocument {
  return {
    variant,
    profile: PROFILE,
    summary: variant === 'concise' ? CONCISE_CV.summary : DETAILED_CV.summary,
    ai: variant === 'concise' ? CONCISE_CV.ai : PROFILE.ai,
    contracts: variant === 'concise' ? CONCISE_CV.contracts : PROFILE.contracts,
    technologies: PRIMARY_TECHS,
    tools: CONCISE_CV.tools,
    contracting: EXPERIENCE_SECTIONS[0],
    projects:
      variant === 'concise'
        ? EXPERIENCE_SECTIONS[0].projects
            .flatMap((project) => (project.concise ? [project.concise] : []))
            .map((project, index) => ({
              ...project,
              context: project.context ? [project.context] : [],
              startContinuationPage: index === 3,
            }))
        : detailedProjects(EXPERIENCE_SECTIONS[0].projects),
    earlierExperience:
      variant === 'concise'
        ? EXPERIENCE_SECTIONS.flatMap((entry) =>
            entry.conciseSummary
              ? [
                  {
                    employment: entry,
                    title: entry.conciseTitle ?? entry.title,
                    text: [entry.conciseSummary],
                    projects: [],
                  },
                ]
              : [],
          )
        : EXPERIENCE_SECTIONS.slice(1).map((entry) => ({
            employment: entry,
            title: entry.conciseTitle ?? entry.title,
            text: [],
            projects: detailedProjects(entry.projects),
          })),
    education: EDUCATION,
    educationHighlights:
      variant === 'concise'
        ? EDUCATION_HIGHLIGHTS.slice(0, 1)
        : [EDUCATION_HIGHLIGHTS[0], EDUCATION_HIGHLIGHTS[3]],
    professionalYears: year - EXPERIENCE_START_YEARS.professional,
    contractingYears: year - EXPERIENCE_START_YEARS.contracting,
    skills: variant === 'detailed' ? DETAILED_CV.skills : [],
    languages: variant === 'detailed' ? DETAILED_CV.languages : [],
    thesisLinks: variant === 'detailed' ? DETAILED_CV.thesisLinks : [],
  };
}

function detailedProjects(projects: readonly ProjectDescription[]): readonly CvProject[] {
  return projects.flatMap((project) =>
    project.detailed
      ? [
          {
            title: project.detailed.title ?? project.title,
            technologies: project.detailed.technologies ?? project.tags,
            context: project.detailed.context ?? project.text,
            contributions: project.detailed.contributions ?? project.roleText,
            startContinuationPage: false,
          },
        ]
      : [],
  );
}
