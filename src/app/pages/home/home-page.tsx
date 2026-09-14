import { Card, ExternalLink, TagList, Typography } from '@components';
import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

import profileImage from '../../../assets/profile.jpg';
import { IconLink, RouteCard } from './components';
import { PRIMARY_TECHS, ROUTE_CARDS, WORK_HIGHLIGHTS } from './data';

export function HomePage(): ReactNode {
  const currentYear = new Date().getFullYear();

  return (
    <div className='space-y-8 pt-6 pb-12'>
      <Card as='section' padding='large' className='overflow-hidden sm:p-8'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem]'>
          <div className='space-y-6'>
            <Typography variant='card-title-accent' as='p'>
              Senior full-stack web developer
            </Typography>
            <div className='space-y-4'>
              <Typography variant='heading-1'>Goran Mržljak</Typography>
              <Typography variant='lead' className='max-w-2xl'>
                I build web applications and make complex codebases easier to work with.
              </Typography>
              <Typography variant='body' className='max-w-2xl'>
                My main tools are React, TypeScript, and Node.js. I work across the stack, from
                interfaces and APIs to databases, with experience taking projects from scratch to
                production and improving systems already in use.
              </Typography>
            </div>
            <TagList tags={PRIMARY_TECHS} />
            <div className='flex flex-wrap items-center gap-5'>
              <Link
                to='/experience'
                className='inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
              >
                View experience
                <Icon icon='mdi:arrow-right' aria-hidden='true' className='size-4' />
              </Link>
              <ExternalLink
                href={`${import.meta.env.BASE_URL}data/CV.pdf`}
                label='Read CV (PDF)'
                variant='highlight'
              />
            </div>
          </div>

          <div className='flex flex-col items-start gap-4 border-t border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 dark:border-slate-800'>
            <img
              alt='Goran Mržljak'
              src={profileImage}
              width={176}
              height={176}
              className='size-32 rounded-2xl object-cover sm:size-44'
            />
            <Typography variant='body' className='flex items-center gap-1.5'>
              <Icon icon='mdi:map-marker-outline' aria-hidden='true' className='size-4' />
              Zagreb, Croatia
            </Typography>
            <div className='flex flex-col items-start gap-2'>
              <a
                href='mailto:goran.mrzljak@gmail.com'
                className='text-sm font-medium break-all text-amber-700 hover:underline dark:text-cyan-300'
              >
                goran.mrzljak@gmail.com
              </a>
              <a href='tel:+385912243145' className='text-sm hover:underline'>
                +385 91 224 3145
              </a>
            </div>
            <div className='flex gap-3'>
              <IconLink
                to='https://www.linkedin.com/in/goran-mrzljak'
                icon='mdi:linkedin'
                label='LinkedIn'
              />
              <IconLink to='https://github.com/mrzli' icon='mdi:github' label='GitHub' />
              <IconLink
                to='https://stackoverflow.com/users/520229/mrzli'
                icon='mdi:stackoverflow'
                label='Stack Overflow'
              />
            </div>
          </div>
        </div>
        <dl className='mt-8 grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3 dark:border-slate-800'>
          <div>
            <Typography as='dt' variant='card-title-muted'>
              Professional experience
            </Typography>
            <Typography as='dd' variant='heading-3' className='mt-2'>
              {currentYear - 2008} years
            </Typography>
          </div>
          <div>
            <Typography as='dt' variant='card-title-muted'>
              Contract work
            </Typography>
            <Typography as='dd' variant='heading-3' className='mt-2'>
              {currentYear - 2016} years
            </Typography>
          </div>
          <div>
            <Typography as='dt' variant='card-title-muted'>
              Beyond web applications
            </Typography>
            <Typography as='dd' variant='heading-3' className='mt-2'>
              Desktop & mobile experience
            </Typography>
          </div>
        </dl>
      </Card>

      <section className='space-y-4'>
        <Typography variant='page-title' as='h2'>
          Selected work
        </Typography>
        <div className='grid gap-4 lg:grid-cols-3'>
          {WORK_HIGHLIGHTS.map((highlight) => (
            <Card key={highlight.title} as='article' className='space-y-3'>
              <Typography variant='card-title-accent' as='p'>
                {highlight.focus}
              </Typography>
              <Typography variant='heading-3'>{highlight.title}</Typography>
              <Typography variant='body'>{highlight.description}</Typography>
            </Card>
          ))}
        </div>
      </section>

      <div className='grid gap-6 lg:grid-cols-2'>
        <Card as='section' padding='large' className='space-y-4'>
          <Typography variant='heading-2'>Working together</Typography>
          <Typography variant='body'>
            I’m interested in hands-on senior development work, with a preference for React-focused
            frontend or balanced full-stack roles. I also bring substantial earlier experience with
            Kotlin, Java, and Spring Boot.
          </Typography>
          <Typography variant='body'>
            Alongside delivery, I contribute to architecture, code reviews, testing, and developer
            tooling. I’ve worked independently and in larger teams, including mentoring, onboarding,
            and interviewing developers.
          </Typography>
          <Card variant='highlight' padding='small' className='space-y-2'>
            <Typography variant='card-title-accent' as='h3'>
              Contract work
            </Typography>
            <Typography variant='body'>
              B2B contracts, full-time, part-time, or fixed-price projects. Remote, with hybrid work
              possible in Zagreb.
            </Typography>
            <a
              href='mailto:goran.mrzljak@gmail.com'
              className='inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:underline dark:text-cyan-300'
            >
              Get in touch
              <Icon icon='mdi:arrow-right' aria-hidden='true' className='size-4' />
            </a>
          </Card>
        </Card>
        <section className='space-y-4'>
          <Typography variant='heading-2'>More about my work</Typography>
          <div className='grid gap-3 sm:grid-cols-2'>
            {ROUTE_CARDS.map((routeCard) => (
              <RouteCard key={routeCard.to} {...routeCard} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
