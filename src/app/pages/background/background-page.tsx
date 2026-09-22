import { Card, ExternalLink, PageContainer, Typography, UnorderedList } from '@components';
import type { ReactNode } from 'react';

import {
  ADDITIONAL_LEARNING_ITEMS,
  ADDITIONAL_LEARNING_PARAGRAPHS,
  EDUCATION,
  EDUCATION_HIGHLIGHTS,
  TAG_CARD_DATA,
  THESIS_LINKS,
} from '@/content/background';

import { TagCard } from './components';

export function BackgroundPage(): ReactNode {
  return (
    <PageContainer title='Background'>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card padding='large'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Typography variant='card-title-accent'>Formal Education</Typography>
              <Typography variant='heading-2'>{EDUCATION.institution}</Typography>
              <Typography variant='body'>{EDUCATION.qualification}</Typography>
            </div>

            <Typography variant='prose' as='div'>
              <UnorderedList items={EDUCATION_HIGHLIGHTS} />
            </Typography>

            <section className='flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-slate-800'>
              <Typography variant='heading-3'>Related links</Typography>
              <ul className='flex flex-col gap-2'>
                {THESIS_LINKS.map((link) => {
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
            </section>
          </div>
        </Card>

        <Card padding='large'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <Typography variant='card-title-accent'>Additional Learning</Typography>
              <Typography variant='heading-2'>
                Structured learning outside formal education
              </Typography>
            </div>

            <Typography variant='prose' as='div'>
              <div className='flex flex-col gap-4'>
                {ADDITIONAL_LEARNING_PARAGRAPHS.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Typography>

            <div className='flex flex-col gap-5 border-t border-slate-200 pt-5 dark:border-slate-800'>
              {ADDITIONAL_LEARNING_ITEMS.map((item) => {
                return (
                  <section key={item.title} className='flex flex-col gap-2'>
                    <Typography variant='heading-4' as='h3'>
                      {item.title}
                    </Typography>
                    <Typography variant='prose'>{item.text}</Typography>
                  </section>
                );
              })}
            </div>
          </div>
        </Card>

        <div className='grid gap-4 sm:grid-cols-2 md:col-span-2 xl:grid-cols-4'>
          {TAG_CARD_DATA.map((data) => (
            <TagCard key={data.title} {...data} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
