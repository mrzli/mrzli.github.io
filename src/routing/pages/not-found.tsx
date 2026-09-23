import type { MetaDescriptor } from 'react-router';

export { NotFoundPage as default } from '@/app/pages/not-found/not-found-page';

export function meta(): MetaDescriptor[] {
  return [{ name: 'robots', content: 'noindex' }];
}
