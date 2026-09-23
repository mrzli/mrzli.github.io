import type { MetaDescriptor } from 'react-router';

import { PROFILE } from '@/content/profile';

export { ValuesPage as default } from '@/app/pages/values/values-page';

export function meta(): MetaDescriptor[] {
  return [{ title: `Values | ${PROFILE.name}` }, { name: 'robots', content: 'noindex' }];
}
