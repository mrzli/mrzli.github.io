import { MONTHS_PER_YEAR } from '../model/calendar';
import type { BudgetItem, ExpenseItem } from '../model/company-budget';
import type { WorkYearInput } from '../model/contractor-equivalence';
import type { PayrollInput, TaxProfile } from '../model/payroll';
import type {
  BudgetItemSettings,
  CompanySettings,
  EmployeeOfferSettings,
  EquivalenceSettings,
  ExpenseItemSettings,
  MonthlyAndYearlyAmounts,
} from './settings';

/** `vatRate` is the company's rate, which applies when the item has VAT. */
export function toBudgetItem(item: BudgetItemSettings, vatRate: number): BudgetItem {
  return {
    amount: item.amount,
    currency: item.currency,
    period: item.period,
    vatRate: item.vatApplies ? vatRate : 0,
  };
}

export function toExpenseItem(item: ExpenseItemSettings, vatRate: number): ExpenseItem {
  return { ...toBudgetItem(item, vatRate), payee: item.payee };
}

/** Non-taxable payments to the owner are expense items paid to them, outside the payroll. */
export function toOwnerPayrollInput(settings: CompanySettings, profile: TaxProfile): PayrollInput {
  return { gross: settings.ownerGross, nonTaxablePayments: 0, profile };
}

export function toOfferPayrollInput(
  settings: EmployeeOfferSettings,
  profile: TaxProfile,
): PayrollInput {
  return {
    gross: settings.gross,
    nonTaxablePayments: toMonthlyAmount(settings.nonTaxablePayments),
    profile,
  };
}

/** The monthly amount, with the yearly amount spread evenly over the months. */
export function toMonthlyAmount(amounts: MonthlyAndYearlyAmounts): number {
  return amounts.perMonth + amounts.perYear / MONTHS_PER_YEAR;
}

export function toAnnualAmount(amounts: MonthlyAndYearlyAmounts): number {
  return amounts.perMonth * MONTHS_PER_YEAR + amounts.perYear;
}

export function toWorkYearInput(settings: EquivalenceSettings): WorkYearInput {
  return {
    hoursPerDay: settings.hoursPerDay,
    vacationDays: settings.vacationDays,
    sickDays: settings.sickDays,
    otherUnbilledDays: settings.otherUnbilledDays,
  };
}
