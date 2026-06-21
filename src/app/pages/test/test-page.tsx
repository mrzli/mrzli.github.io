import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { SkillsSection } from './components';
import { SKILLS_SECTIONS } from './data';

export function TestPage(): ReactNode {
  return (
    <PageContainer title='Skills'>
      <div className='flex flex-col gap-12'>
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
            <p>
              <span className='font-bold'>Extensive experience</span>: I worked
              a lot with the technology, usually for multiple years, and have
              built entire projects using it.
            </p>
            <p>
              <span className='font-bold'>Limited experience</span>: It usually
              means explored the technology on my own time and I spent weeks or
              months learning it. I sometimes even used it professionally, but
              only in some limited instances, not as part of daily routine. My
              familiarity with it can vary, but it is often significant.
            </p>
            <p>
              This page is here to give you a quick overview, and it might be
              useful for a recruiter to 'check out' his boxes. Many programmers
              will find listing languages such as HTML and CSS silly, as that
              knowledge is implied. Additionally, learningtom hougaa a new piece
              of technology is often the easiest thing you do on a project,
              significantly easier than learning the codebase, the domain, and
              occasionally - when that part is 'non-standard' and onboarding is
              lacking - the peculiarities and details of team processes and
              practices.
            </p>
            <p>
              It may seem that I am sometimes just randomly listing everything
              that comes to mind. For example for 'Operating Systems' I am
              listing all three major deskop operating systems. The reason is
              that I have used all three for multiple years each, often
              concurrently. In the past decade, I have mostly been using macOS
              but in recent years my primary OS is Linux - for personal use and
              professional work. I am also sometimes forced to use Windows, so
              that makes all of them.
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
