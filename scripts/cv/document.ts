import { EDUCATION, EDUCATION_HIGHLIGHTS } from '../../src/content/background';
import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import { CONCISE_CV_SKILLS } from '../../src/content/exports/cv-concise';
import { DETAILED_CV } from '../../src/content/exports/cv-detailed';
import type { CvDocument, CvVariant, CvProject } from '../../src/content/exports/types';
import { PROFILE, EXPERIENCE_START_YEARS } from '../../src/content/profile';
import type { ExperienceProject } from '../../src/content/types';

export function createCvDocument(variant: CvVariant, year = new Date().getFullYear()): CvDocument {
  const professionalYears = year - EXPERIENCE_START_YEARS.professional;
  const contractingYears = year - EXPERIENCE_START_YEARS.contracting;
  return {
    variant,
    profile: PROFILE,
    summary: DETAILED_CV.summary(professionalYears, contractingYears),
    ai: PROFILE.ai,
    contracts: DETAILED_CV.contracts,
    contracting: EXPERIENCE_SECTIONS[0],
    projects: detailedProjects(EXPERIENCE_SECTIONS[0].projects),
    earlierExperience: EXPERIENCE_SECTIONS.slice(1).map((entry) => ({
      employment: entry,
      title: entry.title,
      text: [],
      projects: detailedProjects(entry.projects),
    })),
    education: EDUCATION,
    educationHighlights: EDUCATION_HIGHLIGHTS.slice(0, 1),
    professionalYears,
    contractingYears,
    skills: variant === 'concise' ? CONCISE_CV_SKILLS : DETAILED_CV.skills,
    personalInformation: DETAILED_CV.personalInformation,
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
