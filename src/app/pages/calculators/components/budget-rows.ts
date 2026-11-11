import { formatPercent } from '../format';
import type { CompanyBudget } from '../model/company-budget';
import { type BreakdownRow, rowsIf } from './breakdown-row';

/** From revenue to the dividends that the profit after tax pays out. */
export function getCompanyRows(budget: CompanyBudget): readonly BreakdownRow[] {
  return [
    { label: 'Revenue', amount: budget.revenue, kind: 'subtotal' },
    {
      label: 'Your salary',
      detail: 'Gross, employer health insurance, and non-taxable payments',
      amount: -budget.salaryCost,
    },
    ...rowsIf(budget.expenses > 0, { label: 'Expenses', amount: -budget.expenses }),
    { label: 'Profit', amount: budget.profit, kind: 'subtotal' },
    {
      label: 'Profit tax',
      detail: `${formatPercent(budget.profitTaxRate)} of the profit`,
      amount: -budget.profitTax,
    },
    { label: 'Dividends', amount: budget.dividends, kind: 'total' },
  ];
}

export function getVatRows(budget: CompanyBudget): readonly BreakdownRow[] {
  return [
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
  ];
}

/** What the owner keeps: net salary and dividends after dividend tax. */
export function getOwnerRows(
  budget: CompanyBudget,
  dividendTaxRate: number,
): readonly BreakdownRow[] {
  return [
    { label: 'Net salary', detail: 'With non-taxable payments', amount: budget.netSalary },
    ...rowsIf(budget.youthRelief > 0, { label: 'Youth tax relief', amount: budget.youthRelief }),
    { label: 'Dividends', amount: budget.dividends },
    {
      label: 'Dividend tax',
      detail: `${formatPercent(dividendTaxRate)} of the dividends`,
      amount: -budget.dividendTax,
    },
    { label: 'Total net', amount: budget.personalNet, kind: 'total' },
  ];
}
