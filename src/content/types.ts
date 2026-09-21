import type { ExperienceKey, ExperienceProjectKey } from './experience-keys';

export interface ExperienceEntry {
  readonly contentKey: ExperienceKey;
  readonly title: string;
  readonly location: string;
  readonly role: string;
  readonly from: DateRangeBound;
  readonly to: DateRangeBound;
  readonly projects: readonly ExperienceProject[];
}

export type ExperienceProject = ProjectDescription & {
  readonly contentKey: ExperienceProjectKey;
};

export type DateRangeBound = MonthYear | 'Present';

export interface MonthYear {
  readonly year: number;
  readonly month: number;
}

export type PersonalProject = ProjectDescription & {
  readonly links: readonly LinkItem[];
};

export interface ProjectDescription {
  readonly id?: string;
  readonly title: string;
  readonly text: readonly string[];
  readonly roleText: readonly string[];
  readonly tags: readonly string[];
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
