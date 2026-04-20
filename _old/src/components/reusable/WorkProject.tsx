import React from 'react';
import { GmList } from './GmList';
import { GmLink } from './GmLink';

export interface LinkData {
  readonly label: string;
  readonly url: string;
}

export interface WorkProjectProps {
  readonly description: string;
  readonly tech?: string;
  readonly role?: string;
  readonly links?: readonly LinkData[];
}

export function WorkProject({
  description,
  tech,
  role,
  links,
}: WorkProjectProps): React.ReactElement {
  const detailsElement =
    tech || role || links ? (
      <GmList>
        {tech && <li>Tech used: {tech}</li>}
        {role && <li>My role: {role}</li>}
        {links && (
          <li className={'space-x-1'}>
            <span>Links:</span>
            {links.map((link, index) => (
              <GmLink key={index} href={link.url} openInNewTab={true}>
                {link.label}
              </GmLink>
            ))}
          </li>
        )}
      </GmList>
    ) : undefined;

  return (
    <div className={'my-6'}>
      <p className={'my-2 font-semibold'}>{description}</p>
      {detailsElement}
    </div>
  );
}
