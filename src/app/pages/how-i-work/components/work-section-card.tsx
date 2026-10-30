import {
  Card,
  CardHeader,
  ProseParagraphs,
  RelatedLinks,
  SPLIT_LAYOUT_CLASS_NAME,
  Subsection,
} from '@components';
import type { ReactNode } from 'react';

import { cn } from '@/app/util';

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
      <div className='flex flex-col gap-8'>
        <div className={cn('flex flex-col gap-3', SPLIT_LAYOUT_CLASS_NAME)}>
          <CardHeader label={label} title={title} />
          <ProseParagraphs paragraphs={paragraphs} />
        </div>

        {subsections.map((subsection) => (
          <Subsection key={subsection.title} split {...subsection} />
        ))}

        {links.length > 0 && (
          <div className={SPLIT_LAYOUT_CLASS_NAME}>
            <div className='lg:col-start-2'>
              <RelatedLinks links={links} />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
