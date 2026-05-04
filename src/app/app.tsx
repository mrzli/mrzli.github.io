import type { FC } from 'react';
import { Outlet } from 'react-router';

import { MainContainer } from './components/layout/main-container';
import { Nav } from './components/layout/nav';

export const App: FC = () => {
  return (
    <MainContainer>
      <Nav />
      <Outlet />
    </MainContainer>
  );
};
