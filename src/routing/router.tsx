import { createBrowserRouter, Navigate } from 'react-router';

import { App } from '../app/app';
import { BackgroundPage } from '../app/pages/background/background-page';
import { ExperiencePage } from '../app/pages/experience-page';
import { HomePage } from '../app/pages/home/home-page';
import { ProjectsPage } from '../app/pages/projects-page';
import { SkillsPage } from '../app/pages/skills-page';
import { TestPage } from '../app/pages/test-page';

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
