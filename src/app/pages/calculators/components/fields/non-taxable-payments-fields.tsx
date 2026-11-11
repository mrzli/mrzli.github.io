import type { ReactNode } from 'react';

import type { MonthlyAndYearlyAmounts } from '../../settings/settings';
import { MonthlyAndYearlyFields } from './monthly-and-yearly-fields';

export interface NonTaxablePaymentsFieldsProps {
  /** Names whose payments these are, such as "Offered", at the start of the group's title. */
  readonly labelPrefix: string;
  readonly value: MonthlyAndYearlyAmounts;
  readonly onChange: (value: MonthlyAndYearlyAmounts) => void;
}

export function NonTaxablePaymentsFields({
  labelPrefix,
  value,
  onChange,
}: NonTaxablePaymentsFieldsProps): ReactNode {
  return (
    <MonthlyAndYearlyFields
      legend={`${labelPrefix} non-taxable payments`}
      value={value}
      onChange={onChange}
      monthlyHint='Such as a meal allowance, up to 100 EUR.'
      yearlyHint='Such as Christmas and holiday bonuses, up to 700 EUR, or work result bonuses, up to 1,200 EUR. Spread over the months.'
    />
  );
}
