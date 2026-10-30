import { PageContainer } from '@components';
import type { ReactNode } from 'react';

import { chapterAttributes } from '@/hooks';

import { WorkSectionCard } from './components';
import { WORK_SECTIONS } from './data';

export function HowIWorkPage(): ReactNode {
  return (
    <PageContainer title='How I Work'>
      <div className='flex flex-col gap-4'>
        {WORK_SECTIONS.map((section) => (
          <div key={section.label} {...chapterAttributes(section.label)}>
            <WorkSectionCard {...section} />
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
