import { Card, ExternalLink, PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import {
  AGENTIC_DEVELOPMENT_INTRO,
  AGENTIC_DEVELOPMENT_LINKS,
  AGENTIC_DEVELOPMENT_TOPICS,
} from './data';

export function HowIWorkPage(): ReactNode {
  return (
    <PageContainer title='How I Work'>
      <Card as='section' padding='large'>
        <div className='flex max-w-3xl flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <Typography variant='heading-2'>Agentic Development</Typography>
            <Typography variant='prose'>{AGENTIC_DEVELOPMENT_INTRO}</Typography>
          </div>

          <div className='flex flex-col gap-5'>
            {AGENTIC_DEVELOPMENT_TOPICS.map((topic) => {
              return (
                <section key={topic.title} className='flex flex-col gap-2'>
                  <Typography variant='heading-3'>{topic.title}</Typography>
                  <Typography variant='prose'>{topic.text}</Typography>
                </section>
              );
            })}
          </div>

          <ul className='flex flex-col gap-2 border-t border-slate-200 pt-5 dark:border-slate-800'>
            {AGENTIC_DEVELOPMENT_LINKS.map((link) => {
              return (
                <li key={link.href}>
                  <ExternalLink
                    variant='highlight'
                    href={link.href}
                    label={link.label}
                    className='rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 dark:focus-visible:outline-cyan-300'
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    </PageContainer>
  );
}
