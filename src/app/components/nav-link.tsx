import type { FC, ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
  readonly to: string;
  readonly children: ReactNode;
}

export const NavLink: FC<Props> = ({ to, children }) => {
  return (
    <Link
      className='text-slate-600 transition-colors outline-none hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-white'
      to={to}
    >
      {children}
    </Link>
  );
};
