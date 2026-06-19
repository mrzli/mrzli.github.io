import {
  Card,
  ExternalLink,
  PageContainer,
  Tag,
  Typography,
  UnorderedList,
} from '@components';
import type { ReactNode } from 'react';

import type { LinkItem } from '../types';

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

        {TAG_CARD_TAGS.map((tags) => getTagCard(tags))}
      </div>
    </PageContainer>
  );
}

function getTagCard(tags: readonly string[]): ReactNode {
  return (
    <Card className='lg:col-span-2' padding='medium'>
      <div className='flex flex-col gap-3'>
        <Typography variant='card-title-muted'>Driver's license</Typography>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Card>
  );
}

const EDUCATION_HIGHLIGHTS: readonly string[] = [
  'Five year course, total 284 ECTS credits.',
  'Gives good foundation in mathematics, physics, and electrical engineering in the first two years.',
  'Later part is focused on programming, computer science, and software engineering.',
  'Graduation thesis was in the domain of computer graphics - a BVH animation viewer that parses motion capture files and renders the animation.',
];

const THESIS_LINKS: readonly LinkItem[] = [
  {
    href: 'https://www.fer.unizg.hr/en',
    label: 'Faculty of Electrical Engineering and Computing (FER)',
  },
  {
    href: 'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html',
    label: 'Short summary of the thesis on the faculty site',
  },
  {
    href: 'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc',
    label: 'Full thesis (.doc file)',
  },
  {
    href: 'https://github.com/mrzli/bvhviewer',
    label: 'Source code for the thesis application',
  },
  {
    href: 'https://youtu.be/7u4C-OBQZIk',
    label: 'Short video showing the thesis application',
  },
];

interface AdditionalLearningItem {
  readonly title: string;
  readonly text: string;
}

const ADDITIONAL_LEARNING_PARAGRAPHS: readonly string[] = [
  'Here are some online courses I took on Coursera, Udemy, Frontend Masters, and others.',
  'I did it for personal interest, or to learn something specific for work. It usually served the goal of introducing me to a framework, or giving me a deeper knowledge of a particular programming or tooling subject.',
  'This list is not exhaustive.',
];

const ADDITIONAL_LEARNING_ITEMS: readonly AdditionalLearningItem[] = [
  {
    title: 'Frameworks and Libraries',
    text: 'React, Angular, Vue, Node, RxJs.',
  },
  {
    title: 'Tooling',
    text: 'Vim, Bash, Docker, software development machine setup.',
  },
  {
    title: 'Deep Dives',
    text: 'Some courses from the "Hard Parts" series on Frontend Masters.',
  },
  {
    title: 'Other Topics',
    text: 'Compilers (simple ones), code generation, foundational machine learning course on Coursera, some algorithms and data structures courses, Data Visualization (D3), some economics and statistics classes.',
  },
];

const LOCATIONS: readonly string[] = ['Zagreb, Croatia'];

const LANGUAGES: readonly string[] = ['Croatian - native', 'English - fluent'];

const DRIVER_LICENSE_CATEGORIES: readonly string[] = ['AM', 'B', 'F', 'G'];

const TAG_CARD_TAGS: readonly (readonly string[])[] = [
  LOCATIONS,
  LANGUAGES,
  DRIVER_LICENSE_CATEGORIES,
];
