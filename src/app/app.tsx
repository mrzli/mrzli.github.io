import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

import { MainContainer } from './components/layout/main-container';
import { Nav } from './components/layout/nav';

export function App(): ReactNode {
  return (
    <MainContainer>
      <Nav />
      <Outlet />
    </MainContainer>
  );
}
