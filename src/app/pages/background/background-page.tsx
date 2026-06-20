import {
  Card,
  ExternalLink,
  PageContainer,
  Typography,
  UnorderedList,
} from '@components';
import type { ReactNode } from 'react';

import { TagCard } from './components';
import {
  ADDITIONAL_LEARNING_ITEMS,
  ADDITIONAL_LEARNING_PARAGRAPHS,
  EDUCATION_HIGHLIGHTS,
  TAG_CARD_DATA,
  THESIS_LINKS,
} from './data';

export function BackgroundPage(): ReactNode {
  return (
    <PageContainer title='Background'>
      <div className='grid gap-4 lg:grid-cols-6'>
        <Card className='md:col-span-3 lg:col-span-3' padding='large'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Typography variant='card-title-accent'>
                Formal Education
              </Typography>
              <Typography variant='heading-2'>
                Faculty of Electrical Engineering and Computing (FER),
                University of Zagreb
              </Typography>
              <Typography variant='body'>
                Graduate Engineer of Computing
              </Typography>
            </div>

            <UnorderedList items={EDUCATION_HIGHLIGHTS} />

            <Card variant='highlight' padding='medium'>
              <div className='flex flex-col gap-3'>
                <Typography variant='heading-3'>Related links</Typography>
                <ul className='flex flex-col gap-2'>
                  {THESIS_LINKS.map((link) => {
                    return (
                      <li key={link.href}>
                        <ExternalLink
                          variant='highlight'
                          href={link.href}
                          label={link.label}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Card>
          </div>
        </Card>

        <Card className='md:col-span-3 lg:col-span-3' padding='large'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <Typography variant='card-title-accent'>
                Additional Learning
              </Typography>
              <Typography variant='heading-2'>
                Structured learning outside formal education
              </Typography>
            </div>

            <Typography variant='body'>
              <div className='flex flex-col gap-2'>
                {ADDITIONAL_LEARNING_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Typography>

            <div className='flex flex-col gap-4'>
              {ADDITIONAL_LEARNING_ITEMS.map((item) => {
                return (
                  <Card key={item.title} variant='inner' padding='small'>
                    <div className='flex flex-col gap-2'>
                      <Typography variant='heading-4'>{item.title}</Typography>
                      <Typography variant='body'>{item.text}</Typography>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>

        {TAG_CARD_DATA.map((data) => (
          <TagCard key={data.title} {...data} />
        ))}
      </div>
    </PageContainer>
  );
}
