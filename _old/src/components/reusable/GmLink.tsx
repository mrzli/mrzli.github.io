import React from 'react';
import classnames from 'classnames';

export interface GmLinkProps {
  readonly href: string;
  readonly openInNewTab?: boolean;
  readonly classes?: string;
  readonly underline?: boolean;
  readonly children: React.ReactNode;
}

export function GmLink({
  href,
  openInNewTab,
  classes,
  underline,
  children,
}: GmLinkProps): React.ReactElement {
  const target = openInNewTab ? '_blank' : undefined;
  const rel = openInNewTab ? 'noopener noreferrer' : undefined;
  return (
    <a
      href={href}
      className={classnames(classes, { underline: underline ?? true })}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
