import {
  Card,
  PageContainer,
  Tag,
  Typography,
  UnorderedList,
} from '@components';
import type { ReactNode } from 'react';

const thesisLinks = [
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
] as const;

const learningSources = [
  {
    source: 'Coursera',
    description:
      'Completed several courses focused on machine learning, algorithms, and data structures.',
  },
  {
    source: 'Udemy',
    description:
      'Took courses related to Angular, Vue, React, Node.js, Vim, Bash, and Docker, which map closely to day-to-day engineering work.',
  },
] as const;

const linkClassName =
  'text-sm font-medium text-amber-700 underline decoration-amber-400 underline-offset-4 transition hover:text-amber-800 hover:decoration-amber-500 dark:text-cyan-300 dark:decoration-cyan-700 dark:hover:text-cyan-200 dark:hover:decoration-cyan-500';

export function TestPage(): ReactNode {
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

            <Card
              className='border border-slate-200/80 bg-slate-100 dark:border-cyan-900 dark:bg-cyan-950/20'
              variant='inner'
            >
              <div className='flex flex-col gap-3'>
                <Typography variant='heading-3'>Related links</Typography>
                <ul className='flex flex-col gap-2'>
                  {thesisLinks.map((link) => {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target='_blank'
                          rel='noreferrer'
                          className={linkClassName}
                        >
                          {link.label} ↗
                        </a>
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

            <div className='flex flex-col gap-4'>
              {learningSources.map((item) => {
                return (
                  <div
                    key={item.source}
                    className='flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-950/70'
                  >
                    <Typography variant='heading-4'>{item.source}</Typography>
                    <Typography variant='body'>{item.description}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        <Card className='lg:col-span-2' padding='medium'>
          <div className='flex flex-col gap-3'>
            <Typography variant='card-title-muted'>Location</Typography>
            <div className='flex flex-wrap gap-2'>
              <Tag label='Zagreb, Croatia' />
            </div>
          </div>
        </Card>

        <Card className='lg:col-span-2' padding='medium'>
          <div className='flex flex-col gap-3'>
            <Typography variant='card-title-muted'>Languages</Typography>
            <div className='flex flex-wrap gap-2'>
              {LANGUAGES.map((language) => (
                <Tag key={language} label={language} />
              ))}
            </div>
          </div>
        </Card>

        <Card className='lg:col-span-2' padding='medium'>
          <div className='flex flex-col gap-3'>
            <Typography variant='card-title-muted'>Driver's license</Typography>
            <div className='flex flex-wrap gap-2'>
              {DRIVER_LICENSE_CATEGORIES.map((category) => (
                <Tag key={category} label={category} />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}

const EDUCATION_HIGHLIGHTS: readonly string[] = [
  'Five year course, total 284 ECTS credits.',
  'Built a strong foundation in mathematics, physics, and electrical engineering.',
  'The latter part of the program focused on programming, computer science, and software engineering.',
  'Graduation thesis in computer graphics: a BVH animation viewer that parses motion capture files and renders the animation.',
];

const LANGUAGES: readonly string[] = ['Croatian - native', 'English - fluent'];

const DRIVER_LICENSE_CATEGORIES: readonly string[] = ['AM', 'B', 'F', 'G'];
