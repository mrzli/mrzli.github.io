import { MainContainer, Nav, type NavItem } from '@components';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

export function App(): ReactNode {
  return (
    <MainContainer>
      <Nav items={NAV_ITEMS} />
      <Outlet />
    </MainContainer>
  );
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: '', label: 'Home' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'background', label: 'Background' },
  { to: 'values', label: 'Values' },
  { to: 'test', label: 'Test' },
];
