import { MONTHS_PER_YEAR } from './calendar';
import { roundToCents } from './money';
import type { PayrollBreakdown } from './payroll';
import type { CompanyTaxRules } from './rules';

export const CURRENCIES = ['EUR', 'USD'] as const;
export type Currency = (typeof CURRENCIES)[number];

/** `hour` counts the billable hours of a year, which suits income billed by the hour. */
export const PERIODS = ['hour', 'month', 'year'] as const;
export type Period = (typeof PERIODS)[number];

/** Who receives an expense: others, or the owner in a form with its own tax. */
export const PAYEES = ['others', 'ownerTaxFree', 'ownerRent', 'ownerInterest'] as const;
export type Payee = (typeof PAYEES)[number];
export type OwnerPayee = Exclude<Payee, 'others'>;
export const OWNER_PAYEES: readonly OwnerPayee[] = ['ownerTaxFree', 'ownerRent', 'ownerInterest'];

/** An income or expense amount without VAT. */
export interface BudgetItem {
  readonly amount: number;
  readonly currency: Currency;
  readonly period: Period;
  /** Zero when no VAT applies. */
  readonly vatRate: number;
}

export type ExpenseItem = BudgetItem & { readonly payee: Payee };

export interface CompanyBudgetInput {
  readonly incomes: readonly BudgetItem[];
  readonly expenses: readonly ExpenseItem[];
  readonly usdPerEur: number;
  /** Billable hours per year, for items paid per hour. */
  readonly billableHours: number;
  /** The owner's monthly payroll as an employee of the company. */
  readonly payroll: PayrollBreakdown;
}

/** Annual amounts in EUR, without VAT unless the name says otherwise. */
export interface CompanyBudget {
  readonly revenue: number;
  readonly salaryCost: number;
  readonly expenses: number;
  readonly profit: number;
  readonly profitTaxRate: number;
  readonly profitTax: number;
  readonly dividends: number;
  readonly dividendTax: number;
  readonly netDividends: number;
  readonly netSalary: number;
  readonly youthRelief: number;
  /** Expenses paid to the owner, by the form they take. */
  readonly ownerPayments: Readonly<Record<OwnerPayee, OwnerPayment>>;
  readonly personalNet: number;
  readonly vatCharged: number;
  readonly vatPaid: number;
}

export interface OwnerPayment {
  readonly amount: number;
  readonly taxRate: number;
  readonly tax: number;
  readonly net: number;
}

/**
 * The company's year when all profit left after expenses and profit tax is paid out as dividends.
 * VAT is reported for information only: a company in the VAT system charges it on top of its
 * invoices and deducts what it pays, so it does not change the result.
 */
export function calculateCompanyBudget(
  input: CompanyBudgetInput,
  rules: CompanyTaxRules,
): CompanyBudget {
  const periodsPerYear: Readonly<Record<Period, number>> = {
    hour: input.billableHours,
    month: MONTHS_PER_YEAR,
    year: 1,
  };
  const toAnnualEur = (item: BudgetItem): number =>
    toEur(item.amount, item.currency, input.usdPerEur) * periodsPerYear[item.period];
  const sumAnnual = (items: readonly BudgetItem[]): number =>
    roundToCents(items.reduce((sum, item) => sum + toAnnualEur(item), 0));
  const sumAnnualVat = (items: readonly BudgetItem[]): number =>
    roundToCents(items.reduce((sum, item) => sum + toAnnualEur(item) * item.vatRate, 0));

  const revenue = sumAnnual(input.incomes);
  const salaryCost = roundToCents(input.payroll.employerCost * MONTHS_PER_YEAR);
  const expenses = sumAnnual(input.expenses);
  const profit = roundToCents(revenue - salaryCost - expenses);

  const profitTaxRate =
    revenue <= rules.profitTaxLowRateRevenueLimit
      ? rules.profitTaxLowRate
      : rules.profitTaxHighRate;
  const profitTax = roundToCents(Math.max(0, profit) * profitTaxRate);
  const dividends = roundToCents(Math.max(0, profit - profitTax));
  const dividendTax = roundToCents(dividends * rules.dividendTaxRate);
  const netDividends = roundToCents(dividends - dividendTax);

  const netSalary = roundToCents(input.payroll.netPay * MONTHS_PER_YEAR);
  const youthRelief = roundToCents(input.payroll.youthRelief * MONTHS_PER_YEAR);
  const ownerPayments = Object.fromEntries(
    OWNER_PAYEES.map((payee) => [
      payee,
      toOwnerPayment(
        sumAnnual(input.expenses.filter((item) => item.payee === payee)),
        getOwnerPaymentTaxRate(payee, rules),
      ),
    ]),
  ) as Record<OwnerPayee, OwnerPayment>;
  const ownerPaymentsNet = OWNER_PAYEES.reduce((sum, payee) => sum + ownerPayments[payee].net, 0);

  return {
    revenue,
    salaryCost,
    expenses,
    profit,
    profitTaxRate,
    profitTax,
    dividends,
    dividendTax,
    netDividends,
    netSalary,
    youthRelief,
    ownerPayments,
    personalNet: roundToCents(netSalary + youthRelief + netDividends + ownerPaymentsNet),
    vatCharged: sumAnnualVat(input.incomes),
    vatPaid: sumAnnualVat(input.expenses),
  };
}

/** The effective tax on the whole amount, with rent's flat expense share left untaxed. */
function getOwnerPaymentTaxRate(payee: OwnerPayee, rules: CompanyTaxRules): number {
  switch (payee) {
    case 'ownerTaxFree': {
      return 0;
    }
    case 'ownerRent': {
      return rules.rentTaxRate * (1 - rules.rentFlatExpenseShare);
    }
    case 'ownerInterest': {
      return rules.interestTaxRate;
    }
  }
}

function toOwnerPayment(amount: number, taxRate: number): OwnerPayment {
  const tax = roundToCents(amount * taxRate);
  return { amount, taxRate, tax, net: roundToCents(amount - tax) };
}

function toEur(amount: number, currency: Currency, usdPerEur: number): number {
  return currency === 'EUR' ? amount : amount / usdPerEur;
}
