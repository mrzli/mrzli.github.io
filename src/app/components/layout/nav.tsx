import { Icon } from '@iconify/react';
import { type ReactNode, useState } from 'react';

import { NavLink, ThemeToggle } from '../../components';

export function Nav(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className='flex items-center justify-end gap-2 p-4 md:justify-between'>
        <div className='hidden flex-1 items-center gap-4 md:flex'>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <button
          type='button'
          onClick={toggleMenu}
          className='cursor-pointer bg-transparent p-1 text-slate-600 transition-colors hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:text-white'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <Icon icon={isOpen ? 'mdi:close' : 'mdi:menu'} className='h-5 w-5' />
        </button>
        <ThemeToggle />
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
}

interface NavItem {
  readonly to: string;
  readonly label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: '', label: 'Home' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'background', label: 'Background' },
  { to: 'test', label: 'Test' },
];
