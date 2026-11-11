import { CURRENCIES, type Currency, PERIODS, type Period } from '../model/company-budget';
import { DISABILITY_LEVELS, type DisabilityLevel } from '../model/rules';
import {
  type FieldValidators,
  isArrayOf,
  isBoolean,
  isComplete,
  isFiniteNumberBetween,
  isIntegerBetween,
  isOneOf,
  isString,
} from './stored-fields';

/** Upper limits of the stored values, which the input fields also enforce. */
export const SETTING_LIMITS = { amount: 100_000_000, days: 366 } as const;

const MAX_AMOUNT = SETTING_LIMITS.amount;
const MAX_FAMILY_MEMBERS = 30;
const MAX_AGE = 130;
const DAYS_PER_YEAR = SETTING_LIMITS.days;
const HOURS_PER_DAY = 24;

/** Non-taxable payments within their caps, entered per month, per year, or both. */
export interface NonTaxablePaymentsSettings {
  readonly perMonth: number;
  readonly perYear: number;
}

const NON_TAXABLE_PAYMENTS_VALIDATORS: FieldValidators<NonTaxablePaymentsSettings> = {
  perMonth: isFiniteNumberBetween(0, MAX_AMOUNT),
  perYear: isFiniteNumberBetween(0, MAX_AMOUNT),
};

export interface TaxProfileSettings {
  readonly cityCode: number;
  readonly age: number;
  readonly isPensionPillar2Member: boolean;
  readonly childCount: number;
  readonly dependentCount: number;
  readonly disability: DisabilityLevel;
  readonly familyMembersWithPartialDisability: number;
  readonly familyMembersWithFullDisability: number;
  readonly livesInAssistedArea: boolean;
}

export const TAX_PROFILE_VALIDATORS: FieldValidators<TaxProfileSettings> = {
  cityCode: isIntegerBetween(0, Number.MAX_SAFE_INTEGER),
  age: isIntegerBetween(0, MAX_AGE),
  isPensionPillar2Member: isBoolean,
  childCount: isIntegerBetween(0, MAX_FAMILY_MEMBERS),
  dependentCount: isIntegerBetween(0, MAX_FAMILY_MEMBERS),
  disability: isOneOf(DISABILITY_LEVELS),
  familyMembersWithPartialDisability: isIntegerBetween(0, MAX_FAMILY_MEMBERS),
  familyMembersWithFullDisability: isIntegerBetween(0, MAX_FAMILY_MEMBERS),
  livesInAssistedArea: isBoolean,
};

export const EQUIVALENCE_SOURCES = ['hourlyRate', 'monthlyGross'] as const;
export type EquivalenceSource = (typeof EQUIVALENCE_SOURCES)[number];

export interface EquivalenceSettings {
  /** Which amount the user entered; the other one is calculated from it. */
  readonly source: EquivalenceSource;
  readonly hourlyRate: number;
  readonly monthlyGross: number;
  readonly hoursPerDay: number;
  readonly vacationDays: number;
  readonly sickDays: number;
  readonly otherUnbilledDays: number;
  readonly annualEmployerExtras: number;
}

export const EQUIVALENCE_VALIDATORS: FieldValidators<EquivalenceSettings> = {
  source: isOneOf(EQUIVALENCE_SOURCES),
  hourlyRate: isFiniteNumberBetween(0, MAX_AMOUNT),
  monthlyGross: isFiniteNumberBetween(0, MAX_AMOUNT),
  hoursPerDay: isFiniteNumberBetween(0, HOURS_PER_DAY),
  vacationDays: isFiniteNumberBetween(0, DAYS_PER_YEAR),
  sickDays: isFiniteNumberBetween(0, DAYS_PER_YEAR),
  otherUnbilledDays: isFiniteNumberBetween(0, DAYS_PER_YEAR),
  annualEmployerExtras: isFiniteNumberBetween(0, MAX_AMOUNT),
};

export const SALARY_DIRECTIONS = ['grossToNet', 'netToGross'] as const;
export type SalaryDirection = (typeof SALARY_DIRECTIONS)[number];

export interface SalarySettings {
  readonly direction: SalaryDirection;
  readonly gross: number;
  readonly netPay: number;
  readonly nonTaxablePayments: NonTaxablePaymentsSettings;
}

export const SALARY_VALIDATORS: FieldValidators<SalarySettings> = {
  direction: isOneOf(SALARY_DIRECTIONS),
  gross: isFiniteNumberBetween(0, MAX_AMOUNT),
  netPay: isFiniteNumberBetween(0, MAX_AMOUNT),
  nonTaxablePayments: isComplete(NON_TAXABLE_PAYMENTS_VALIDATORS),
};

export interface CompanySettings {
  readonly ownerGross: number;
  readonly ownerNonTaxablePayments: NonTaxablePaymentsSettings;
  /** US dollars per euro. */
  readonly usdPerEur: number;
  readonly incomes: readonly BudgetItemSettings[];
  readonly expenses: readonly BudgetItemSettings[];
}

export interface BudgetItemSettings {
  readonly id: string;
  readonly label: string;
  /** Without VAT. */
  readonly amount: number;
  readonly currency: Currency;
  readonly period: Period;
  readonly vatApplies: boolean;
  readonly vatRate: number;
}

const BUDGET_ITEM_VALIDATORS: FieldValidators<BudgetItemSettings> = {
  id: isString,
  label: isString,
  amount: isFiniteNumberBetween(0, MAX_AMOUNT),
  currency: isOneOf(CURRENCIES),
  period: isOneOf(PERIODS),
  vatApplies: isBoolean,
  vatRate: isFiniteNumberBetween(0, 1),
};

const MAX_EXCHANGE_RATE = 1000;

export const COMPANY_VALIDATORS: FieldValidators<CompanySettings> = {
  ownerGross: isFiniteNumberBetween(0, MAX_AMOUNT),
  ownerNonTaxablePayments: isComplete(NON_TAXABLE_PAYMENTS_VALIDATORS),
  usdPerEur: isFiniteNumberBetween(Number.MIN_VALUE, MAX_EXCHANGE_RATE),
  incomes: isArrayOf(isComplete(BUDGET_ITEM_VALIDATORS)),
  expenses: isArrayOf(isComplete(BUDGET_ITEM_VALIDATORS)),
};

export interface EmployeeOfferSettings {
  readonly gross: number;
  readonly nonTaxablePayments: NonTaxablePaymentsSettings;
}

export const EMPLOYEE_OFFER_VALIDATORS: FieldValidators<EmployeeOfferSettings> = {
  gross: isFiniteNumberBetween(0, MAX_AMOUNT),
  nonTaxablePayments: isComplete(NON_TAXABLE_PAYMENTS_VALIDATORS),
};

export const CALCULATOR_TABS = ['equivalence', 'salary', 'company', 'employeeOffer'] as const;
export type CalculatorTab = (typeof CALCULATOR_TABS)[number];

export interface PageSettings {
  readonly tab: CalculatorTab;
}

export const PAGE_VALIDATORS: FieldValidators<PageSettings> = {
  tab: isOneOf(CALCULATOR_TABS),
};
