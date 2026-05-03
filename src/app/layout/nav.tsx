import { Icon } from '@iconify/react';
import { type FC, useState } from 'react';

import { NavLink } from '../components/nav-link';
import { ThemeToggle } from '../components/theme-toggle';

export const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className='flex items-center p-4'>
        <div className='hidden flex-1 items-center gap-4 md:flex'>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className='flex-1 md:hidden' />
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={toggleMenu}
            className='cursor-pointer bg-transparent p-1 text-slate-600 transition-colors hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:text-white'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <Icon
              icon={isOpen ? 'mdi:close' : 'mdi:menu'}
              className='h-5 w-5'
            />
          </button>
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div className='flex flex-col gap-3 px-4 pb-4 md:hidden'>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

interface NavItem {
  readonly to: string;
  readonly label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: '', label: 'Intro' },
  { to: 'work-history', label: 'Work History' },
  { to: 'education', label: 'Education' },
  { to: 'skills-overview', label: 'Skills Overview' },
  { to: 'personal-projects', label: 'Personal Projects' },
  { to: 'personal-info', label: 'Personal Info' },
  { to: 'example', label: 'Example' },
];
