import { NavLink, ThemeToggle } from '@components';
import { Icon } from '@iconify/react';
import { type ReactNode, useId, useRef, useState } from 'react';

import { cn } from '@/app/util';
import { useHideOnScroll } from '@/hooks';

export interface NavItem {
  readonly to: string;
  readonly label: string;
}

export interface NavProps {
  readonly items: readonly NavItem[];
}

export function Nav({ items }: NavProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const isHidden = useHideOnScroll(isOpen);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = (): void => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      aria-label='Main navigation'
      className={cn(
        'pointer-events-none fixed inset-x-4 top-0 z-20 transition-transform duration-200 has-focus-visible:translate-y-0 motion-reduce:transition-none md:pointer-events-auto md:sticky md:inset-x-auto md:translate-y-0 md:border-b md:border-slate-200 md:bg-slate-50 md:dark:border-slate-800 md:dark:bg-slate-950',
        isHidden && '-translate-y-full',
      )}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          event.preventDefault();
          closeMenu();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <div className='flex items-center justify-end gap-2 py-2 *:pointer-events-auto md:justify-between'>
        <div className='hidden flex-1 items-center gap-1 md:flex'>
          {items.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <button
          ref={menuButtonRef}
          type='button'
          onClick={toggleMenu}
          className='flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-slate-50/90 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 md:hidden dark:bg-slate-950/90 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:outline-cyan-300'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          <Icon icon={isOpen ? 'mdi:close' : 'mdi:menu'} className='h-5 w-5' />
        </button>
        <div className='rounded-lg bg-slate-50/90 md:bg-transparent dark:bg-slate-950/90 md:dark:bg-transparent'>
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div
          id={menuId}
          className='pointer-events-auto absolute inset-x-0 top-full flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto overscroll-contain rounded-b-xl border border-slate-200 bg-slate-50 p-2 shadow-md md:hidden dark:border-slate-800 dark:bg-slate-950'
        >
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
