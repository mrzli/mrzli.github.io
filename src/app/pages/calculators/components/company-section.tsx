import type { ReactNode } from 'react';

import { formatEuro, formatPercent } from '../format';
import { MONTHS_PER_YEAR } from '../model/calendar';
import { calculateCompanyBudget, PAYEES, type Payee, type Period } from '../model/company-budget';
import { roundToCents } from '../model/money';
import { calculatePayroll, type TaxProfile } from '../model/payroll';
import type { CompanyTaxRules, PayrollRules } from '../model/rules';
import { toBudgetItem, toExpenseItem, toOwnerPayrollInput } from '../settings/conversions';
import type {
  BudgetItemSettings,
  CompanySettings,
  ExpenseItemSettings,
} from '../settings/settings';
import { BreakdownTables } from './breakdown-tables';
import { BudgetItemsEditor } from './budget-items-editor';
import { getCompanyRows, getOwnerRows, getVatRows } from './budget-rows';
import { CalculatorSection } from './calculator-section';
import { FieldGroup, NumberField, SelectField, type SelectOption } from './controls';
import { AmountField } from './fields';
import { PAYEE_LABELS } from './payees';
import { PayrollTables } from './payroll-tables';
import { TitledFieldset } from './titled-fieldset';

export interface CompanySectionProps {
  readonly settings: CompanySettings;
  readonly onChange: (changes: Partial<CompanySettings>) => void;
  readonly createIncomeItem: () => BudgetItemSettings;
  readonly createExpenseItem: () => ExpenseItemSettings;
  /** Billable hours per year, for income paid per hour. */
  readonly billableHours: number;
  readonly profile: TaxProfile;
  readonly payrollRules: PayrollRules;
  readonly companyRules: CompanyTaxRules;
}

const PERCENT = 100;
const PAYEE_OPTIONS: readonly SelectOption<Payee>[] = PAYEES.map((payee) => ({
  value: payee,
  label: PAYEE_LABELS[payee],
}));
const INCOME_PERIODS: readonly Period[] = ['hour', 'month', 'year'];
const EXPENSE_PERIODS: readonly Period[] = ['month', 'year'];

export function CompanySection({
  settings,
  onChange,
  createIncomeItem,
  createExpenseItem,
  billableHours,
  profile,
  payrollRules,
  companyRules,
}: CompanySectionProps): ReactNode {
  const payroll = calculatePayroll(toOwnerPayrollInput(settings, profile), payrollRules);
  const budget = calculateCompanyBudget(
    {
      incomes: settings.incomes.map((item) => toBudgetItem(item, settings.vatRate)),
      expenses: settings.expenses.map((item) => toExpenseItem(item, settings.vatRate)),
      usdPerEur: settings.usdPerEur,
      billableHours,
      payroll,
    },
    companyRules,
  );

  const rentTaxRate = companyRules.rentTaxRate * (1 - companyRules.rentFlatExpenseShare);
  const expenseHint = `Expenses paid to you come back to you: tax-free payments in full, within their caps (meal allowance up to 100 EUR a month, bonuses up to 700 EUR a year, mileage, per diems); rent less ${formatPercent(rentTaxRate)} tax, which you pay yourself; interest less ${formatPercent(companyRules.interestTaxRate)} tax.`;

  return (
    <CalculatorSection
      title='Own company'
      description='What you keep in a year from your own company in the VAT system: your salary, plus all profit after expenses and profit tax paid out as dividends. Enter amounts without VAT; VAT is shown for information only, because the company deducts what it pays. Income per hour counts the billable hours from the Contractor rate tab.'
    >
      <div className='grid gap-4 sm:grid-cols-2'>
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
        createItem={createIncomeItem}
      />
      <TitledFieldset
        title='Salary'
        hint={`Your salary from the company, under the payroll rules: the company also pays ${formatPercent(payrollRules.contributions.employerHealthRate)} health insurance on top of the gross.`}
      >
        <div className='grid gap-4 border-t border-slate-200 pt-3 sm:grid-cols-2 dark:border-slate-800'>
          <AmountField
            label='Gross salary per month'
            value={settings.ownerGross}
            onChange={(ownerGross) => {
              onChange({ ownerGross });
            }}
          />
        </div>
      </TitledFieldset>
      <BudgetItemsEditor
        title='Expenses'
        periods={EXPENSE_PERIODS}
        items={settings.expenses}
        onChange={(expenses) => {
          onChange({ expenses });
        }}
        createItem={createExpenseItem}
        hint={expenseHint}
        renderExtraField={(item, name, update) => (
          <SelectField
            label={`${name}: paid to`}
            hideLabel
            value={item.payee}
            options={PAYEE_OPTIONS}
            onChange={(payee) => {
              update({ payee });
            }}
          />
        )}
      />
      <BreakdownTables
        tables={[
          {
            caption: 'Company, per year',
            rows: [...getCompanyRows(budget), ...getVatRows(budget)],
          },
          {
            caption: 'You, per year',
            rows: [
              ...getOwnerRows(budget, companyRules.dividendTaxRate),
              {
                label: 'Total net per month',
                detail: `${formatEuro(budget.personalNet)} over ${MONTHS_PER_YEAR} months`,
                amount: budget.personalNet / MONTHS_PER_YEAR,
                kind: 'info',
              },
            ],
          },
        ]}
      />
      <PayrollTables breakdown={payroll} />
    </CalculatorSection>
  );
}
