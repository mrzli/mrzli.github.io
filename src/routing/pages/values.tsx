import type { MetaDescriptor } from 'react-router';

export { ValuesPage as default } from '@/app/pages/values/values-page';

export function meta(): MetaDescriptor[] {
  return [{ name: 'robots', content: 'noindex' }];
}
