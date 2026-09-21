import type { LinkItem } from './links';
import type { ProjectDescription } from './project';

export type PersonalProject = ProjectDescription & {
  readonly links: readonly LinkItem[];
};
