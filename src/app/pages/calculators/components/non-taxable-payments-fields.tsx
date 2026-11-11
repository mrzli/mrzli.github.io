import type { ReactNode } from 'react';

import { type NonTaxablePaymentsSettings, SETTING_LIMITS } from '../settings/settings';
import { FieldGroup, NumberField } from './controls';

export interface NonTaxablePaymentsFieldsProps {
  /** Names whose payments these are, such as "Offered", at the start of the group's title. */
  readonly labelPrefix: string;
  readonly value: NonTaxablePaymentsSettings;
  readonly onChange: (value: NonTaxablePaymentsSettings) => void;
}

export function NonTaxablePaymentsFields({
  labelPrefix,
  value,
  onChange,
}: NonTaxablePaymentsFieldsProps): ReactNode {
  const legend = `${labelPrefix} non-taxable payments`;
  return (
    <FieldGroup legend={legend} columns='two'>
      <NumberField
        label='Per month'
        unit='EUR'
        value={value.perMonth}
        min={0}
        max={SETTING_LIMITS.amount}
        onChange={(perMonth) => {
          onChange({ ...value, perMonth });
        }}
        hint='Such as a meal allowance, up to 100 EUR.'
      />
      <NumberField
        label='Per year'
        unit='EUR'
        value={value.perYear}
        min={0}
        max={SETTING_LIMITS.amount}
        onChange={(perYear) => {
          onChange({ ...value, perYear });
        }}
        hint='Such as Christmas and holiday bonuses, up to 700 EUR, or work result bonuses, up to 1,200 EUR. Spread over the months.'
      />
    </FieldGroup>
  );
}
