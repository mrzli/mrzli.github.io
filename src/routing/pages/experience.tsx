import type { MetaDescriptor } from 'react-router';

import { getPageMetadata } from '../page-metadata';
import { PAGE_PATHS } from '../page-paths';

export { ExperiencePage as default } from '@/app/pages/experience/experience-page';

export function meta(): MetaDescriptor[] {
  return getPageMetadata(PAGE_PATHS.experience);
}
