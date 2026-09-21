import type { ExperienceKey, ExperienceProjectKey } from '../experience-keys';
import type { MonthYear } from './date';
import type { ProjectDescription } from './project';

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
