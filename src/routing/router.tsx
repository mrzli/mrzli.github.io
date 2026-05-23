import { createBrowserRouter, Navigate } from 'react-router';

import { App } from '../app/app';
import { BackgroundPage } from '../app/pages/background-page';
import { HomePage } from '../app/pages/home/home-page';
import { PersonalProjectsPage } from '../app/pages/personal-projects-page';
import { SkillsOverviewPage } from '../app/pages/skills-overview-page';
import { TestPage } from '../app/pages/test-page';
import { WorkHistoryPage } from '../app/pages/work-history-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'experience',
        element: <WorkHistoryPage />,
      },
      {
        path: 'skills',
        element: <SkillsOverviewPage />,
      },
      {
        path: 'projects',
        element: <PersonalProjectsPage />,
      },
      {
        path: 'background',
        element: <BackgroundPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: '*',
        element: <Navigate to='/' replace />,
      },
    ],
  },
]);
