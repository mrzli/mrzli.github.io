import { Typography } from '@components';
import type { ReactNode } from 'react';

import type { DateRangeBound } from '@/content/types';

export interface ExperienceSectionHeaderProps {
  readonly title: string;
  readonly location: string;
  readonly role: string;
  readonly from: DateRangeBound;
  readonly to: DateRangeBound;
}

export function ExperienceSectionHeader({
  title,
  location,
  role,
  from,
  to,
}: ExperienceSectionHeaderProps): ReactNode {
  return (
    <div className='grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6'>
      <div className='space-y-1'>
        <Typography variant='heading-2'>{title}</Typography>
        <Typography variant='prose'>{role}</Typography>
      </div>
      <div className='space-y-1 sm:text-right'>
        <Typography variant='body'>{location}</Typography>
        <Typography variant='body'>
          {formatDateRangeBound(from)} - {formatDateRangeBound(to)}
        </Typography>
      </div>
    </div>
  );
}

function formatDateRangeBound(bound: DateRangeBound): string {
  if (bound === 'Present') {
    return 'Present';
  }
  const { year, month } = bound;
  return `${monthText(month)} ${year}`;
}

function monthText(month: number): string {
  if (month < 1 || month > 12 || !Number.isInteger(month)) {
    throw new Error(`Invalid month: ${month}`);
  }

  return MONTH_NAMES[month - 1];
}

const MONTH_NAMES: readonly string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
