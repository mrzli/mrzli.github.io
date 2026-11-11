import type { ReactNode } from 'react';

import { calculateGrossFromNet, calculatePayroll, type TaxProfile } from '../model/payroll';
import type { PayrollRules } from '../model/rules';
import { toMonthlyNonTaxablePayments } from '../settings/conversions';
import {
  SETTING_LIMITS,
  SALARY_DIRECTIONS,
  type SalaryDirection,
  type SalarySettings,
} from '../settings/settings';
import { CalculatorSection } from './calculator-section';
import { NumberField } from './controls';
import { NonTaxablePaymentsFields } from './non-taxable-payments-fields';
import { PayrollTables } from './payroll-tables';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

export interface SalarySectionProps {
  readonly settings: SalarySettings;
  readonly onChange: (changes: Partial<SalarySettings>) => void;
  readonly profile: TaxProfile;
  readonly rules: PayrollRules;
}

const DIRECTION_LABELS: Readonly<Record<SalaryDirection, string>> = {
  grossToNet: 'Gross to net',
  netToGross: 'Net to gross',
};

export function SalarySection({
  settings,
  onChange,
  profile,
  rules,
}: SalarySectionProps): ReactNode {
  const nonTaxablePayments = toMonthlyNonTaxablePayments(settings.nonTaxablePayments);
  const breakdown =
    settings.direction === 'grossToNet'
      ? calculatePayroll(
          {
            gross: settings.gross,
            nonTaxablePayments,
            profile,
          },
          rules,
        )
      : calculateGrossFromNet(settings.netPay, nonTaxablePayments, profile, rules);

  return (
    <CalculatorSection
      title='Gross and net salary'
      description='Monthly salary with every contribution and tax, for the employee and the employer.'
    >
      <ToggleGroup
        type='single'
        aria-label='Direction'
        value={settings.direction}
        onValueChange={(value) => {
          // An empty value means the active item was pressed again; the direction stays.
          const direction = SALARY_DIRECTIONS.find((candidate) => candidate === value);
          if (direction !== undefined) {
            onChange({ direction });
          }
        }}
      >
        {SALARY_DIRECTIONS.map((direction) => (
          <ToggleGroupItem key={direction} value={direction}>
            {DIRECTION_LABELS[direction]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className='grid gap-4 sm:grid-cols-2'>
        {settings.direction === 'grossToNet' ? (
          <NumberField
            label='Gross salary per month'
            unit='EUR'
            max={SETTING_LIMITS.amount}
            value={settings.gross}
            min={0}
            onChange={(gross) => {
              onChange({ gross });
            }}
          />
        ) : (
          <NumberField
            label='Net pay per month'
            unit='EUR'
            max={SETTING_LIMITS.amount}
            value={settings.netPay}
            min={0}
            onChange={(netPay) => {
              onChange({ netPay });
            }}
            hint='Including non-taxable payments, with the yearly ones spread over the months.'
          />
        )}
        <NonTaxablePaymentsFields
          value={settings.nonTaxablePayments}
          onChange={(nonTaxablePayments) => {
            onChange({ nonTaxablePayments });
          }}
        />
      </div>
      <PayrollTables breakdown={breakdown} />
    </CalculatorSection>
  );
}
