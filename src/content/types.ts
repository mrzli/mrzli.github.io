export interface ExperienceEntry {
  readonly conciseTitle?: string;
  readonly conciseSummary?: string;
  readonly title: string;
  readonly location: string;
  readonly role: string;
  readonly from: DateRangeBound;
  readonly to: DateRangeBound;
  readonly projects: readonly ProjectDescription[];
}

export type DateRangeBound = MonthYear | 'Present';

export interface MonthYear {
  readonly year: number;
  readonly month: number;
}

export type PersonalProject = ProjectDescription & {
  readonly links: readonly LinkItem[];
};

export interface ProjectDescription {
  readonly concise?: ConciseProject;
  readonly detailed?: DetailedProject;
  readonly id?: string;
  readonly title: string;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
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

export interface LinkItem {
  readonly label: string;
  readonly href: string;
}

export interface SkillSection {
  readonly title: string;
  readonly groups: readonly SkillGroup[];
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface BackgroundGroup {
  readonly title: string;
  readonly tags: readonly string[];
}
