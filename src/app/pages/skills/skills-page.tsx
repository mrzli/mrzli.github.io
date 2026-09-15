import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { SkillsSection } from './components';
import { SKILLS_SECTIONS } from './data';

export function SkillsPage(): ReactNode {
  return (
    <PageContainer title='Skills'>
      <div className='flex flex-col gap-12'>
        <Typography variant='prose' as='div'>
          <div className='flex flex-col gap-4'>
            <p>Technologies and tools I have used, grouped by depth and recency of experience.</p>
            <p>
              <span className='font-bold'>Extensive experience</span>: Substantial hands-on
              experience through regular use.
            </p>
            <p>
              <span className='font-bold'>Limited experience</span>: Shorter exploration or use for
              specific tasks.
            </p>
          </div>
        </Typography>
        <div className='flex flex-col gap-10'>
          {SKILLS_SECTIONS.map((section) => (
            <SkillsSection key={section.title} {...section} />
          ))}
        </div>
        <section className='flex flex-col gap-4'>
          <Typography variant='heading-2'>Operating systems</Typography>
          <Typography variant='prose' as='div' className='space-y-4'>
            <p>
              I have years of experience with Windows, macOS, and Linux, often using them alongside
              each other. After mainly using macOS for a decade, I now use Linux as my primary
              system for work and personal use, and Windows when required.
            </p>
          </Typography>
        </section>
      </div>
    </PageContainer>
  );
}
