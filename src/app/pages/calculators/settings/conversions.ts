import { MONTHS_PER_YEAR } from '../model/calendar';
import type { BudgetItem } from '../model/company-budget';
import type { WorkYearInput } from '../model/contractor-equivalence';
import type { PayrollInput, TaxProfile } from '../model/payroll';
import type {
  BudgetItemSettings,
  CompanySettings,
  EmployeeOfferSettings,
  EquivalenceSettings,
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

export function toOwnerPayrollInput(settings: CompanySettings, profile: TaxProfile): PayrollInput {
  return toPayrollInput(settings.ownerGross, settings.ownerNonTaxablePayments, profile);
}

export function toOfferPayrollInput(
  settings: EmployeeOfferSettings,
  profile: TaxProfile,
): PayrollInput {
  return toPayrollInput(settings.gross, settings.nonTaxablePayments, profile);
}

function toPayrollInput(
  gross: number,
  nonTaxablePayments: MonthlyAndYearlyAmounts,
  profile: TaxProfile,
): PayrollInput {
  return { gross, nonTaxablePayments: toMonthlyAmount(nonTaxablePayments), profile };
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
