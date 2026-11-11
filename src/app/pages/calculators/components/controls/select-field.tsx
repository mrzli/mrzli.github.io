import { type ReactNode, useId } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { FIELD_HINT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface SelectOption<T extends string> {
  readonly value: T;
  readonly label: string;
}

export interface SelectFieldProps<T extends string> {
  readonly label: string;
  readonly value: T;
  readonly options: readonly SelectOption<T>[];
  readonly onChange: (value: T) => void;
  readonly hint?: string;
  /** Keeps the label for assistive technology only, for fields in a labeled row. */
  readonly hideLabel?: boolean;
}

export function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
  hint,
  hideLabel,
}: SelectFieldProps<T>): ReactNode {
  const id = useId();
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className={hideLabel === true ? 'sr-only' : FIELD_LABEL_CLASS}>
        {label}
      </label>
      <Select
        value={value}
        onValueChange={(selected) => {
          const option = options.find((candidate) => candidate.value === selected);
          if (option !== undefined) {
            onChange(option.value);
          }
        }}
      >
        <SelectTrigger id={id}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
    </div>
  );
}
