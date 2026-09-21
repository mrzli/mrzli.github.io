import { EDUCATION, EDUCATION_HIGHLIGHTS } from '../../src/content/background';
import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import { CONCISE_CV, CONCISE_CV_PROJECTS } from '../../src/content/exports/cv-concise';
import { DETAILED_CV, DETAILED_CV_PROJECTS } from '../../src/content/exports/cv-detailed';
import { EXPORT_EXPERIENCE_SUMMARIES } from '../../src/content/exports/experience';
import type { CvDocument, CvVariant, CvProject } from '../../src/content/exports/types';
import { PRIMARY_TECHS } from '../../src/content/primary-technologies';
import { PROFILE, EXPERIENCE_START_YEARS } from '../../src/content/profile';
import type { ExperienceProject } from '../../src/content/types';

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
            .flatMap((project) => {
              const concise = CONCISE_CV_PROJECTS[project.contentKey];
              return concise ? [concise] : [];
            })
            .map((project, index) => ({
              ...project,
              context: project.context ? [project.context] : [],
              startContinuationPage: index === 3,
            }))
        : detailedProjects(EXPERIENCE_SECTIONS[0].projects),
    earlierExperience:
      variant === 'concise'
        ? EXPERIENCE_SECTIONS.flatMap((entry) => {
            const summary = EXPORT_EXPERIENCE_SUMMARIES[entry.contentKey];
            return summary
              ? [{ employment: entry, title: summary.title, text: [summary.summary], projects: [] }]
              : [];
          })
        : EXPERIENCE_SECTIONS.slice(1).map((entry) => ({
            employment: entry,
            title: EXPORT_EXPERIENCE_SUMMARIES[entry.contentKey]?.title ?? entry.title,
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

function detailedProjects(projects: readonly ExperienceProject[]): readonly CvProject[] {
  return projects.flatMap((project) => {
    const detailed = DETAILED_CV_PROJECTS[project.contentKey];
    return detailed
      ? [
          {
            title: detailed.title ?? project.title,
            technologies: detailed.technologies ?? project.tags,
            context: detailed.context ?? project.text,
            contributions: detailed.contributions ?? project.roleText,
            startContinuationPage: false,
          },
        ]
      : [];
  });
}
