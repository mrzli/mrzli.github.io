import type { ReactNode } from 'react';

import { formatEuro, formatPercent } from '../format';
import { MONTHS_PER_YEAR } from '../model/calendar';
import { calculateCompanyBudget, type Period } from '../model/company-budget';
import { roundToCents } from '../model/money';
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
import { FieldGroup, NumberField } from './controls';
import { NonTaxablePaymentsFields } from './non-taxable-payments-fields';
import { PayrollTables } from './payroll-tables';

export interface CompanySectionProps {
  readonly settings: CompanySettings;
  readonly onChange: (changes: Partial<CompanySettings>) => void;
  readonly createItem: () => BudgetItemSettings;
  /** Billable hours per year, for income paid per hour. */
  readonly billableHours: number;
  readonly profile: TaxProfile;
  readonly payrollRules: PayrollRules;
  readonly companyRules: CompanyTaxRules;
}

const PERCENT = 100;
const INCOME_PERIODS: readonly Period[] = ['hour', 'month', 'year'];
const EXPENSE_PERIODS: readonly Period[] = ['month', 'year'];

export function CompanySection({
  settings,
  onChange,
  createItem,
  billableHours,
  profile,
  payrollRules,
  companyRules,
}: CompanySectionProps): ReactNode {
  const payroll = calculatePayroll(toOwnerPayrollInput(settings, profile), payrollRules);
  const budget = calculateCompanyBudget(
    {
      incomes: settings.incomes.map((item) => toBudgetItem(item, settings.vatRate)),
      expenses: settings.expenses.map((item) => toBudgetItem(item, settings.vatRate)),
      usdPerEur: settings.usdPerEur,
      billableHours,
      payroll,
    },
    companyRules,
  );

  return (
    <CalculatorSection
      title='Own company'
      description='What you keep in a year from your own company in the VAT system: your salary, plus all profit after expenses and profit tax paid out as dividends. Enter amounts without VAT; VAT is shown for information only, because the company deducts what it pays. Income per hour counts the billable hours from the Contractor rate tab.'
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
        <NonTaxablePaymentsFields
          labelPrefix='Your'
          value={settings.ownerNonTaxablePayments}
          onChange={(ownerNonTaxablePayments) => {
            onChange({ ownerNonTaxablePayments });
          }}
        />
        <FieldGroup legend='Currency and VAT' columns='two'>
          <NumberField
            label='US dollars per euro'
            value={settings.usdPerEur}
            min={0}
            onChange={(usdPerEur) => {
              if (usdPerEur > 0) {
                onChange({ usdPerEur });
              }
            }}
            hint='Converts the items entered in USD.'
          />
          <NumberField
            label='VAT rate'
            unit='%'
            value={roundToCents(settings.vatRate * PERCENT)}
            min={0}
            max={PERCENT}
            onChange={(vatPercent) => {
              onChange({ vatRate: vatPercent / PERCENT });
            }}
            hint='For the items marked as having VAT.'
          />
        </FieldGroup>
      </div>
      <BudgetItemsEditor
        title='Income'
        periods={INCOME_PERIODS}
        items={settings.incomes}
        onChange={(incomes) => {
          onChange({ incomes });
        }}
        createItem={createItem}
      />
      <BudgetItemsEditor
        title='Expenses'
        periods={EXPENSE_PERIODS}
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
