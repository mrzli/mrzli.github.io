import type { ExperienceProject } from './types';

export const EXPERIENCE_PROJECT_ANCHORS = {
  eloqua: 'oracle-eloqua-messaging',
  robotics: 'warehouse-robotics',
  fueling: 'mobile-fueling',
} as const;

export function getExperienceProjectAnchor(
  project: Pick<ExperienceProject, 'id' | 'contentKey'>,
): string {
  return project.id ?? project.contentKey;
}
