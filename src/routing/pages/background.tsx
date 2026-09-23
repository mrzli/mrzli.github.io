import type { MetaDescriptor } from 'react-router';

import { getPageMetadata } from '../page-metadata';
import { PAGE_PATHS } from '../page-paths';

export { BackgroundPage as default } from '@/app/pages/background/background-page';

export function meta(): MetaDescriptor[] {
  return getPageMetadata(PAGE_PATHS.background);
}
