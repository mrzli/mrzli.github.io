import type { MetaDescriptor } from 'react-router';

import { getPageMetadata } from '../page-metadata';
import { PAGE_PATHS } from '../page-paths';

export { HowIWorkPage as default } from '@/app/pages/how-i-work/how-i-work-page';

export function meta(): MetaDescriptor[] {
  return getPageMetadata(PAGE_PATHS.howIWork);
}
