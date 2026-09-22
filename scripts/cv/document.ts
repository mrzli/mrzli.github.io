import { EDUCATION, EDUCATION_HIGHLIGHTS } from '../../src/content/background';
import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import { CONCISE_CV, CONCISE_CV_PROJECTS } from '../../src/content/exports/cv-concise';
import { DETAILED_CV } from '../../src/content/exports/cv-detailed';
import { EXPORT_EXPERIENCE_SUMMARIES } from '../../src/content/exports/experience';
import type { CvDocument, CvVariant, CvProject } from '../../src/content/exports/types';
import { PROFILE, EXPERIENCE_START_YEARS } from '../../src/content/profile';
import type { ExperienceProject } from '../../src/content/types';

export function createCvDocument(variant: CvVariant, year = new Date().getFullYear()): CvDocument {
  const professionalYears = year - EXPERIENCE_START_YEARS.professional;
  const contractingYears = year - EXPERIENCE_START_YEARS.contracting;
  return {
    variant,
    profile: PROFILE,
    summary:
      variant === 'concise'
        ? CONCISE_CV.summary
        : DETAILED_CV.summary(professionalYears, contractingYears),
    ai: variant === 'concise' ? CONCISE_CV.ai : PROFILE.ai,
    contracts: variant === 'concise' ? CONCISE_CV.contracts : DETAILED_CV.contracts,
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
            title: entry.title,
            text: [],
            projects: detailedProjects(entry.projects),
          })),
    education: EDUCATION,
    educationHighlights: EDUCATION_HIGHLIGHTS.slice(0, 1),
    professionalYears,
    contractingYears,
    skills: variant === 'detailed' ? DETAILED_CV.skills : [],
    personalInformation: variant === 'detailed' ? DETAILED_CV.personalInformation : [],
    languages: [],
    thesisLinks: [],
  };
}

function detailedProjects(projects: readonly ExperienceProject[]): readonly CvProject[] {
  return projects.map((project) => ({
    title: project.title,
    technologies: project.tags,
    context: project.text,
    contributions: project.roleText,
    startContinuationPage: false,
  }));
}
