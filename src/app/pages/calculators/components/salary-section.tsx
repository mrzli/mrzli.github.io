import type { ReactNode } from 'react';

import { calculateGrossFromNet, calculatePayroll, type TaxProfile } from '../model/payroll';
import type { PayrollRules } from '../model/rules';
import { SALARY_DIRECTIONS, type SalaryDirection, type SalarySettings } from '../settings/settings';
import { CalculatorSection } from './calculator-section';
import { NumberField } from './controls';
import { PayrollTables } from './payroll-tables';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

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
      ? calculatePayroll(
          {
            gross: settings.gross,
            nonTaxablePayments: settings.nonTaxablePayments,
            profile,
          },
          rules,
        )
      : calculateGrossFromNet(settings.netPay, settings.nonTaxablePayments, profile, rules);

  return (
    <CalculatorSection
      title='Gross and net salary'
      description='Monthly salary with every contribution and tax, for the employee and the employer.'
    >
      <Tabs
        value={settings.direction}
        onValueChange={(value) => {
          const direction = SALARY_DIRECTIONS.find((candidate) => candidate === value);
          if (direction !== undefined) {
            onChange({ direction });
          }
        }}
      >
        <TabsList aria-label='Direction'>
          {SALARY_DIRECTIONS.map((direction) => (
            <TabsTrigger key={direction} value={direction}>
              {DIRECTION_LABELS[direction]}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={settings.direction} className='flex flex-col gap-5 pt-5'>
          <div className='grid gap-4 sm:grid-cols-2'>
            {settings.direction === 'grossToNet' ? (
              <NumberField
                label='Gross salary per month'
                unit='EUR'
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
                value={settings.netPay}
                min={0}
                onChange={(netPay) => {
                  onChange({ netPay });
                }}
                hint='Including non-taxable payments.'
              />
            )}
            <NumberField
              label='Non-taxable payments per month'
              unit='EUR'
              value={settings.nonTaxablePayments}
              min={0}
              onChange={(nonTaxablePayments) => {
                onChange({ nonTaxablePayments });
              }}
              hint='Within their yearly caps, such as up to 1,200 EUR a year for meals or 700 EUR for Christmas and holiday bonuses.'
            />
          </div>
          <PayrollTables breakdown={breakdown} />
        </TabsContent>
      </Tabs>
    </CalculatorSection>
  );
}
