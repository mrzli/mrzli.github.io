import { MONTHS_PER_YEAR } from '../model/calendar';
import type { BudgetItem } from '../model/company-budget';
import type { WorkYearInput } from '../model/contractor-equivalence';
import type { PayrollInput, TaxProfile } from '../model/payroll';
import type {
  BudgetItemSettings,
  CompanySettings,
  EmployeeOfferSettings,
  EquivalenceSettings,
  NonTaxablePaymentsSettings,
} from './settings';

export function toBudgetItem(item: BudgetItemSettings): BudgetItem {
  return {
    amount: item.amount,
    currency: item.currency,
    period: item.period,
    vatRate: item.vatApplies ? item.vatRate : 0,
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
  nonTaxablePayments: NonTaxablePaymentsSettings,
  profile: TaxProfile,
): PayrollInput {
  return { gross, nonTaxablePayments: toMonthlyNonTaxablePayments(nonTaxablePayments), profile };
}

/** The monthly amount, with the yearly payments spread evenly over the months. */
export function toMonthlyNonTaxablePayments(payments: NonTaxablePaymentsSettings): number {
  return payments.perMonth + payments.perYear / MONTHS_PER_YEAR;
}

export function toWorkYearInput(settings: EquivalenceSettings): WorkYearInput {
  return {
    hoursPerDay: settings.hoursPerDay,
    vacationDays: settings.vacationDays,
    sickDays: settings.sickDays,
    otherUnbilledDays: settings.otherUnbilledDays,
  };
}
