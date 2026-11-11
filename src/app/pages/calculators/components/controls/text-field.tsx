import { type ReactNode, useId } from 'react';

import { FIELD_INPUT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface TextFieldProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder?: string;
  /** Keeps the label for assistive technology only, for fields in a labeled row. */
  readonly hideLabel?: boolean;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  hideLabel,
}: TextFieldProps): ReactNode {
  const id = useId();
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className={hideLabel === true ? 'sr-only' : FIELD_LABEL_CLASS}>
        {label}
      </label>
      <input
        id={id}
        type='text'
        className={FIELD_INPUT_CLASS}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}
