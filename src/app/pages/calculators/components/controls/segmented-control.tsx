import type { ReactNode } from 'react';

import { cn } from '@/app/util';

export interface SegmentedOption<T extends string> {
  readonly value: T;
  readonly label: string;
}

export interface SegmentedControlProps<T extends string> {
  readonly label: string;
  readonly value: T;
  readonly options: readonly SegmentedOption<T>[];
  readonly onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({
  label,
  value,
  options,
  onChange,
}: SegmentedControlProps<T>): ReactNode {
  return (
    <div
      role='radiogroup'
      aria-label={label}
      className='inline-flex self-start rounded-lg border border-slate-300 p-1 dark:border-slate-700'
    >
      {options.map((option) => (
        <button
          key={option.value}
          type='button'
          role='radio'
          aria-checked={option.value === value}
          className={cn(
            'rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 focus-visible:outline-2 focus-visible:outline-cyan-600 dark:text-slate-300',
            option.value === value &&
              'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900',
          )}
          onClick={() => {
            onChange(option.value);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
