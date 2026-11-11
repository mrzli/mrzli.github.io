import { cva } from 'class-variance-authority';
import { type ReactNode, useId } from 'react';

import { Checkbox } from '../ui/checkbox';
import { FIELD_HINT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

const checkboxFieldVariants = cva('flex gap-3', {
  variants: {
    variant: {
      plain: 'items-center',
      tile: 'h-full items-start rounded-lg border border-slate-200 px-4 py-3 has-data-[state=checked]:border-cyan-600/60 has-data-[state=checked]:bg-cyan-50/50 dark:border-slate-800 dark:has-data-[state=checked]:border-cyan-500/50 dark:has-data-[state=checked]:bg-cyan-950/20',
    },
  },
});

export interface CheckboxFieldProps {
  /** Text or markup, such as a visible label with a prefix for assistive technology only. */
  readonly label: ReactNode;
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
  readonly hint?: string;
  /** `tile` frames the checkbox with its label and hint, for a row of options. */
  readonly variant?: 'plain' | 'tile';
}

export function CheckboxField({
  label,
  checked,
  onChange,
  hint,
  variant,
}: CheckboxFieldProps): ReactNode {
  const id = useId();
  const hintId = useId();
  return (
    <div className={checkboxFieldVariants({ variant: variant ?? 'plain' })}>
      <Checkbox
        id={id}
        className={variant === 'tile' ? 'mt-0.5' : undefined}
        checked={checked}
        aria-describedby={hint === undefined ? undefined : hintId}
        onCheckedChange={(state) => {
          onChange(state === true);
        }}
      />
      <div className='flex flex-col gap-1'>
        <label htmlFor={id} className={FIELD_LABEL_CLASS}>
          {label}
        </label>
        {hint !== undefined && (
          <p id={hintId} className={FIELD_HINT_CLASS}>
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}
