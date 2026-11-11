import { describe, expect, test } from 'bun:test';

import {
  calculateFromHourlyRate,
  calculateFromMonthlyGross,
  type EquivalenceInput,
} from '../../../../../src/app/pages/calculators/model/contractor-equivalence';

const INPUT: EquivalenceInput = {
  workYear: { hoursPerDay: 8, vacationDays: 20, sickDays: 3, otherUnbilledDays: 0 },
  employerHealthRate: 0.165,
  annualEmployerExtras: 0,
};

describe('contractor equivalence', () => {
  test('averages billable days and converts billing to gross for 30 EUR per hour', () => {
    // 228.036 billable days of 8 hours; gross is billing over 1.165.
    const result = calculateFromHourlyRate(30, INPUT);
    expect(result.workYear.holidaysOnWeekdays).toBeCloseTo(2 + (11 * 5) / 7, 10);
    expect(result.workYear.billableDays).toBeCloseTo(228.036, 3);
    expect(result.annualBilling).toBe(54_728.57);
    expect(result.annualGross).toBe(46_977.31);
    expect(result.monthlyGross).toBe(3914.78);
  });

  test('subtracts employer extras before dividing out the health contribution', () => {
    const result = calculateFromHourlyRate(30, { ...INPUT, annualEmployerExtras: 1165 });
    expect(result.annualGross).toBe(45_977.31);
  });

  test('inverts the hourly rate calculation', () => {
    expect(calculateFromMonthlyGross(3914.78, INPUT).hourlyRate).toBe(30);
  });
});
