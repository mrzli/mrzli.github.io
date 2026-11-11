import { DISABILITY_LEVELS, type DisabilityLevel } from '../model/rules';
import {
  type FieldValidators,
  isBoolean,
  isFiniteNumberBetween,
  isIntegerBetween,
  isOneOf,
} from './stored-fields';

const MAX_AMOUNT = 100_000_000;
const MAX_FAMILY_MEMBERS = 30;
const MAX_AGE = 130;
const DAYS_PER_YEAR = 366;
const HOURS_PER_DAY = 24;

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
  readonly nonTaxablePayments: number;
}

export const SALARY_VALIDATORS: FieldValidators<SalarySettings> = {
  direction: isOneOf(SALARY_DIRECTIONS),
  gross: isFiniteNumberBetween(0, MAX_AMOUNT),
  netPay: isFiniteNumberBetween(0, MAX_AMOUNT),
  nonTaxablePayments: isFiniteNumberBetween(0, MAX_AMOUNT),
};
