import type { FC } from 'react';

export const BackgroundPage: FC = () => {
  return (
    <div>
      <h1 className='mt-6 mb-3 text-lg font-bold text-slate-800 uppercase dark:text-slate-200'>
        Background
      </h1>

      <h2 className='my-2 font-bold text-pink-600 dark:text-pink-500'>
        Formal Education
      </h2>
      <h3 className='my-2 font-semibold'>
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
      </h3>
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
          My graduation thesis was in the field of computer graphics. I created
          a simple application that parses BVH animation files and displays the
          animation.
        </li>
      </ul>

      <p className='mt-4'>Related links:</p>
      <ul className='ml-6 list-disc space-y-1'>
        <li>
          <a
            href='http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Short summary of the thesis on the faculty site
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
            Source code for the thesis application
          </a>
        </li>
        <li>
          <a
            href='https://youtu.be/7u4C-OBQZIk'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Short video showing the thesis application
          </a>
        </li>
      </ul>

      <h2 className='mt-6 mb-3 font-bold text-pink-600 dark:text-pink-500'>
        Additional Learning
      </h2>
      <p className='font-semibold'>Coursera</p>
      <p>
        I completed several courses primarily related to machine learning,
        algorithms, and data structures. Interesting topics, although not the
        main focus of my day-to-day work.
      </p>
      <p className='mt-4 font-semibold'>Udemy</p>
      <p>
        I took courses related to Angular, Vue, React, Node.js, Vim, Bash, and
        Docker. These are much closer to the technologies I use or have used in
        professional work.
      </p>

      <h2 className='mt-6 mb-3 font-bold text-pink-600 dark:text-pink-500'>
        Location And Languages
      </h2>
      <div className='grid grid-cols-[auto_1fr] gap-x-4 gap-y-1'>
        <span>Location:</span>
        <span>Zagreb, Croatia</span>
        <span>Languages:</span>
        <span>Croatian (native) and English (fluent)</span>
      </div>
    </div>
  );
};
