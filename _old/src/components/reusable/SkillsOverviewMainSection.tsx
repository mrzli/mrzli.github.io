import React from 'react';
import {
  SkillsOverviewSubSection,
  SkillsOverviewSubSectionProps,
} from './SkillsOverviewSubSection';
import { SubTitle } from './SubTitle';
import { SimpleText } from './SimpleText';

export interface SkillsOverviewMainSectionProps {
  readonly name: string;
  readonly subsections: readonly SkillsOverviewSubSectionProps[];
}

export function SkillsOverviewMainSection({
  name,
  subsections,
}: SkillsOverviewMainSectionProps): React.ReactElement {
  return (
    <div className={'mt-6'}>
      <SubTitle>{name}</SubTitle>
      <SimpleText>
        {subsections.map((item, index) => (
          <SkillsOverviewSubSection key={index} {...item} />
        ))}
      </SimpleText>
    </div>
  );
}
