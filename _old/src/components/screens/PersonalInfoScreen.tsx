import React from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';

export function PersonalInfoScreen(): React.ReactElement {
  return (
    <div>
      <Title>Personal Info</Title>
      <SimpleText>
        <div className={'grid grid-cols-[auto_auto] justify-start gap-x-4'}>
          <span>Name:</span>
          <span>Goran Mržljak</span>
          <span>Gender:</span>
          <span>Male</span>
          <span>Location:</span>
          <span>Zagreb, Croatia</span>
          <span>Nationality:</span>
          <span>Croatian</span>
          <span>Languages:</span>
          <span>Croatian (native) and English (fluent)</span>
          <span>Other:</span>
          <span>I have a category B driver's license.</span>
        </div>
      </SimpleText>
    </div>
  );
}
