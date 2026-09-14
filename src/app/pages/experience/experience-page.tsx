import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { ExperienceSection } from './components';
import { EXPERIENCE_SECTIONS } from './data';

export function ExperiencePage(): ReactNode {
  return (
    <PageContainer title='Experience'>
      <div className='flex flex-col gap-12'>
        <Typography variant='body'>
          <div className='flex flex-col gap-2'>
            <p>Selected paid client projects from my professional experience.</p>
            <p>This list covers most of my significant projects, but is not exhaustive.</p>
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
