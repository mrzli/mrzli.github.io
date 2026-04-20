import React from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import profileImage from '../../assets/images/profile.jpg';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiStackOverflow, mdiFile } from '@mdi/js';
import { GmLink } from '../reusable/GmLink';
import { GmList } from '../reusable/GmList';

export function IntroScreen(): React.ReactElement {
  return (
    <div>
      <Title>Name &amp; Contact</Title>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 20,
        }}
      >
        <div style={{ gridColumn: 1 }}>
          <img
            alt={'Goran Mržljak'}
            src={profileImage}
            className={
              'rounded-full border-4 border-slate-200 w-40 h-40 overflow-hidden'
            }
          />
        </div>
        <div
          style={{
            display: 'grid',
            alignContent: 'center',
            gridTemplateRows: 'repeat(4, auto)',
            gridTemplateColumns: '1fr',
            rowGap: 10,
          }}
        >
          <div style={{ gridRow: 1, fontSize: '1.2em' }}>Goran Mržljak</div>
          <div
            style={{
              gridRow: 2,
            }}
          >
            <GmLink href={'tel:+385 91 224 3145'} classes={'text-pink-500'}>
              +385 91 224 3145
            </GmLink>
          </div>
          <div
            style={{
              gridRow: 3,
            }}
          >
            <GmLink
              href={'mailto:goran.mrzljak@gmail.com'}
              classes={'text-pink-500'}
            >
              goran.mrzljak@gmail.com
            </GmLink>
          </div>
          <div
            style={{
              gridRow: 4,
              display: 'grid',
              columnGap: 10,
              gridTemplateColumns: 'repeat(4, auto)',
              justifyContent: 'start',
            }}
          >
            <GmLink
              href={'https://www.linkedin.com/in/goran-mrzljak'}
              classes={'text-slate-700'}
              openInNewTab={true}
            >
              <Icon path={mdiLinkedin} className={'w-10 h-10'} />
            </GmLink>
            <GmLink
              href={'https://github.com/mrzli'}
              classes={'text-slate-700'}
              openInNewTab={true}
            >
              <Icon path={mdiGithub} className={'w-10 h-10'} />
            </GmLink>
            <GmLink
              href={'https://stackoverflow.com/users/520229/mrzli'}
              classes={'text-slate-700'}
              openInNewTab={true}
            >
              <Icon path={mdiStackOverflow} className={'w-10 h-10'} />
            </GmLink>
            <GmLink
              href={'/data/CV.pdf'}
              classes={'text-slate-700'}
              openInNewTab={true}
            >
              <Icon path={mdiFile} className={'w-10 h-10'} />
            </GmLink>
          </div>
        </div>
      </div>
      <Title>Professional Profile</Title>
      <SimpleText>
        <GmList>
          <li>14+ years of professional software development experience.</li>
          <li>
            Have experience with onboarding new developers, mentoring, and
            interviewing potential candidates.
          </li>
          <li>
            Done mostly web development recently, but previously had experience
            with wide range of technologies - see&nbsp;
            <GmLink href={'/work-history'}>work history</GmLink>
            &nbsp;for more details.
          </li>
          <li>
            Full stack development, but also worked on projects where I focus
            mostly (or completely) on either frontend or backend.
          </li>
          <li>Have experience with React, Angular on Vue (in that order).</li>
          <li>Prefer React, but would consider an Angular position.</li>
          <li>
            I have significant backend experience with Node/Express/Nest. These
            are my technologies of choice for the backend.
          </li>
          <li>
            Secondary option for backend is Spring Boot with Kotlin or Java.
          </li>
        </GmList>
      </SimpleText>
      <Title>Other Sections</Title>
      {LABEL_URL_PAIRS.slice(1).map((pair, index) => (
        <div key={index}>
          <Link to={pair.url} className={'underline'}>
            {pair.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
