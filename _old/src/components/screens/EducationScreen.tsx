import React from 'react';
import { Title } from '../reusable/Title';
import { SubTitle } from '../reusable/SubTitle';
import { SimpleText } from '../reusable/SimpleText';
import { GmLink } from '../reusable/GmLink';
import { GmList } from '../reusable/GmList';

export function EducationScreen(): React.ReactElement {
  return (
    <div>
      <Title>Formal Education</Title>
      <SubTitle>
        <GmLink href={'https://www.fer.unizg.hr/en'} openInNewTab={true}>
          Faculty of Electrical Engineering and Computing (FER), University of
          Zagreb
        </GmLink>
        <span className={'font-normal'}>
          &nbsp;- Graduate Engineer of Computing
        </span>
      </SubTitle>
      <SimpleText>
        <GmList>
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
            My graduation thesis was in the field of computer graphics - I
            created a simple application that parses BVH animation files and
            displays the animation.
          </li>
        </GmList>
        <br />
        <p>Links:</p>
        <GmList>
          <li>
            <GmLink
              href={
                'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html'
              }
              openInNewTab={true}
            >
              Short summary of the thesis on the Faculty's site
            </GmLink>
          </li>
          <li>
            <GmLink
              href={
                'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc'
              }
              openInNewTab={true}
            >
              Full thesis (.doc file)
            </GmLink>
          </li>
          <li>
            <GmLink
              href={'https://github.com/mrzli/bvhviewer'}
              openInNewTab={true}
            >
              GitHub link to the source code for the application created for the
              thesis
            </GmLink>
          </li>
          <li>
            <GmLink href={'https://youtu.be/7u4C-OBQZIk'} openInNewTab={true}>
              Short video showing what the thesis app looks like
            </GmLink>
          </li>
        </GmList>
      </SimpleText>
      <Title>Additional Education</Title>
      <SimpleText>
        <p>COURSERA</p>
        <p>
          I have done several courses primarily related to machine learning and
          other computer science topics such as algorithms and data structures.
          Very interesting stuff, but not much that I usually use in my everyday
          work.
        </p>
        <br />
        <p>UDEMY</p>
        <p>
          I took courses related to the following techs/subjects: Angular, Vue,
          React, NodeJS, Vim, Bash, Docker etc. So, these are things I directly
          use (or have used) in my professional work.
        </p>
      </SimpleText>
    </div>
  );
}
