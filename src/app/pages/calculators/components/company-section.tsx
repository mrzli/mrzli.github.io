import type { ReactNode } from 'react';

import { formatEuro, formatPercent } from '../format';
import { MONTHS_PER_YEAR } from '../model/calendar';
import { calculateCompanyBudget } from '../model/company-budget';
import { calculatePayroll, type TaxProfile } from '../model/payroll';
import type { CompanyTaxRules, PayrollRules } from '../model/rules';
import { toBudgetItem, toOwnerPayrollInput } from '../settings/conversions';
import {
  SETTING_LIMITS,
  type BudgetItemSettings,
  type CompanySettings,
} from '../settings/settings';
import { BreakdownTable } from './breakdown-table';
import { BudgetItemsEditor } from './budget-items-editor';
import { CalculatorSection } from './calculator-section';
import { NumberField } from './controls';
import { NonTaxablePaymentsFields } from './non-taxable-payments-fields';
import { PayrollTables } from './payroll-tables';

export interface CompanySectionProps {
  readonly settings: CompanySettings;
  readonly onChange: (changes: Partial<CompanySettings>) => void;
  readonly createItem: () => BudgetItemSettings;
  readonly profile: TaxProfile;
  readonly payrollRules: PayrollRules;
  readonly companyRules: CompanyTaxRules;
}

export function CompanySection({
  settings,
  onChange,
  createItem,
  profile,
  payrollRules,
  companyRules,
}: CompanySectionProps): ReactNode {
  const payroll = calculatePayroll(toOwnerPayrollInput(settings, profile), payrollRules);
  const budget = calculateCompanyBudget(
    {
      incomes: settings.incomes.map(toBudgetItem),
      expenses: settings.expenses.map(toBudgetItem),
      usdPerEur: settings.usdPerEur,
      payroll,
    },
    companyRules,
  );

  return (
    <CalculatorSection
      title='Company owner'
      description='What you keep in a year from your own company in the VAT system: your salary, plus all profit after expenses and profit tax paid out as dividends. Enter amounts without VAT; VAT is shown for information only, because the company deducts what it pays.'
    >
      <div className='grid gap-4 sm:grid-cols-2'>
        <NumberField
          label='Your gross salary per month'
          unit='EUR'
          max={SETTING_LIMITS.amount}
          value={settings.ownerGross}
          min={0}
          onChange={(ownerGross) => {
            onChange({ ownerGross });
          }}
        />
        <NumberField
          label='US dollars per euro'
          value={settings.usdPerEur}
          min={0}
          onChange={(usdPerEur) => {
            if (usdPerEur > 0) {
              onChange({ usdPerEur });
            }
          }}
        />
        <NonTaxablePaymentsFields
          labelPrefix='Your'
          value={settings.ownerNonTaxablePayments}
          onChange={(ownerNonTaxablePayments) => {
            onChange({ ownerNonTaxablePayments });
          }}
        />
      </div>
      <BudgetItemsEditor
        title='Income'
        items={settings.incomes}
        onChange={(incomes) => {
          onChange({ incomes });
        }}
        createItem={createItem}
      />
      <BudgetItemsEditor
        title='Expenses'
        items={settings.expenses}
        onChange={(expenses) => {
          onChange({ expenses });
        }}
        createItem={createItem}
      />
      <div className='grid items-start gap-6 lg:grid-cols-2'>
        <BreakdownTable
          caption='Company, per year'
          rows={[
            { label: 'Revenue', amount: budget.revenue, kind: 'subtotal' },
            {
              label: 'Your salary',
              detail: 'Gross, employer health insurance, and non-taxable payments',
              amount: -budget.salaryCost,
            },
            { label: 'Expenses', amount: -budget.expenses },
            { label: 'Profit', amount: budget.profit, kind: 'subtotal' },
            {
              label: 'Profit tax',
              detail: `${formatPercent(budget.profitTaxRate)} of the profit`,
              amount: -budget.profitTax,
            },
            { label: 'Dividends', amount: budget.dividends, kind: 'total' },
            {
              label: 'VAT charged on income',
              detail: 'Information only',
              amount: budget.vatCharged,
              kind: 'info',
            },
            {
              label: 'VAT paid on expenses',
              detail: 'Information only',
              amount: budget.vatPaid,
              kind: 'info',
            },
          ]}
        />
        <BreakdownTable
          caption='You, per year'
          rows={[
            { label: 'Net salary', detail: 'With non-taxable payments', amount: budget.netSalary },
            ...(budget.youthRelief > 0
              ? [{ label: 'Youth tax relief', amount: budget.youthRelief }]
              : []),
            { label: 'Dividends', amount: budget.dividends },
            {
              label: 'Dividend tax',
              detail: `${formatPercent(companyRules.dividendTaxRate)} of the dividends`,
              amount: -budget.dividendTax,
            },
            { label: 'Total net', amount: budget.personalNet, kind: 'total' },
            {
              label: 'Total net per month',
              detail: `${formatEuro(budget.personalNet)} over ${MONTHS_PER_YEAR} months`,
              amount: budget.personalNet / MONTHS_PER_YEAR,
              kind: 'info',
            },
          ]}
        />
      </div>
      <PayrollTables breakdown={payroll} />
    </CalculatorSection>
  );
}
