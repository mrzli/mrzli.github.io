import type { ReactNode } from 'react';

import { type NonTaxablePaymentsSettings, SETTING_LIMITS } from '../settings/settings';
import { NumberField } from './controls';

export interface NonTaxablePaymentsFieldsProps {
  /** Names whose payments these are, such as "Offered", at the start of each label. */
  readonly labelPrefix?: string;
  readonly value: NonTaxablePaymentsSettings;
  readonly onChange: (value: NonTaxablePaymentsSettings) => void;
}

export function NonTaxablePaymentsFields({
  labelPrefix,
  value,
  onChange,
}: NonTaxablePaymentsFieldsProps): ReactNode {
  const label =
    labelPrefix === undefined ? 'Non-taxable payments' : `${labelPrefix} non-taxable payments`;
  return (
    <>
      <NumberField
        label={`${label} per month`}
        unit='EUR'
        value={value.perMonth}
        min={0}
        max={SETTING_LIMITS.amount}
        onChange={(perMonth) => {
          onChange({ ...value, perMonth });
        }}
        hint='Paid every month, such as a meal allowance of up to 100 EUR.'
      />
      <NumberField
        label={`${label} per year`}
        unit='EUR'
        value={value.perYear}
        min={0}
        max={SETTING_LIMITS.amount}
        onChange={(perYear) => {
          onChange({ ...value, perYear });
        }}
        hint='Paid once or a few times a year, such as up to 700 EUR in Christmas and holiday bonuses or 1,200 EUR in work result bonuses. Spread over the months.'
      />
    </>
  );
}
