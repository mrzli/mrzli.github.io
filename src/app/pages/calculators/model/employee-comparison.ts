import { MONTHS_PER_YEAR } from './calendar';
import { type BudgetItem, type CompanyBudget, calculateCompanyBudget } from './company-budget';
import { roundToCents } from './money';
import type { PayrollBreakdown } from './payroll';
import type { CompanyTaxRules } from './rules';

const CENTS_PER_EURO = 100;

export interface EmployeeComparisonInput {
  /** The employee offer's monthly payroll, with its non-taxable payments spread over the months. */
  readonly offerPayroll: PayrollBreakdown;
  /** The owner's monthly payroll as an employee of their own company. */
  readonly ownerPayroll: PayrollBreakdown;
  readonly companyExpenses: readonly BudgetItem[];
  readonly usdPerEur: number;
  readonly billableHours: number;
}

export interface EmployeeComparison {
  /** What the employee keeps per year, including the youth relief refund. */
  readonly offerNet: number;
  readonly offerEmployerCost: number;
  /** The hourly rate that costs a client as much per year as the offer costs the employer. */
  readonly employerCostHourlyRate: number;
  /** The company's year at the lowest revenue that matches the offer's net. */
  readonly matchingBudget: CompanyBudget;
  readonly matchingHourlyRate: number;
}

export function compareEmployeeOffer(
  input: EmployeeComparisonInput,
  rules: CompanyTaxRules,
): EmployeeComparison {
  const { offerPayroll, billableHours } = input;
  const offerNet = roundToCents((offerPayroll.netPay + offerPayroll.youthRelief) * MONTHS_PER_YEAR);
  const offerEmployerCost = roundToCents(offerPayroll.employerCost * MONTHS_PER_YEAR);
  const matchingBudget = findMatchingBudget(offerNet, input, rules);
  const perHour = (annualAmount: number): number =>
    billableHours > 0 ? roundToCents(annualAmount / billableHours) : 0;

  return {
    offerNet,
    offerEmployerCost,
    employerCostHourlyRate: perHour(offerEmployerCost),
    matchingBudget,
    matchingHourlyRate: perHour(matchingBudget.revenue),
  };
}

/**
 * Finds the lowest revenue, to the cent, at which the company covers its costs and the owner's
 * net reaches `targetNet`. The owner's net grows with revenue except where the higher profit tax
 * rate starts, so each side of that limit is searched separately.
 */
function findMatchingBudget(
  targetNet: number,
  input: EmployeeComparisonInput,
  rules: CompanyTaxRules,
): CompanyBudget {
  const budgetAt = (revenueCents: number): CompanyBudget =>
    calculateCompanyBudget(
      {
        incomes: [
          {
            amount: revenueCents / CENTS_PER_EURO,
            currency: 'EUR',
            period: 'year',
            vatRate: 0,
          },
        ],
        expenses: input.companyExpenses,
        usdPerEur: input.usdPerEur,
        billableHours: input.billableHours,
        payroll: input.ownerPayroll,
      },
      rules,
    );
  const isMatch = (revenueCents: number): boolean => {
    const budget = budgetAt(revenueCents);
    return budget.profit >= 0 && budget.personalNet >= targetNet;
  };

  const limitCents = Math.round(rules.profitTaxLowRateRevenueLimit * CENTS_PER_EURO);
  if (isMatch(limitCents)) {
    return budgetAt(findLowestMatch(0, limitCents, isMatch));
  }
  let highCents = limitCents * 2;
  while (!isMatch(highCents)) {
    highCents *= 2;
  }
  return budgetAt(findLowestMatch(limitCents + 1, highCents, isMatch));
}

/** Binary search for the lowest value in `[low, high]` that matches, given that `high` matches. */
function findLowestMatch(low: number, high: number, isMatch: (value: number) => boolean): number {
  let lowValue = low;
  let highValue = high;
  while (lowValue < highValue) {
    const middle = Math.floor((lowValue + highValue) / 2);
    if (isMatch(middle)) {
      highValue = middle;
    } else {
      lowValue = middle + 1;
    }
  }
  return lowValue;
}
