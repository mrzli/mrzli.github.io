import { MONTHS_PER_YEAR } from '../model/calendar';
import type { BudgetItem } from '../model/company-budget';
import type { WorkYearInput } from '../model/contractor-equivalence';
import type { PayrollInput, TaxProfile } from '../model/payroll';
import type {
  BudgetItemSettings,
  CompanySettings,
  EmployeeOfferSettings,
  EquivalenceSettings,
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
  return toPayrollInput(settings.ownerGross, settings.ownerAnnualNonTaxablePayments, profile);
}

export function toOfferPayrollInput(
  settings: EmployeeOfferSettings,
  profile: TaxProfile,
): PayrollInput {
  return toPayrollInput(settings.gross, settings.annualNonTaxablePayments, profile);
}

/** A monthly payroll input with annual non-taxable payments spread evenly over the months. */
function toPayrollInput(
  gross: number,
  annualNonTaxablePayments: number,
  profile: TaxProfile,
): PayrollInput {
  return { gross, nonTaxablePayments: annualNonTaxablePayments / MONTHS_PER_YEAR, profile };
}

export function toWorkYearInput(settings: EquivalenceSettings): WorkYearInput {
  return {
    hoursPerDay: settings.hoursPerDay,
    vacationDays: settings.vacationDays,
    sickDays: settings.sickDays,
    otherUnbilledDays: settings.otherUnbilledDays,
  };
}
