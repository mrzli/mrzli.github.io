import type { FC } from 'react';

export const PersonalInfoPage: FC = () => {
  return (
    <div>
      <h1 className='mt-6 mb-3 text-lg font-bold text-slate-700 uppercase'>
        Personal Info
      </h1>
      <div className='grid grid-cols-[auto_auto] justify-start gap-x-4 gap-y-1'>
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
        <span>I have a category B driver&apos;s license.</span>
      </div>
    </div>
  );
};
