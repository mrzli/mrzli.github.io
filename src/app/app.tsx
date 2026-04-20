import type { CSSProperties, FC } from 'react';
import { Link, Outlet } from 'react-router';

const navStyle: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
};

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: '#2563eb',
};

export const App: FC = () => {
  return (
    <div>
      <nav style={navStyle}>
        <Link style={linkStyle} to=''>
          Intro
        </Link>
        <Link style={linkStyle} to='work-history'>
          Work History
        </Link>
        <Link style={linkStyle} to='education'>
          Education
        </Link>
        <Link style={linkStyle} to='skills-overview'>
          Skills Overview
        </Link>
        <Link style={linkStyle} to='personal-projects'>
          Personal Projects
        </Link>
        <Link style={linkStyle} to='personal-info'>
          Personal Info
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
