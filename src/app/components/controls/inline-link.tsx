import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

const INLINE_LINK_CLASS_NAME =
  'rounded-sm font-medium text-amber-700 underline decoration-amber-400 underline-offset-4 transition hover:text-amber-800 hover:decoration-amber-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 dark:text-cyan-300 dark:decoration-cyan-700 dark:hover:text-cyan-200 dark:hover:decoration-cyan-500 dark:focus-visible:outline-cyan-300';

export interface InlineLinkProps {
  readonly href: string;
  readonly children: ReactNode;
}

export function InlineLink({ href, children }: InlineLinkProps): ReactNode {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={INLINE_LINK_CLASS_NAME}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target='_blank' rel='noreferrer' className={INLINE_LINK_CLASS_NAME}>
      {children}
      <Icon
        icon='mdi:arrow-top-right'
        aria-hidden='true'
        className='ml-0.5 inline-block size-3.5 align-baseline'
      />
    </a>
  );
}
