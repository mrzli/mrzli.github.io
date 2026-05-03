import type { FC } from 'react';
import { Outlet } from 'react-router';

import { Layout } from './layout/layout';
import { Nav } from './layout/nav';

export const App: FC = () => {
  return (
    <Layout>
      <Nav />
      <Outlet />
    </Layout>
  );
};
