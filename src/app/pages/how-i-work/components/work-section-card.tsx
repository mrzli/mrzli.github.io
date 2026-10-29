import { Card, LinkList, Typography } from '@components';
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
          <Typography variant='card-title-accent' as='p'>
            {label}
          </Typography>
          <Typography variant='heading-2'>{title}</Typography>
          <Typography variant='prose' as='div' className='space-y-4'>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Typography>
        </div>

        {subsections.length > 0 && (
          <div className='flex flex-col gap-5'>
            {subsections.map((subsection) => {
              return (
                <section key={subsection.title} className='flex flex-col gap-2'>
                  <Typography variant='heading-3'>{subsection.title}</Typography>
                  <Typography variant='prose' as='div' className='space-y-4'>
                    {subsection.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </Typography>
                </section>
              );
            })}
          </div>
        )}

        {links.length > 0 && (
          <LinkList
            links={links}
            className='border-t border-slate-200 pt-5 dark:border-slate-800'
          />
        )}
      </div>
    </Card>
  );
}
