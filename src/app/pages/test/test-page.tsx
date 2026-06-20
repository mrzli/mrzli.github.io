import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { ProjectCard } from './components';
import { PROJECT_ITEMS } from './data';

export function TestPage(): ReactNode {
  return (
    <PageContainer title='Projects'>
      <div className='flex flex-col gap-6'>
        <Typography variant='body'>Projects I did in my free time.</Typography>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {PROJECT_ITEMS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
