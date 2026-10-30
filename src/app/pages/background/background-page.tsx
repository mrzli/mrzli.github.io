import {
  Card,
  CardHeader,
  PageContainer,
  ProseParagraphs,
  RelatedLinks,
  Subsection,
  Typography,
  UnorderedList,
} from '@components';
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
            <CardHeader
              label='Formal Education'
              title={EDUCATION.institution}
              subtitle={EDUCATION.qualification}
            />

            <Typography variant='prose' as='div'>
              <UnorderedList items={EDUCATION_HIGHLIGHTS} />
            </Typography>

            <RelatedLinks links={THESIS_LINKS} />
          </div>
        </Card>

        <Card padding='large'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <CardHeader
                label='Additional Learning'
                title='Structured learning outside formal education'
              />
              <ProseParagraphs paragraphs={ADDITIONAL_LEARNING_PARAGRAPHS} />
            </div>

            <div className='flex flex-col gap-8 border-t border-slate-200 pt-5 dark:border-slate-800'>
              {ADDITIONAL_LEARNING_ITEMS.map((item) => (
                <Subsection key={item.title} title={item.title} paragraphs={[item.text]} />
              ))}
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
