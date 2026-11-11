import type { ReactNode } from 'react';

import { formatEuro, formatNumber, formatPercent } from '../format';
import { compareEmployeeOffer } from '../model/employee-comparison';
import { calculatePayroll, type TaxProfile } from '../model/payroll';
import type { CompanyTaxRules, PayrollRules } from '../model/rules';
import { toBudgetItem, toOwnerPayrollInput } from '../settings/conversions';
import type { CompanySettings, EmployeeOfferSettings } from '../settings/settings';
import { BreakdownTable } from './breakdown-table';
import { CalculatorSection } from './calculator-section';
import { NumberField } from './controls';
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

const MONTHS_PER_YEAR = 12;

export function EmployeeOfferSection({
  settings,
  onChange,
  company,
  billableHours,
  profile,
  payrollRules,
  companyRules,
}: EmployeeOfferSectionProps): ReactNode {
  const offerPayroll = calculatePayroll(
    {
      gross: settings.gross,
      nonTaxablePayments: settings.annualNonTaxablePayments / MONTHS_PER_YEAR,
      profile,
    },
    payrollRules,
  );
  const comparison = compareEmployeeOffer(
    {
      offerPayroll,
      ownerPayroll: calculatePayroll(toOwnerPayrollInput(company, profile), payrollRules),
      companyExpenses: company.expenses.map(toBudgetItem),
      usdPerEur: company.usdPerEur,
      billableHours,
    },
    companyRules,
  );
  const budget = comparison.matchingBudget;

  return (
    <CalculatorSection
      title='Employee offer'
      description='What an employee offer gives you per year, and what your company would have to earn to give you the same. The company side uses your salary and expenses from the Company tab, and the billable hours from the Rate and salary tab.'
    >
      <div className='grid gap-4 sm:grid-cols-2'>
        <NumberField
          label='Offered gross salary per month'
          unit='EUR'
          value={settings.gross}
          min={0}
          onChange={(gross) => {
            onChange({ gross });
          }}
        />
        <NumberField
          label='Offered non-taxable payments per year'
          unit='EUR'
          value={settings.annualNonTaxablePayments}
          min={0}
          onChange={(annualNonTaxablePayments) => {
            onChange({ annualNonTaxablePayments });
          }}
          hint='Such as meal allowances, Christmas and holiday bonuses, and work result bonuses.'
        />
      </div>
      <div className='grid items-start gap-6 lg:grid-cols-2'>
        <BreakdownTable
          caption='The offer, per year'
          rows={[
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
          ]}
        />
        <BreakdownTable
          caption='Your company, for the same net'
          rows={[
            { label: 'Revenue needed', amount: budget.revenue, kind: 'total' },
            {
              label: 'Hourly rate needed',
              detail: `Revenue over ${formatNumber(billableHours)} billable hours`,
              amount: comparison.matchingHourlyRate,
              kind: 'info',
            },
            { label: 'Your salary cost', amount: -budget.salaryCost },
            ...(budget.expenses > 0 ? [{ label: 'Expenses', amount: -budget.expenses }] : []),
            {
              label: 'Profit tax',
              detail: `${formatPercent(budget.profitTaxRate)} of the profit`,
              amount: -budget.profitTax,
            },
            {
              label: 'Dividend tax',
              detail: `${formatPercent(companyRules.dividendTaxRate)} of ${formatEuro(budget.dividends)} in dividends`,
              amount: -budget.dividendTax,
            },
            { label: 'Your net', amount: budget.personalNet, kind: 'total' },
          ]}
        />
      </div>
      <PayrollTables breakdown={offerPayroll} />
    </CalculatorSection>
  );
}
