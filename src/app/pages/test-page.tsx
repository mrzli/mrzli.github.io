import {
  Card,
  ExternalLink,
  PageContainer,
  TagList,
  Typography,
} from '@components';
import type { ReactNode } from 'react';

import type { LinkItem } from '../types';

export function TestPage(): ReactNode {
  return (
    <PageContainer title='Projects'>
      <div className='flex flex-col gap-6'>
        <Typography variant='body'>Projects I did in my free time.</Typography>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <Card padding='large'>
            <div className='flex flex-col gap-4'>
              <Typography variant='card-title-accent'>
                Personal Website
              </Typography>
              <Typography variant='body'>
                You are currently viewing it. It is just a simple static website
                displaying information relevant to my professional life.
              </Typography>
              <TagList tags={PROJECT_PERSONAL_WEBSITE_TAGS} />

              <Card variant='inner' padding='small'>
                <div className='flex flex-col gap-2'>
                  <Typography variant='heading-4'>My role</Typography>
                  <Typography variant='body'>
                    I did all the development. The site is static and very
                    simple. All of the content of the pages is simply hardcoded
                    into the components.
                  </Typography>
                </div>
              </Card>

              <Card variant='highlight' padding='small'>
                <ul className='flex flex-col gap-2'>
                  {PROJECT_PERSONAL_WEBSITE_LINKS.map((link) => {
                    return (
                      <div key={link.href} className='flex'>
                        <ExternalLink
                          variant='highlight'
                          href={link.href}
                          label={link.label}
                        />
                      </div>
                    );
                  })}
                </ul>
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
                        <Typography variant='heading-4'>
                          {item.title}
                        </Typography>
                        <Typography variant='body'>{item.text}</Typography>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}

const PROJECT_PERSONAL_WEBSITE_TAGS: readonly string[] = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Bun',
  'ESLint',
  'Prettier',
  'Storybook',
];

const PROJECT_PERSONAL_WEBSITE_LINKS: readonly LinkItem[] = [
  {
    href: 'https://mrzli.github.io/',
    label: 'Site',
  },
  {
    href: 'https://github.com/mrzli/mrzli.github.io',
    label: 'Source Code',
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
