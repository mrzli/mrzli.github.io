import { Navigate, type RouteObject } from 'react-router';

import { ValuesPage } from '@/app/pages/values/values-page';

import { BackgroundPage } from '../app/pages/background/background-page';
import { ExperiencePage } from '../app/pages/experience/experience-page';
import { HomePage } from '../app/pages/home/home-page';
import { ProjectsPage } from '../app/pages/projects/projects-page';
import { SkillsPage } from '../app/pages/skills/skills-page';

export const PAGE_ROUTES: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'experience',
    element: <ExperiencePage />,
  },
  {
    path: 'skills',
    element: <SkillsPage />,
  },
  {
    path: 'projects',
    element: <ProjectsPage />,
  },
  {
    path: 'background',
    element: <BackgroundPage />,
  },
  {
    path: 'values',
    element: <ValuesPage />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
];
