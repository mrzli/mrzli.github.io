import type { MetaDescriptor } from 'react-router';

import { PROFILE } from '@/content/profile';

export { NotFoundPage as default } from '@/app/pages/not-found/not-found-page';

export function meta(): MetaDescriptor[] {
  return [{ title: `Page not found | ${PROFILE.name}` }, { name: 'robots', content: 'noindex' }];
}
