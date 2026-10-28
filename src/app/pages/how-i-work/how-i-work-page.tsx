import { PageContainer } from '@components';
import type { ReactNode } from 'react';

import { WorkSectionCard } from './components';
import { WORK_SECTIONS } from './data';

export function HowIWorkPage(): ReactNode {
  return (
    <PageContainer title='How I Work'>
      <div className='flex flex-col gap-4'>
        {WORK_SECTIONS.map((section) => (
          <WorkSectionCard key={section.label} {...section} />
        ))}
      </div>
    </PageContainer>
  );
}
