import { Typography } from '@components';
import type { ReactNode } from 'react';

export interface MonthYear {
  readonly year: number;
  readonly month: number;
}

export type DateRangeBound = MonthYear | 'Present';

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
    <div className='flex flex-col gap-2'>
      <Typography variant='heading-4'>
        <span className='font-bold'>
          {title}, {location}
        </span>
        {' - '}
        <span>{role}</span>
      </Typography>
      <Typography variant='body'>
        <span className='uppercase'>
          {formatDateRangeBound(from)} - {formatDateRangeBound(to)}
        </span>
      </Typography>
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
