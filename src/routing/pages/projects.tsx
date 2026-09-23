import type { MetaDescriptor } from 'react-router';

import { getPageMetadata } from '../page-metadata';
import { PAGE_PATHS } from '../page-paths';

export { ProjectsPage as default } from '@/app/pages/projects/projects-page';

export function meta(): MetaDescriptor[] {
  return getPageMetadata(PAGE_PATHS.projects);
}
