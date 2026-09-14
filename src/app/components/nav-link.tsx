import type { ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router';

import { cn } from '../util';

export interface NavLinkProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly onClick?: () => void;
}

export function NavLink({ to, children, onClick }: NavLinkProps): ReactNode {
  return (
    <RouterNavLink
      end
      className={({ isActive }) =>
        cn(
          'inline-flex min-h-11 items-center rounded-lg px-3 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:outline-cyan-300',
          isActive &&
            'bg-amber-50 text-amber-800 underline decoration-amber-600 decoration-2 underline-offset-8 dark:bg-amber-950/30 dark:text-amber-300 dark:decoration-amber-300',
        )
      }
      to={to}
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  );
}
