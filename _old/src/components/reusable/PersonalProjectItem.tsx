import React from 'react';
import { SubTitle } from './SubTitle';
import { WorkProject, WorkProjectProps } from './WorkProject';
import { SimpleText } from './SimpleText';

export interface PersonalProjectItemProps {
  readonly name: string;
  readonly project: WorkProjectProps;
}

export function PersonalProjectItem({
  name,
  project,
}: PersonalProjectItemProps): React.ReactElement {
  return (
    <div>
      <SubTitle>{name}</SubTitle>
      <SimpleText>
        <WorkProject {...project} />
      </SimpleText>
    </div>
  );
}
