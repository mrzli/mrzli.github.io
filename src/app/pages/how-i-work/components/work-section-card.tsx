import {
  Card,
  CardHeader,
  ProseParagraphs,
  RelatedLinks,
  SPLIT_LAYOUT_CLASS_NAME,
  Subsection,
} from '@components';
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
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          <CardHeader label={label} title={title} />
          <div className={SPLIT_LAYOUT_CLASS_NAME}>
            <div className='lg:col-start-2'>
              <ProseParagraphs paragraphs={paragraphs} />
            </div>
          </div>
        </div>

        {subsections.map((subsection) => (
          <div
            key={subsection.title}
            className='border-t border-slate-200 pt-8 dark:border-slate-800'
          >
            <Subsection split {...subsection} />
          </div>
        ))}

        {links.length > 0 && <RelatedLinks links={links} split />}
      </div>
    </Card>
  );
}
