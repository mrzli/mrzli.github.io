import type { FC } from 'react';

export const EducationPage: FC = () => {
  return (
    <div>
      <h1 className='mt-6 mb-3 text-lg font-bold text-slate-800 uppercase dark:text-slate-200'>
        Formal Education
      </h1>
      <h2 className='my-2 font-bold text-pink-600 dark:text-pink-500'>
        <a
          href='https://www.fer.unizg.hr/en'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          Faculty of Electrical Engineering and Computing (FER), University of
          Zagreb
        </a>
        <span className='font-normal'>
          &nbsp;- Graduate Engineer of Computing
        </span>
      </h2>
      <ul className='ml-6 list-disc space-y-1'>
        <li>Five year course, total 284 ECTS credits.</li>
        <li>
          Offers good foundation in Mathematics, Physics and Electrical
          Engineering.
        </li>
        <li>
          Latter part is focused on Programming, Computer Science and
          Engineering.
        </li>
        <li>
          My graduation thesis was in the field of computer graphics - I created
          a simple application that parses BVH animation files and displays the
          animation.
        </li>
      </ul>
      <br />
      <p>Links:</p>
      <ul className='ml-6 list-disc space-y-1'>
        <li>
          <a
            href='http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Short summary of the thesis on the Faculty&apos;s site
          </a>
        </li>
        <li>
          <a
            href='http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Full thesis (.doc file)
          </a>
        </li>
        <li>
          <a
            href='https://github.com/mrzli/bvhviewer'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            GitHub link to the source code for the application created for the
            thesis
          </a>
        </li>
        <li>
          <a
            href='https://youtu.be/7u4C-OBQZIk'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Short video showing what the thesis app looks like
          </a>
        </li>
      </ul>

      <h1 className='mt-6 mb-3 text-lg font-bold text-slate-800 uppercase dark:text-slate-200'>
        Additional Education
      </h1>
      <p className='font-semibold'>COURSERA</p>
      <p>
        I have done several courses primarily related to machine learning and
        other computer science topics such as algorithms and data structures.
        Very interesting stuff, but not much that I usually use in my everyday
        work.
      </p>
      <br />
      <p className='font-semibold'>UDEMY</p>
      <p>
        I took courses related to the following techs/subjects: Angular, Vue,
        React, NodeJS, Vim, Bash, Docker etc. So, these are things I directly
        use (or have used) in my professional work.
      </p>
    </div>
  );
};
