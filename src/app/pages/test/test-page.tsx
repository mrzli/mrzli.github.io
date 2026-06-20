import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { SkillsSection } from './components';
import { SKILLS_SECTIONS } from './data';

export function TestPage(): ReactNode {
  return (
    <PageContainer title='Skills'>
      <div className='flex flex-col gap-6'>
        <Typography variant='body'>
          <div className='flex flex-col gap-2'>
            <p>
              A list of various technologies and tools I worked with throughout
              the years, in form of tags.
            </p>
            <p>
              The data is separated into sections, from greatest relevance -
              recent, extensive experience - down to technologies I did not work
              on recently, or have limited experience with.
            </p>
          </div>
        </Typography>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {SKILLS_SECTIONS.map((section) => (
            <SkillsSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
