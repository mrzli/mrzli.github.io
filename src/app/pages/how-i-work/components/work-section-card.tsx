import { Card, CardHeader, ProseParagraphs, RelatedLinks, Subsection } from '@components';
import type { ReactNode } from 'react';

import type { WorkSection } from '../data';

export type WorkSectionCardProps = WorkSection;

export function WorkSectionCard({
  label,
  title,
  paragraphs,
  subsections,
  links,
}: WorkSectionCardProps): ReactNode {
  return (
    <Card as='section' padding='large'>
      <div className='flex max-w-3xl flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <CardHeader label={label} title={title} />
          <ProseParagraphs paragraphs={paragraphs} />
        </div>

        {subsections.length > 0 && (
          <div className='flex flex-col gap-5'>
            {subsections.map((subsection) => (
              <Subsection key={subsection.title} {...subsection} />
            ))}
          </div>
        )}

        {links.length > 0 && <RelatedLinks links={links} />}
      </div>
    </Card>
  );
}
