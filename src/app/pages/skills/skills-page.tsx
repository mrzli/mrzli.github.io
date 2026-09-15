import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { OPERATING_SYSTEM_EXPERIENCE, SKILLS_SECTIONS } from '@/content/skills';

import { SkillsSection } from './components';

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
            <p>{OPERATING_SYSTEM_EXPERIENCE}</p>
          </Typography>
        </section>
      </div>
    </PageContainer>
  );
}
