import { roundToCents } from './money';

/**
 * Croatian public holidays (Zakon o blagdanima, NN 110/2019), with the long-run share of years in
 * which each falls on a weekday. Fixed dates fall on a weekday 5 years in 7. Averaging keeps the
 * result independent of a particular year.
 */
export const PUBLIC_HOLIDAYS: readonly PublicHoliday[] = [
  { name: "New Year's Day", weekdayShare: 5 / 7 },
  { name: 'Epiphany', weekdayShare: 5 / 7 },
  { name: 'Easter Sunday', weekdayShare: 0 },
  { name: 'Easter Monday', weekdayShare: 1 },
  { name: 'Labor Day', weekdayShare: 5 / 7 },
  { name: 'Statehood Day', weekdayShare: 5 / 7 },
  { name: 'Corpus Christi', weekdayShare: 1 },
  { name: 'Anti-Fascist Struggle Day', weekdayShare: 5 / 7 },
  { name: 'Victory and Homeland Thanksgiving Day', weekdayShare: 5 / 7 },
  { name: 'Assumption of Mary', weekdayShare: 5 / 7 },
  { name: "All Saints' Day", weekdayShare: 5 / 7 },
  { name: 'Remembrance Day', weekdayShare: 5 / 7 },
  { name: 'Christmas Day', weekdayShare: 5 / 7 },
  { name: "St. Stephen's Day", weekdayShare: 5 / 7 },
];

export interface PublicHoliday {
  readonly name: string;
  readonly weekdayShare: number;
}

const AVERAGE_DAYS_PER_YEAR = 365.25;
const WORKDAYS_PER_WEEK = 5;
const DAYS_PER_WEEK = 7;
const MONTHS_PER_YEAR = 12;

export interface WorkYearInput {
  readonly hoursPerDay: number;
  readonly vacationDays: number;
  readonly sickDays: number;
  /** Other workdays a contractor cannot bill, such as gaps between contracts. */
  readonly otherUnbilledDays: number;
}

export interface WorkYear {
  readonly weekdays: number;
  readonly holidaysOnWeekdays: number;
  readonly billableDays: number;
  readonly billableHours: number;
}

export interface EquivalenceInput {
  readonly workYear: WorkYearInput;
  readonly employerHealthRate: number;
  /** What the employer pays per year on top of gross and its contributions, such as bonuses. */
  readonly annualEmployerExtras: number;
}

export interface Equivalence {
  readonly workYear: WorkYear;
  readonly hourlyRate: number;
  readonly annualBilling: number;
  readonly annualGross: number;
  readonly monthlyGross: number;
}

export function calculateWorkYear(input: WorkYearInput): WorkYear {
  const weekdays = (AVERAGE_DAYS_PER_YEAR * WORKDAYS_PER_WEEK) / DAYS_PER_WEEK;
  const holidaysOnWeekdays = PUBLIC_HOLIDAYS.reduce(
    (sum, holiday) => sum + holiday.weekdayShare,
    0,
  );
  const billableDays = Math.max(
    0,
    weekdays - holidaysOnWeekdays - input.vacationDays - input.sickDays - input.otherUnbilledDays,
  );
  return {
    weekdays,
    holidaysOnWeekdays,
    billableDays,
    billableHours: billableDays * input.hoursPerDay,
  };
}

/** The monthly gross salary that costs an employer as much per year as the contractor's billing. */
export function calculateFromHourlyRate(hourlyRate: number, input: EquivalenceInput): Equivalence {
  const workYear = calculateWorkYear(input.workYear);
  const annualBilling = hourlyRate * workYear.billableHours;
  const annualGross = Math.max(
    0,
    (annualBilling - input.annualEmployerExtras) / (1 + input.employerHealthRate),
  );
  return {
    workYear,
    hourlyRate,
    annualBilling: roundToCents(annualBilling),
    annualGross: roundToCents(annualGross),
    monthlyGross: roundToCents(annualGross / MONTHS_PER_YEAR),
  };
}

/** The hourly rate a contractor must bill to cost as much per year as the monthly gross salary. */
export function calculateFromMonthlyGross(
  monthlyGross: number,
  input: EquivalenceInput,
): Equivalence {
  const workYear = calculateWorkYear(input.workYear);
  const annualGross = monthlyGross * MONTHS_PER_YEAR;
  const annualBilling = annualGross * (1 + input.employerHealthRate) + input.annualEmployerExtras;
  const hourlyRate = workYear.billableHours > 0 ? annualBilling / workYear.billableHours : 0;
  return {
    workYear,
    hourlyRate: roundToCents(hourlyRate),
    annualBilling: roundToCents(annualBilling),
    annualGross: roundToCents(annualGross),
    monthlyGross,
  };
}
