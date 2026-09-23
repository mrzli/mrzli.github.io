import type { MetaDescriptor } from 'react-router';

import { getPageMetadata } from '../page-metadata';
import { PAGE_PATHS } from '../page-paths';

export { HomePage as default } from '@/app/pages/home/home-page';

export function meta(): MetaDescriptor[] {
  return getPageMetadata(PAGE_PATHS.home);
}
