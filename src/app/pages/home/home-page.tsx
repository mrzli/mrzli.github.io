import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { Link } from 'react-router';

import profileImage from '../../../assets/profile.jpg';
import { Typography } from '../../components';
import { Card } from '../../components/layout/card';
import { RouteCard, type RouteCardProps } from './components/route-card';

export const HomePage: FC = () => {
  return (
    <div className='space-y-8 pb-12'>
      <section className='mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-pink-50 shadow-xs dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'>
        <div className='grid gap-8 px-6 py-8 md:grid-cols-[1.4fr_auto] md:px-8 md:py-10'>
          <div className='space-y-5'>
            <div className='inline-flex items-center rounded-full border border-pink-200 bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 dark:border-pink-900 dark:bg-pink-950/60 dark:text-pink-300'>
              Senior full-stack web developer
            </div>
            <div className='space-y-3'>
              <Typography variant='page-title'>Goran Mržljak</Typography>
              <Typography variant='lead' className='max-w-3xl'>
                I build and improve production web applications, with the
                strongest recent focus on React, TypeScript, Node.js, and the
                engineering work that makes larger codebases easier to evolve.
              </Typography>
            </div>
            <div className='flex flex-wrap gap-3'>
              <Link
                to='/experience'
                className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300'
              >
                View experience
                <Icon icon='mdi:arrow-right' className='h-4 w-4' />
              </Link>
              <a
                href='/data/CV.pdf'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:text-white'
              >
                Download CV
                <Icon icon='mdi:download' className='h-4 w-4' />
              </a>
              <a
                href='mailto:goran.mrzljak@gmail.com'
                className='inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-pink-700 transition-colors hover:text-pink-900 dark:text-pink-400 dark:hover:text-pink-300'
              >
                Contact
                <Icon icon='mdi:email-outline' className='h-4 w-4' />
              </a>
            </div>
            <div className='grid gap-3 text-sm text-slate-600 sm:grid-cols-2 dark:text-slate-300'>
              <div>
                <Typography variant='item-title'>Current preference</Typography>
                <p>React-first frontend or balanced full-stack roles.</p>
              </div>
              <div>
                <Typography variant='item-title'>
                  Secondary backend stack
                </Typography>
                <p>Spring Boot with Kotlin or Java.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start gap-4 md:items-end'>
            <img
              alt='Goran Mržljak'
              src={profileImage}
              className='h-36 w-36 overflow-hidden rounded-3xl border-4 border-white object-cover shadow-lg sm:h-44 sm:w-44 dark:border-slate-800'
            />
            <div className='space-y-2 text-sm'>
              <a
                href='tel:+385912243145'
                className='block text-pink-600 transition-colors hover:text-pink-800 dark:text-pink-500 dark:hover:text-pink-400'
              >
                +385 91 224 3145
              </a>
              <a
                href='mailto:goran.mrzljak@gmail.com'
                className='block text-pink-600 transition-colors hover:text-pink-800 dark:text-pink-500 dark:hover:text-pink-400'
              >
                goran.mrzljak@gmail.com
              </a>
              <div className='flex gap-3 pt-1'>
                <a
                  href='https://www.linkedin.com/in/goran-mrzljak'
                  target='_blank'
                  rel='noreferrer'
                  className='text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  aria-label='LinkedIn'
                >
                  <Icon icon='mdi:linkedin' width='28' height='28' />
                </a>
                <a
                  href='https://github.com/mrzli'
                  target='_blank'
                  rel='noreferrer'
                  className='text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  aria-label='GitHub'
                >
                  <Icon icon='mdi:github' width='28' height='28' />
                </a>
                <a
                  href='https://stackoverflow.com/users/520229/mrzli'
                  target='_blank'
                  rel='noreferrer'
                  className='text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  aria-label='Stack Overflow'
                >
                  <Icon icon='mdi:stackoverflow' width='28' height='28' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {HIGHLIGHTS.map((highlight) => {
          return (
            <Card key={highlight.title} as='article'>
              <Typography variant='card-title'>{highlight.title}</Typography>
              <Typography variant='body' className='mt-2'>
                {highlight.description}
              </Typography>
            </Card>
          );
        })}
      </section>

      <section className='grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <Card padding='large'>
          <Typography variant='section-title'>
            Why I tend to be useful
          </Typography>
          <div className='mt-5 space-y-4'>
            {STRENGTHS.map((strength) => {
              return (
                <Card key={strength.title} variant='inner' padding='small'>
                  <Typography variant='item-title'>{strength.title}</Typography>
                  <Typography variant='body' className='mt-2'>
                    {strength.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
        </Card>

        <Card padding='large'>
          <Typography variant='section-title'>Recent focus</Typography>
          <Typography variant='body' className='mt-3'>
            Most of my recent work has been in web development, but my earlier
            background spans a much wider set of technologies and product types.
            The routes below go into detail; this section is meant as the fast
            scan.
          </Typography>
          <div className='mt-5 flex flex-wrap gap-2'>
            {PRIMARY_TECHS.map((tech) => {
              return (
                <span
                  key={tech}
                  className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200'
                >
                  {tech}
                </span>
              );
            })}
          </div>
          <Typography variant='body' className='mt-5'>
            Placeholder: add one short sentence here later about the exact kinds
            of teams, products, or role scope you want next.
          </Typography>
        </Card>
      </section>

      <Card as='section' padding='large'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <Typography variant='section-title'>Explore the rest</Typography>
            <Typography variant='body' className='mt-1'>
              If you want the quick path, start with Experience. The remaining
              sections are there for structured detail.
            </Typography>
          </div>
          <Link
            to='/experience'
            className='text-sm font-medium text-pink-700 transition-colors hover:text-pink-900 dark:text-pink-400 dark:hover:text-pink-300'
          >
            Jump straight to experience
          </Link>
        </div>
        <div className='mt-5 grid gap-4 md:grid-cols-2'>
          {ROUTE_CARDS.map((routeCard) => {
            return (
              <RouteCard
                key={routeCard.to}
                to={routeCard.to}
                title={routeCard.title}
                description={routeCard.description}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

interface HighlightItem {
  readonly title: string;
  readonly description: string;
}

const HIGHLIGHTS: readonly HighlightItem[] = [
  {
    title: '14+ years',
    description:
      'Professional software development experience across multiple domains and stacks.',
  },
  {
    title: 'Frontend + backend',
    description:
      'Recent work is mostly web-focused, with substantial hands-on experience on both sides of the stack.',
  },
  {
    title: 'Senior-level scope',
    description:
      'Mentoring, onboarding, interviewing, architecture decisions, and cross-cutting technical improvements.',
  },
  {
    title: 'Production systems',
    description:
      'Work on systems that matter operationally, including large applications and occasional production migrations.',
  },
];

interface StrengthItem {
  readonly title: string;
  readonly description: string;
}

const STRENGTHS: readonly StrengthItem[] = [
  {
    title: 'Frontend architecture',
    description:
      'React and TypeScript are the center of gravity of my recent work, especially in larger codebases that need cleanup, structure, and maintainability.',
  },
  {
    title: 'Backend ownership',
    description:
      'I am comfortable working all the way from API design down to database concerns, especially in Node/Express/Nest environments.',
  },
  {
    title: 'Technical leverage',
    description:
      'I tend to be most useful where teams need both delivery and engineering judgment: refactoring, developer workflow, testing, and code quality improvements.',
  },
];

const ROUTE_CARDS: readonly RouteCardProps[] = [
  {
    title: 'Experience',
    to: '/experience',
    description:
      'Detailed work history, project context, and the scope of the systems I worked on.',
  },
  {
    title: 'Skills',
    to: '/skills',
    description:
      'A structured view of the languages, frameworks, tools, and databases I have used.',
  },
  {
    title: 'Projects',
    to: '/projects',
    description:
      'Personal projects that show initiative outside client and company work.',
  },
  {
    title: 'Background',
    to: '/background',
    description:
      'Education, additional learning, and a small amount of personal context.',
  },
];

const PRIMARY_TECHS: readonly string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'NestJS',
  'Angular',
  'Jest',
  'Testing Library',
  'Nx',
  'MongoDB',
  'PostgreSQL',
  'Storybook',
];
