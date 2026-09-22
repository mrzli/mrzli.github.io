import { createBrowserRouter } from 'react-router';

import { App } from '../app/app';
import { PAGE_ROUTES } from './page-routes';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: PAGE_ROUTES,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
