import type { ReactNode } from 'react';

import { calculateGrossFromNet, calculatePayroll, type TaxProfile } from '../model/payroll';
import type { PayrollRules } from '../model/rules';
import { SALARY_DIRECTIONS, type SalaryDirection, type SalarySettings } from '../settings/settings';
import { isOneOf } from '../settings/stored-fields';
import { CalculatorSection } from './calculator-section';
import { AmountField } from './fields';
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
  const breakdown =
    settings.direction === 'grossToNet'
      ? calculatePayroll({ gross: settings.gross, nonTaxablePayments: 0, profile }, rules)
      : calculateGrossFromNet(settings.netPay, profile, rules);

  return (
    <CalculatorSection
      title='Salary'
      description='Monthly salary with every contribution and tax, for the employee and the employer.'
    >
      <ToggleGroup
        type='single'
        aria-label='Direction'
        value={settings.direction}
        onValueChange={(value) => {
          // An empty value means the active item was pressed again; the direction stays.
          if (isOneOf(SALARY_DIRECTIONS)(value)) {
            onChange({ direction: value });
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
          <AmountField
            label='Gross salary per month'
            value={settings.gross}
            onChange={(gross) => {
              onChange({ gross });
            }}
          />
        ) : (
          <AmountField
            label='Net pay per month'
            value={settings.netPay}
            onChange={(netPay) => {
              onChange({ netPay });
            }}
          />
        )}
      </div>
      <PayrollTables breakdown={breakdown} />
    </CalculatorSection>
  );
}
