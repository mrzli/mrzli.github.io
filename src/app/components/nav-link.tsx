import type { FC, ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
  readonly to: string;
  readonly children: ReactNode;
}

export const NavLink: FC<Props> = ({ to, children }) => {
  return (
    <Link
      className='text-gray-600 transition-colors outline-none hover:text-gray-900 hover:underline'
      to={to}
    >
      {children}
    </Link>
  );
};
