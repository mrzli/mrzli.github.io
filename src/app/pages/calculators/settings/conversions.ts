import type { BudgetItem } from '../model/company-budget';
import type { WorkYearInput } from '../model/contractor-equivalence';
import type { PayrollInput, TaxProfile } from '../model/payroll';
import type { BudgetItemSettings, CompanySettings, EquivalenceSettings } from './settings';

const MONTHS_PER_YEAR = 12;

export function toBudgetItem(item: BudgetItemSettings): BudgetItem {
  return {
    amount: item.amount,
    currency: item.currency,
    period: item.period,
    vatRate: item.vatApplies ? item.vatRate : 0,
  };
}

export function toOwnerPayrollInput(settings: CompanySettings, profile: TaxProfile): PayrollInput {
  return {
    gross: settings.ownerGross,
    nonTaxablePayments: settings.ownerAnnualNonTaxablePayments / MONTHS_PER_YEAR,
    profile,
  };
}

export function toWorkYearInput(settings: EquivalenceSettings): WorkYearInput {
  return {
    hoursPerDay: settings.hoursPerDay,
    vacationDays: settings.vacationDays,
    sickDays: settings.sickDays,
    otherUnbilledDays: settings.otherUnbilledDays,
  };
}
