import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { SkillsSection } from './components';
import { SKILLS_SECTIONS } from './data';

export function SkillsPage(): ReactNode {
  return (
    <PageContainer title='Skills'>
      <div className='flex flex-col gap-12'>
        <Typography variant='body'>
          <div className='flex flex-col gap-2'>
            <p>Technologies and tools I have used, grouped by depth and recency of experience.</p>
            <p>
              <span className='font-bold'>Extensive experience</span>: I have used the technology
              regularly, usually for several years, and built entire projects with it.
            </p>
            <p>
              <span className='font-bold'>Limited experience</span>: I have usually spent weeks or
              months exploring the technology on my own, sometimes using it professionally for
              specific tasks. It has not been part of my daily work, though my familiarity can still
              be substantial.
            </p>
            <p>
              This overview helps readers, including recruiters, find specific skills. It includes
              fundamentals such as HTML and CSS, even where that knowledge might be assumed.
              Learning a technology is often easier than understanding an existing codebase, its
              domain, or unfamiliar team practices, especially when onboarding is limited.
            </p>
            <p>
              I have used Windows, macOS, and Linux for several years each, often concurrently. I
              mainly used macOS over the past decade, but Linux has become my primary system for
              personal and professional use in recent years. I still use Windows when required.
            </p>
          </div>
        </Typography>
        <div className='flex flex-col gap-10'>
          {SKILLS_SECTIONS.map((section) => (
            <SkillsSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
