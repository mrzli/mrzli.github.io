import type { MetaDescriptor } from 'react-router';

import { PROFILE } from '@/content/profile';

export { CalculatorsPage as default } from '@/app/pages/calculators/calculators-page';

export function meta(): MetaDescriptor[] {
  return [{ title: `Calculators | ${PROFILE.name}` }, { name: 'robots', content: 'noindex' }];
}
