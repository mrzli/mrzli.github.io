import { createBrowserRouter } from 'react-router';

import { App } from '../app/app';
import { EducationPage } from '../app/education-page';
import { IntroPage } from '../app/intro-page';
import { PersonalInfoPage } from '../app/personal-info-page';
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
        element: <IntroPage />,
      },
      {
        path: 'work-history',
        element: <WorkHistoryPage />,
      },
      {
        path: 'education',
        element: <EducationPage />,
      },
      {
        path: 'skills-overview',
        element: <SkillsOverviewPage />,
      },
      {
        path: 'personal-projects',
        element: <PersonalProjectsPage />,
      },
      {
        path: 'personal-info',
        element: <PersonalInfoPage />,
      },
    ],
  },
]);
