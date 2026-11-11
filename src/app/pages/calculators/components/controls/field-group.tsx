import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

const fieldGroupGridVariants = cva('grid gap-4', {
  variants: {
    columns: {
      two: 'sm:grid-cols-2',
      three: 'md:grid-cols-3',
    },
  },
});

export interface FieldGroupProps {
  readonly legend: string;
  readonly columns: 'two' | 'three';
  readonly children: ReactNode;
}

/** Related fields in a framed group that spans the full width of a field grid. */
export function FieldGroup({ legend, columns, children }: FieldGroupProps): ReactNode {
  return (
    <fieldset className='col-span-full rounded-lg border border-slate-200 px-4 pt-2 pb-4 dark:border-slate-800'>
      <legend className='px-1 text-sm font-semibold text-slate-800 dark:text-slate-200'>
        {legend}
      </legend>
      <div className={fieldGroupGridVariants({ columns })}>{children}</div>
    </fieldset>
  );
}
