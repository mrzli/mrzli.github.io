import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { ExperienceSection } from './components';
import { EXPERIENCE_SECTIONS } from './data';

export function TestPage(): ReactNode {
  return (
    <PageContainer title='Experience'>
      <div className='flex flex-col gap-12'>
        <Typography variant='body'>
          <div className='flex flex-col gap-2'>
            <p>
              Here is a list of most of my professinal experience - paid projects for end clients.
            </p>
            <p>List is not exhaustive, but most of the significant projects are mentioned.</p>
          </div>
        </Typography>
        <div className='flex flex-col gap-10'>
          {EXPERIENCE_SECTIONS.map((section) => (
            <ExperienceSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
