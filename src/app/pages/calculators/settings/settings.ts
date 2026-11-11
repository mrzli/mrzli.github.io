import {
  CURRENCIES,
  type Currency,
  PAYEES,
  type Payee,
  PERIODS,
  type Period,
} from '../model/company-budget';
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
export const SETTING_LIMITS = { amount: 100_000_000, days: 366, familyMembers: 30 } as const;

const MAX_AMOUNT = SETTING_LIMITS.amount;
const MAX_FAMILY_MEMBERS = SETTING_LIMITS.familyMembers;
const MAX_AGE = 130;
const DAYS_PER_YEAR = SETTING_LIMITS.days;
const HOURS_PER_DAY = 24;

/** An amount paid monthly, yearly, or both, such as non-taxable payments. */
export interface MonthlyAndYearlyAmounts {
  readonly perMonth: number;
  readonly perYear: number;
}

const MONTHLY_AND_YEARLY_VALIDATORS: FieldValidators<MonthlyAndYearlyAmounts> = {
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
  /** What the employer pays on top of gross and its contributions, such as bonuses. */
  readonly employerExtras: MonthlyAndYearlyAmounts;
}

export const EQUIVALENCE_VALIDATORS: FieldValidators<EquivalenceSettings> = {
  source: isOneOf(EQUIVALENCE_SOURCES),
  hourlyRate: isFiniteNumberBetween(0, MAX_AMOUNT),
  monthlyGross: isFiniteNumberBetween(0, MAX_AMOUNT),
  hoursPerDay: isFiniteNumberBetween(0, HOURS_PER_DAY),
  vacationDays: isFiniteNumberBetween(0, DAYS_PER_YEAR),
  sickDays: isFiniteNumberBetween(0, DAYS_PER_YEAR),
  otherUnbilledDays: isFiniteNumberBetween(0, DAYS_PER_YEAR),
  employerExtras: isComplete(MONTHLY_AND_YEARLY_VALIDATORS),
};

export const SALARY_DIRECTIONS = ['grossToNet', 'netToGross'] as const;
export type SalaryDirection = (typeof SALARY_DIRECTIONS)[number];

export interface SalarySettings {
  readonly direction: SalaryDirection;
  readonly gross: number;
  readonly netPay: number;
}

export const SALARY_VALIDATORS: FieldValidators<SalarySettings> = {
  direction: isOneOf(SALARY_DIRECTIONS),
  gross: isFiniteNumberBetween(0, MAX_AMOUNT),
  netPay: isFiniteNumberBetween(0, MAX_AMOUNT),
};

export interface CompanySettings {
  readonly ownerGross: number;
  /** US dollars per euro. */
  readonly usdPerEur: number;
  /** Applies to the items marked as having VAT. */
  readonly vatRate: number;
  readonly incomes: readonly BudgetItemSettings[];
  readonly expenses: readonly ExpenseItemSettings[];
}

export interface BudgetItemSettings {
  readonly id: string;
  readonly label: string;
  /** Without VAT. */
  readonly amount: number;
  readonly currency: Currency;
  readonly period: Period;
  readonly vatApplies: boolean;
}

const BUDGET_ITEM_VALIDATORS: FieldValidators<BudgetItemSettings> = {
  id: isString,
  label: isString,
  amount: isFiniteNumberBetween(0, MAX_AMOUNT),
  currency: isOneOf(CURRENCIES),
  period: isOneOf(PERIODS),
  vatApplies: isBoolean,
};

export type ExpenseItemSettings = BudgetItemSettings & { readonly payee: Payee };

const EXPENSE_ITEM_VALIDATORS: FieldValidators<ExpenseItemSettings> = {
  ...BUDGET_ITEM_VALIDATORS,
  payee: isOneOf(PAYEES),
};

const MAX_EXCHANGE_RATE = 1000;

export const COMPANY_VALIDATORS: FieldValidators<CompanySettings> = {
  ownerGross: isFiniteNumberBetween(0, MAX_AMOUNT),
  usdPerEur: isFiniteNumberBetween(Number.MIN_VALUE, MAX_EXCHANGE_RATE),
  vatRate: isFiniteNumberBetween(0, 1),
  incomes: isArrayOf(isComplete(BUDGET_ITEM_VALIDATORS)),
  expenses: isArrayOf(isComplete(EXPENSE_ITEM_VALIDATORS)),
};

export interface EmployeeOfferSettings {
  readonly gross: number;
  readonly nonTaxablePayments: MonthlyAndYearlyAmounts;
}

export const EMPLOYEE_OFFER_VALIDATORS: FieldValidators<EmployeeOfferSettings> = {
  gross: isFiniteNumberBetween(0, MAX_AMOUNT),
  nonTaxablePayments: isComplete(MONTHLY_AND_YEARLY_VALIDATORS),
};

export const CALCULATOR_TABS = ['salary', 'equivalence', 'company', 'employeeOffer'] as const;
export type CalculatorTab = (typeof CALCULATOR_TABS)[number];

export interface PageSettings {
  readonly tab: CalculatorTab;
}

export const PAGE_VALIDATORS: FieldValidators<PageSettings> = {
  tab: isOneOf(CALCULATOR_TABS),
};
