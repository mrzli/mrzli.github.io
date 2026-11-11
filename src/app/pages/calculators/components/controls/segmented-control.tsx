import { type ReactNode, useId } from 'react';

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

/** Native radio inputs styled as segments, which keeps the browser's keyboard behavior. */
export function SegmentedControl<T extends string>({
  label,
  value,
  options,
  onChange,
}: SegmentedControlProps<T>): ReactNode {
  const name = useId();
  return (
    <fieldset className='inline-flex self-start rounded-lg border border-slate-300 p-1 dark:border-slate-700'>
      <legend className='sr-only'>{label}</legend>
      {options.map((option) => (
        <label key={option.value} className='cursor-pointer'>
          <input
            type='radio'
            name={name}
            value={option.value}
            checked={option.value === value}
            className='peer sr-only'
            onChange={() => {
              onChange(option.value);
            }}
          />
          <span className='block rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-cyan-600 dark:text-slate-300 dark:peer-checked:bg-slate-100 dark:peer-checked:text-slate-900'>
            {option.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
