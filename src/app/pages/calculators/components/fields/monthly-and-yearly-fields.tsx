import type { ReactNode } from 'react';

import type { MonthlyAndYearlyAmounts } from '../../settings/settings';
import { FieldGroup } from '../controls';
import { AmountField } from './amount-field';

export interface MonthlyAndYearlyFieldsProps {
  readonly legend: string;
  readonly value: MonthlyAndYearlyAmounts;
  readonly onChange: (value: MonthlyAndYearlyAmounts) => void;
  readonly monthlyHint: string;
  readonly yearlyHint: string;
}

/** A framed pair of amounts paid per month and per year, on its own row of a field grid. */
export function MonthlyAndYearlyFields({
  legend,
  value,
  onChange,
  monthlyHint,
  yearlyHint,
}: MonthlyAndYearlyFieldsProps): ReactNode {
  return (
    <FieldGroup legend={legend} columns='two'>
      <AmountField
        label='Per month'
        value={value.perMonth}
        onChange={(perMonth) => {
          onChange({ ...value, perMonth });
        }}
        hint={monthlyHint}
      />
      <AmountField
        label='Per year'
        value={value.perYear}
        onChange={(perYear) => {
          onChange({ ...value, perYear });
        }}
        hint={yearlyHint}
      />
    </FieldGroup>
  );
}
