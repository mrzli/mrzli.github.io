import type { Config } from '@react-router/dev/config';

import { STATIC_PAGE_PATHS } from './src/routing/page-paths';

export default {
  appDirectory: 'src',
  buildDirectory: '.react-router/build',
  basename: '/',
  ssr: false,
  prerender: [...STATIC_PAGE_PATHS],
  routeDiscovery: { mode: 'initial' },
} satisfies Config;
