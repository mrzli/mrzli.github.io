import type { ReactNode } from 'react';

import { FIELD_HINT_CLASS } from './controls/field-styles';

export interface TitledFieldsetProps {
  readonly title: string;
  readonly hint?: string;
  readonly children: ReactNode;
}

/** A titled block of fields, such as the income list, the salary, or the expense list. */
export function TitledFieldset({ title, hint, children }: TitledFieldsetProps): ReactNode {
  return (
    <fieldset className='flex flex-col gap-3'>
      <legend className='pb-2 font-semibold text-slate-900 dark:text-slate-100'>{title}</legend>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
      {children}
    </fieldset>
  );
}
