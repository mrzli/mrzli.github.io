import type { ReactNode } from 'react';
import { Link } from 'react-router';

export interface NavLinkProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly onClick?: () => void;
}

export function NavLink({ to, children, onClick }: NavLinkProps): ReactNode {
  return (
    <Link
      className='text-slate-600 transition-colors outline-none hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-white'
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
