import { type ReactNode, useId } from 'react';

import { Checkbox } from '../ui/checkbox';
import { FIELD_HINT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface CheckboxFieldProps {
  /** Text or markup, such as a visible label with a prefix for assistive technology only. */
  readonly label: ReactNode;
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
  readonly hint?: string;
}

export function CheckboxField({ label, checked, onChange, hint }: CheckboxFieldProps): ReactNode {
  const id = useId();
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(state) => {
            onChange(state === true);
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
