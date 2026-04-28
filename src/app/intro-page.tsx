import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { Link } from 'react-router';

import profileImage from '../assets/profile.jpg';

export const IntroPage: FC = () => {
  return (
    <div>
      <h1 className='gm-title'>Name &amp; Contact</h1>
      <div className='grid grid-cols-[auto_1fr] gap-5'>
        <img
          alt='Goran Mržljak'
          src={profileImage}
          className='h-40 w-40 overflow-hidden rounded-full border-4 border-slate-200'
        />
        <div className='grid content-center gap-2'>
          <div className='text-[1.2em]'>Goran Mržljak</div>
          <div>
            <a href='tel:+385912243145' className='gm-accent-link'>
              +385 91 224 3145
            </a>
          </div>
          <div>
            <a href='mailto:goran.mrzljak@gmail.com' className='gm-accent-link'>
              goran.mrzljak@gmail.com
            </a>
          </div>
          <div className='flex gap-2'>
            <a
              href='https://www.linkedin.com/in/goran-mrzljak'
              target='_blank'
              rel='noreferrer'
              className='gm-icon-link'
            >
              <Icon icon='mdi:linkedin' width='40' height='40' />
            </a>
            <a
              href='https://github.com/mrzli'
              target='_blank'
              rel='noreferrer'
              className='gm-icon-link'
            >
              <Icon icon='mdi:github' width='40' height='40' />
            </a>
            <a
              href='https://stackoverflow.com/users/520229/mrzli'
              target='_blank'
              rel='noreferrer'
              className='gm-icon-link'
            >
              <Icon icon='mdi:stackoverflow' width='40' height='40' />
            </a>
            <a
              href='/data/CV.pdf'
              target='_blank'
              rel='noreferrer'
              className='gm-icon-link'
            >
              <Icon icon='mdi:file' width='40' height='40' />
            </a>
          </div>
        </div>
      </div>

      <h1 className='gm-title'>Professional Profile</h1>
      <ul className='ml-6 list-disc space-y-1'>
        <li>14+ years of professional software development experience.</li>
        <li>
          Have experience with onboarding new developers, mentoring, and
          interviewing potential candidates.
        </li>
        <li>
          Done mostly web development recently, but previously had experience
          with wide range of technologies - see{' '}
          <Link to='/work-history' className='underline'>
            work history
          </Link>{' '}
          for more details.
        </li>
        <li>
          Full stack development, but also worked on projects where I focus
          mostly (or completely) on either frontend or backend.
        </li>
        <li>Have experience with React, Angular and Vue (in that order).</li>
        <li>Prefer React, but would consider an Angular position.</li>
        <li>
          I have significant backend experience with Node/Express/Nest. These
          are my technologies of choice for the backend.
        </li>
        <li>
          Secondary option for backend is Spring Boot with Kotlin or Java.
        </li>
      </ul>

      <h1 className='gm-title'>Other Sections</h1>
      <div className='space-y-1'>
        <div>
          <Link to='/work-history' className='underline'>
            Work History
          </Link>
        </div>
        <div>
          <Link to='/education' className='underline'>
            Education
          </Link>
        </div>
        <div>
          <Link to='/skills-overview' className='underline'>
            Skills Overview
          </Link>
        </div>
        <div>
          <Link to='/personal-projects' className='underline'>
            Personal Projects
          </Link>
        </div>
        <div>
          <Link to='/personal-info' className='underline'>
            Personal Info
          </Link>
        </div>
      </div>
    </div>
  );
};
