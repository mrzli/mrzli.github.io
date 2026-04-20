import React from 'react';
import { GmList } from './GmList';

export interface SkillsOverviewSubSectionProps {
  readonly name: string;
  readonly items: readonly string[];
}

export function SkillsOverviewSubSection({
  name,
  items,
}: SkillsOverviewSubSectionProps): React.ReactElement {
  return (
    <div className={'my-4'}>
      <p className={'my-2'}>{name}</p>
      <GmList>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </GmList>
    </div>
  );
}
