import { type ReactNode, useId } from 'react';

import { FIELD_HINT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface CheckboxFieldProps {
  readonly label: string;
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
  readonly hint?: string;
}

export function CheckboxField({ label, checked, onChange, hint }: CheckboxFieldProps): ReactNode {
  const id = useId();
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <input
          id={id}
          type='checkbox'
          className='size-4 accent-cyan-700'
          checked={checked}
          onChange={(event) => {
            onChange(event.target.checked);
          }}
        />
        <label htmlFor={id} className={FIELD_LABEL_CLASS}>
          {label}
        </label>
      </div>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
    </div>
  );
}
