import React from 'react';
import { SimpleText } from './SimpleText';
import { SubTitle } from './SubTitle';
import { GmLink } from './GmLink';
import { WorkProject, WorkProjectProps } from './WorkProject';

export interface WorkHistoryItemProps {
  readonly jobTitle: string;
  readonly jobTitleLink?: string;
  readonly jobLocation: string;
  readonly jobRole: string;
  readonly timePeriod: string;
  readonly projects: readonly WorkProjectProps[];
}

export function WorkHistoryItem({
  jobTitle,
  jobTitleLink,
  jobLocation,
  jobRole,
  timePeriod,
  projects,
}: WorkHistoryItemProps): React.ReactElement {
  const jobTitleElement = jobTitleLink ? (
    <GmLink href={jobTitleLink} openInNewTab={true}>
      {jobTitle}
    </GmLink>
  ) : (
    <span>{jobTitle}</span>
  );

  return (
    <div>
      <SubTitle>
        {jobTitleElement}
        <span>, {jobLocation}</span>
        <span className={'font-normal'}>&nbsp;- {jobRole}</span>
      </SubTitle>
      <SimpleText>
        <p className={'mb-2'}>{timePeriod}</p>
        {projects.map((p, index) => (
          <WorkProject key={index} {...p} />
        ))}
      </SimpleText>
    </div>
  );
}
