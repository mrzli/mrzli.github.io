import type { MetaDescriptor } from 'react-router';

import { getPageMetadata } from '../page-metadata';
import { PAGE_PATHS } from '../page-paths';

export { SkillsPage as default } from '@/app/pages/skills/skills-page';

export function meta(): MetaDescriptor[] {
  return getPageMetadata(PAGE_PATHS.skills);
}
