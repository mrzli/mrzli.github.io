import type { FC, ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
  readonly to: string;
  readonly children: ReactNode;
}

export const NavLink: FC<Props> = ({ to, children }) => {
  return (
    <Link className='gm-nav-link' to={to}>
      {children}
    </Link>
  );
};
