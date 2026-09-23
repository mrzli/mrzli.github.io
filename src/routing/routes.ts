import { index, route, type RouteConfig } from '@react-router/dev/routes';

import { PAGE_PATHS } from './page-paths';

export default [
  index('routing/pages/home.tsx'),
  route(PAGE_PATHS.experience, 'routing/pages/experience.tsx'),
  route(PAGE_PATHS.skills, 'routing/pages/skills.tsx'),
  route(PAGE_PATHS.projects, 'routing/pages/projects.tsx'),
  route(PAGE_PATHS.background, 'routing/pages/background.tsx'),
  route(PAGE_PATHS.values, 'routing/pages/values.tsx'),
  route('*', 'routing/pages/not-found.tsx'),
] satisfies RouteConfig;
