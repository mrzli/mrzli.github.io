import type { ReactNode } from 'react';

import { formatNumber } from '../format';
import { compareEmployeeOffer } from '../model/employee-comparison';
import { calculatePayroll, type TaxProfile } from '../model/payroll';
import type { CompanyTaxRules, PayrollRules } from '../model/rules';
import { toBudgetItem, toOfferPayrollInput, toOwnerPayrollInput } from '../settings/conversions';
import { type CompanySettings, type EmployeeOfferSettings } from '../settings/settings';
import { rowsIf } from './breakdown-row';
import { BreakdownTables } from './breakdown-tables';
import { getCompanyRows, getOwnerRows } from './budget-rows';
import { CalculatorSection } from './calculator-section';
import { AmountField, NonTaxablePaymentsFields } from './fields';
import { PayrollTables } from './payroll-tables';

export interface EmployeeOfferSectionProps {
  readonly settings: EmployeeOfferSettings;
  readonly onChange: (changes: Partial<EmployeeOfferSettings>) => void;
  readonly company: CompanySettings;
  readonly billableHours: number;
  readonly profile: TaxProfile;
  readonly payrollRules: PayrollRules;
  readonly companyRules: CompanyTaxRules;
}

export function EmployeeOfferSection({
  settings,
  onChange,
  company,
  billableHours,
  profile,
  payrollRules,
  companyRules,
}: EmployeeOfferSectionProps): ReactNode {
  const offerPayroll = calculatePayroll(toOfferPayrollInput(settings, profile), payrollRules);
  const comparison = compareEmployeeOffer(
    {
      offerPayroll,
      ownerPayroll: calculatePayroll(toOwnerPayrollInput(company, profile), payrollRules),
      companyExpenses: company.expenses.map((item) => toBudgetItem(item, company.vatRate)),
      usdPerEur: company.usdPerEur,
      billableHours,
    },
    companyRules,
  );
  const budget = comparison.matchingBudget;

  return (
    <CalculatorSection
      title='Job offer'
      description='What a job offer gives you per year, and what your own company would have to earn to give you the same. The company side uses your salary and expenses from the Own company tab, and the billable hours from the Contractor rate tab.'
    >
      <div className='grid gap-4 sm:grid-cols-2'>
        <AmountField
          label='Offered gross salary per month'
          value={settings.gross}
          onChange={(gross) => {
            onChange({ gross });
          }}
        />
        <NonTaxablePaymentsFields
          labelPrefix='Offered'
          value={settings.nonTaxablePayments}
          onChange={(nonTaxablePayments) => {
            onChange({ nonTaxablePayments });
          }}
        />
      </div>
      <BreakdownTables
        tables={[
          {
            caption: 'The offer, per year',
            rows: [
              {
                label: 'Your net',
                detail: 'Net pay with non-taxable payments and any youth tax relief',
                amount: comparison.offerNet,
                kind: 'total',
              },
              { label: 'Employer cost', amount: comparison.offerEmployerCost },
              {
                label: 'Hourly rate at the same client cost',
                detail: `Employer cost over ${formatNumber(billableHours)} billable hours`,
                amount: comparison.employerCostHourlyRate,
                kind: 'info',
              },
            ],
          },
          {
            caption: 'Your own company, for the same net per year',
            rows: [
              {
                label: 'Hourly rate needed',
                detail: `Revenue over ${formatNumber(billableHours)} billable hours`,
                amount: comparison.matchingHourlyRate,
                kind: 'info',
              },
              ...getCompanyRows(budget),
              ...getOwnerRows(budget, companyRules.dividendTaxRate),
              ...rowsIf(budget.personalNet > comparison.offerNet, {
                label: 'Above the offer',
                detail:
                  'Your salary alone beats the offer, so the company only needs to cover its costs',
                amount: budget.personalNet - comparison.offerNet,
                kind: 'info',
              }),
            ],
          },
        ]}
      />
      <PayrollTables breakdown={offerPayroll} />
    </CalculatorSection>
  );
}
