import { Card, ExternalLink, TagList, Typography } from '@components';
import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

import { PRIMARY_TECHS } from '@/content/primary-technologies';
import { PROFILE, EXPERIENCE_START_YEARS } from '@/content/profile';

import profileImage from '../../../assets/profile.jpg';
import { IconLink, RouteCard } from './components';
import { ROUTE_CARDS, WORK_HIGHLIGHTS } from './data';

export function HomePage(): ReactNode {
  const currentYear = new Date().getFullYear();

  return (
    <div className='space-y-8 pt-6 pb-12'>
      <Card as='section' padding='large' className='overflow-hidden sm:p-8'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem]'>
          <div className='space-y-6'>
            <Typography variant='card-title-accent' as='p'>
              {PROFILE.title}
            </Typography>
            <div className='space-y-4'>
              <Typography variant='heading-1'>{PROFILE.name}</Typography>
              <Typography variant='lead' className='max-w-2xl'>
                {PROFILE.lead}
              </Typography>
              <Typography variant='body' className='max-w-2xl'>
                {PROFILE.summary}
              </Typography>
              <Typography variant='body' className='max-w-2xl'>
                {PROFILE.ai}
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

          <div className='flex items-start gap-4 border-t border-slate-200 pt-6 lg:flex-col lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 dark:border-slate-800'>
            <img
              alt={PROFILE.name}
              src={profileImage}
              width={176}
              height={176}
              className='size-24 shrink-0 rounded-2xl object-cover sm:size-44'
            />
            <div className='min-w-0 space-y-4'>
              <Typography variant='body' className='flex items-center gap-1.5'>
                <Icon icon='mdi:map-marker-outline' aria-hidden='true' className='size-4' />
                {PROFILE.location}
              </Typography>
              <div className='flex flex-col items-start gap-2'>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className='text-sm font-medium break-all text-amber-700 hover:underline dark:text-cyan-300'
                >
                  {PROFILE.email}
                </a>
                <a
                  href={`tel:${PROFILE.phone.replaceAll(' ', '')}`}
                  className='text-sm hover:underline'
                >
                  {PROFILE.phone}
                </a>
              </div>
              <div className='flex gap-3'>
                <IconLink to={PROFILE.linkedin} icon='mdi:linkedin' label='LinkedIn' />
                <IconLink to={PROFILE.github} icon='mdi:github' label='GitHub' />
                <IconLink
                  to={PROFILE.stackOverflow}
                  icon='mdi:stackoverflow'
                  label='Stack Overflow'
                />
              </div>
            </div>
          </div>
        </div>
        <dl className='mt-8 grid gap-5 border-t border-slate-200 pt-6 lg:grid-cols-3 dark:border-slate-800'>
          <div>
            <Typography as='dt' variant='card-title-muted'>
              Professional experience
            </Typography>
            <Typography as='dd' variant='heading-3' className='mt-2'>
              {currentYear - EXPERIENCE_START_YEARS.professional} years
            </Typography>
          </div>
          <div>
            <Typography as='dt' variant='card-title-muted'>
              Contract work
            </Typography>
            <Typography as='dd' variant='heading-3' className='mt-2'>
              {currentYear - EXPERIENCE_START_YEARS.contracting} years
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
              <Typography variant='heading-3'>
                <Link
                  to={highlight.to}
                  className='rounded-sm decoration-slate-400 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 dark:decoration-slate-500 dark:focus-visible:outline-cyan-300'
                >
                  {highlight.title}
                  <Icon
                    icon='mdi:arrow-top-right'
                    aria-hidden='true'
                    className='ml-1 inline-block size-4 text-slate-500 dark:text-slate-400'
                  />
                </Link>
              </Typography>
              <Typography variant='body'>{highlight.description}</Typography>
            </Card>
          ))}
        </div>
      </section>

      <div className='grid gap-6 lg:grid-cols-2'>
        <Card as='section' padding='large' className='space-y-4'>
          <Typography variant='heading-2'>Hire me</Typography>
          <Typography variant='body'>{PROFILE.availability}</Typography>
          <Typography variant='body'>{PROFILE.services}</Typography>
          <Card variant='highlight' padding='small' className='space-y-2'>
            <Typography variant='card-title-accent' as='h3'>
              Contract details
            </Typography>
            <Typography variant='body'>{PROFILE.contracts}</Typography>
            <a
              href={`mailto:${PROFILE.email}`}
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
