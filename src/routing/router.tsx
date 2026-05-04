import { createBrowserRouter, Navigate } from 'react-router';

import { App } from '../app/app';
import { BackgroundPage } from '../app/background-page';
import { HomePage } from '../app/home-page';
import { PersonalProjectsPage } from '../app/personal-projects-page';
import { SkillsOverviewPage } from '../app/skills-overview-page';
import { WorkHistoryPage } from '../app/work-history-page';

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
        path: 'work-history',
        element: <Navigate to='/experience' replace />,
      },
      {
        path: 'skills-overview',
        element: <Navigate to='/skills' replace />,
      },
      {
        path: 'personal-projects',
        element: <Navigate to='/projects' replace />,
      },
      {
        path: 'education',
        element: <Navigate to='/background' replace />,
      },
      {
        path: 'personal-info',
        element: <Navigate to='/background' replace />,
      },
      {
        path: 'example',
        element: <Navigate to='/' replace />,
      },
    ],
  },
]);
