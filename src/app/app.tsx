import type { FC } from 'react';
import { Outlet } from 'react-router';

import { NavLink } from './components/nav-link';
import { Layout } from './layout/layout';

export const App: FC = () => {
  return (
    <Layout>
      <nav className='flex gap-4 p-4'>
        <NavLink to=''>Intro</NavLink>
        <NavLink to='work-history'>Work History</NavLink>
        <NavLink to='education'>Education</NavLink>
        <NavLink to='skills-overview'>Skills Overview</NavLink>
        <NavLink to='personal-projects'>Personal Projects</NavLink>
        <NavLink to='personal-info'>Personal Info</NavLink>
        <NavLink to='example'>Example</NavLink>
      </nav>
      <Outlet />
    </Layout>
  );
};
