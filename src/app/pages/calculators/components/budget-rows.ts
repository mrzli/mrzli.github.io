import { formatEuro, formatPercent } from '../format';
import { type CompanyBudget, OWNER_PAYEES, type OwnerPayee } from '../model/company-budget';
import { type BreakdownRow, rowsIf } from './breakdown-row';

/** From revenue to the dividends that the profit after tax pays out. */
export function getCompanyRows(budget: CompanyBudget): readonly BreakdownRow[] {
  const paidToOwner = OWNER_PAYEES.reduce(
    (sum, payee) => sum + budget.ownerPayments[payee].amount,
    0,
  );
  return [
    { label: 'Revenue', amount: budget.revenue, kind: 'subtotal' },
    {
      label: 'Your salary',
      detail: 'Gross and employer health insurance',
      amount: -budget.salaryCost,
    },
    ...rowsIf(budget.expenses > 0, {
      label: 'Expenses',
      detail: paidToOwner > 0 ? `Including ${formatEuro(paidToOwner)} paid to you` : undefined,
      amount: -budget.expenses,
    }),
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
    { label: 'Net salary', amount: budget.netSalary },
    ...rowsIf(budget.youthRelief > 0, { label: 'Youth tax relief', amount: budget.youthRelief }),
    { label: 'Dividends', amount: budget.dividends },
    {
      label: 'Dividend tax',
      detail: `${formatPercent(dividendTaxRate)} of the dividends`,
      amount: -budget.dividendTax,
    },
    ...OWNER_PAYEES.flatMap((payee) => getOwnerPaymentRows(budget, payee)),
    { label: 'Total net', amount: budget.personalNet, kind: 'total' },
  ];
}

const OWNER_PAYMENT_LABELS: Readonly<Record<OwnerPayee, string>> = {
  ownerTaxFree: 'Tax-free payments',
  ownerRent: 'Rent',
  ownerInterest: 'Interest',
};

function getOwnerPaymentRows(budget: CompanyBudget, payee: OwnerPayee): readonly BreakdownRow[] {
  const payment = budget.ownerPayments[payee];
  return rowsIf(payment.amount > 0, {
    label: OWNER_PAYMENT_LABELS[payee],
    detail:
      payment.taxRate > 0
        ? `${formatEuro(payment.amount)} less ${formatPercent(payment.taxRate)} tax`
        : 'Paid in full',
    amount: payment.net,
  });
}
