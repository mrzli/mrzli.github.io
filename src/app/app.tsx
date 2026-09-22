import { MainContainer, Nav, type NavItem } from '@components';
import type { ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

import { useSwipeNavigation } from '@/hooks';

export function App(): ReactNode {
  const swipeHandlers = useSwipeNavigation(NAV_ITEMS);
  return (
    <MainContainer>
      <Nav items={NAV_ITEMS} />
      <div {...swipeHandlers}>
        <Outlet />
      </div>
      <ScrollRestoration />
    </MainContainer>
  );
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: '', label: 'Home' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'background', label: 'Background' },
  // { to: 'values', label: 'Values' },
];
