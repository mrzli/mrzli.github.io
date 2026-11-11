import { type ReactNode, useId } from 'react';

import { FIELD_HINT_CLASS, FIELD_INPUT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface SelectOption<T extends string | number> {
  readonly value: T;
  readonly label: string;
}

export interface SelectFieldProps<T extends string | number> {
  readonly label: string;
  readonly value: T;
  readonly options: readonly SelectOption<T>[];
  readonly onChange: (value: T) => void;
  readonly hint?: string;
}

export function SelectField<T extends string | number>({
  label,
  value,
  options,
  onChange,
  hint,
}: SelectFieldProps<T>): ReactNode {
  const id = useId();
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className={FIELD_LABEL_CLASS}>
        {label}
      </label>
      <select
        id={id}
        className={FIELD_INPUT_CLASS}
        value={String(value)}
        onChange={(event) => {
          const selected = options.find((option) => String(option.value) === event.target.value);
          if (selected !== undefined) {
            onChange(selected.value);
          }
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
    </div>
  );
}
