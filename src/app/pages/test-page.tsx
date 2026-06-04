import type { FC } from 'react';

import { Card } from '../components/layout/card';
import { Typography } from '../components/typography';

const educationHighlights = [
  'Five year course, total 284 ECTS credits.',
  'Built a strong foundation in mathematics, physics, and electrical engineering.',
  'The latter part of the program focused on programming, computer science, and software engineering.',
  'Graduation thesis in computer graphics: a BVH animation viewer that parses motion capture files and renders the animation.',
] as const;

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

const languages = ['Croatian - native', 'English - fluent'] as const;

const driverLicenseCategories = ['AM', 'B', 'F', 'G'] as const;

const linkClassName =
  'text-sm font-medium text-amber-700 underline decoration-amber-400 underline-offset-4 transition hover:text-amber-800 hover:decoration-amber-500 dark:text-cyan-300 dark:decoration-cyan-700 dark:hover:text-cyan-200 dark:hover:decoration-cyan-500';

export const TestPage: FC = () => {
  return (
    <div className='pt-6 pb-12'>
      <div className='flex flex-col gap-6'>
        <h1 className='border-l-4 border-amber-600 pl-3 text-xl font-semibold tracking-tight text-slate-800 uppercase dark:border-amber-300 dark:text-slate-100'>
          Background
        </h1>
        <div className='grid gap-4 lg:grid-cols-6'>
          <Card
            className='border-slate-300/80 bg-slate-50 shadow-md shadow-slate-200/70 md:col-span-3 lg:col-span-3 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/15'
            padding='large'
          >
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <span className='text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase dark:text-amber-300'>
                  Formal Education
                </span>
                <Typography variant='heading'>
                  Faculty of Electrical Engineering and Computing (FER),
                  University of Zagreb
                </Typography>
                <Typography
                  variant='body'
                  className='text-slate-700 dark:text-slate-300'
                >
                  Graduate Engineer of Computing
                </Typography>
              </div>

              <ul className='flex flex-col gap-3'>
                {educationHighlights.map((item) => {
                  return (
                    <li key={item} className='flex gap-3'>
                      <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-300' />
                      <Typography
                        variant='body'
                        className='text-slate-700 dark:text-slate-300'
                      >
                        {item}
                      </Typography>
                    </li>
                  );
                })}
              </ul>

              <Card
                className='border border-slate-200/80 bg-slate-100 dark:border-cyan-900 dark:bg-cyan-950/20'
                variant='inner'
              >
                <div className='flex flex-col gap-3'>
                  <Typography variant='card-title'>Related links</Typography>
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

          <Card
            className='border-slate-300/80 bg-slate-50 shadow-md shadow-slate-200/70 md:col-span-3 lg:col-span-3 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/15'
            padding='large'
          >
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <span className='text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase dark:text-amber-300'>
                  Additional Learning
                </span>
                <Typography variant='heading'>
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
                      <Typography variant='item-title'>
                        {item.source}
                      </Typography>
                      <Typography variant='body'>{item.description}</Typography>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          <div className='flex flex-col gap-3 rounded-2xl border border-slate-300/80 bg-slate-50 p-5 shadow-sm shadow-slate-200/70 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
            <dt className='text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Location
            </dt>
            <dd className='flex flex-wrap gap-2'>
              <span className='rounded-full border border-amber-600 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200'>
                Zagreb, Croatia
              </span>
            </dd>
          </div>

          <div className='flex flex-col gap-3 rounded-2xl border border-slate-300/80 bg-slate-50 p-5 shadow-sm shadow-slate-200/70 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
            <dt className='text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Languages
            </dt>
            <dd className='flex flex-wrap gap-2'>
              {languages.map((language) => {
                return (
                  <span
                    key={language}
                    className='rounded-full border border-amber-600 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200'
                  >
                    {language}
                  </span>
                );
              })}
            </dd>
          </div>

          <div className='flex flex-col gap-3 rounded-2xl border border-slate-300/80 bg-slate-50 p-5 shadow-sm shadow-slate-200/70 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
            <dt className='text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400'>
              Driver's license
            </dt>
            <dd className='flex flex-wrap gap-2'>
              {driverLicenseCategories.map((category) => {
                return (
                  <span
                    key={category}
                    className='rounded-full border border-amber-600 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200'
                  >
                    {category}
                  </span>
                );
              })}
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};
