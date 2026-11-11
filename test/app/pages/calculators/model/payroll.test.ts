import { describe, expect, test } from 'bun:test';

import {
  calculateGrossFromNet,
  calculatePayroll,
  type TaxProfile,
} from '../../../../../src/app/pages/calculators/model/payroll';
import { PAYROLL_RULES_2026 } from '../../../../../src/app/pages/calculators/model/rules-2026';

const ZAGREB_PROFILE: TaxProfile = {
  lowerTaxRate: 0.23,
  higherTaxRate: 0.33,
  age: 35,
  isPensionPillar2Member: true,
  childCount: 0,
  dependentCount: 0,
  disability: 'none',
  familyMembersWithPartialDisability: 0,
  familyMembersWithFullDisability: 0,
  livesInAssistedArea: false,
};

describe('calculatePayroll', () => {
  test('applies the pension relief to the 2026 minimum wage', () => {
    // Relief 0.5 × (1300 − 1050) = 125, so pillar I is 15% of 925.
    const result = calculatePayroll(
      { gross: 1050, nonTaxablePayments: 0, profile: ZAGREB_PROFILE },
      PAYROLL_RULES_2026,
    );
    expect(result).toMatchObject({
      lowIncomeReliefReduction: 125,
      pensionPillar1: 138.75,
      pensionPillar2: 52.5,
      income: 858.75,
      taxableBase: 258.75,
      incomeTax: 59.51,
      netPay: 799.24,
      employerCost: 1223.25,
    });
  });

  test('taxes a mid-range salary at the lower rate only', () => {
    const result = calculatePayroll(
      { gross: 2000, nonTaxablePayments: 100, profile: ZAGREB_PROFILE },
      PAYROLL_RULES_2026,
    );
    expect(result).toMatchObject({
      employeeContributions: 400,
      income: 1600,
      taxableBase: 1000,
      incomeTax: 230,
      netPay: 1470,
      employerHealthContribution: 330,
      employerCost: 2430,
    });
  });

  test('caps pension contributions and applies the higher rate above the bracket', () => {
    // Contributions on the 11,958 maximum base; tax 5000 × 23% + 7008.40 × 33%.
    const result = calculatePayroll(
      { gross: 15_000, nonTaxablePayments: 0, profile: ZAGREB_PROFILE },
      PAYROLL_RULES_2026,
    );
    expect(result).toMatchObject({
      employeeContributions: 2391.6,
      taxAtLowerRate: 1150,
      taxAtHigherRate: 2312.77,
      netPay: 9145.63,
      employerHealthContribution: 2475,
    });
  });

  test('raises the personal allowance for children, dependents, and disability', () => {
    // 600 × (1 + 0.5 + 0.7 + 1.0 + 0.5 + 0.3) = 2400.
    const result = calculatePayroll(
      {
        gross: 3000,
        nonTaxablePayments: 0,
        profile: { ...ZAGREB_PROFILE, childCount: 3, dependentCount: 1, disability: 'partial' },
      },
      PAYROLL_RULES_2026,
    );
    expect(result.personalAllowance).toBe(2400);
    expect(result.taxableBase).toBe(0);
    expect(result.incomeTax).toBe(0);
  });

  test('charges the full 20% to pillar I for a worker without pillar II', () => {
    const result = calculatePayroll(
      {
        gross: 2000,
        nonTaxablePayments: 0,
        profile: { ...ZAGREB_PROFILE, isPensionPillar2Member: false },
      },
      PAYROLL_RULES_2026,
    );
    expect(result.pensionPillar1).toBe(400);
    expect(result.pensionPillar2).toBe(0);
  });

  test('halves the tax in an assisted area and refunds young workers', () => {
    const result = calculatePayroll(
      {
        gross: 2000,
        nonTaxablePayments: 0,
        profile: { ...ZAGREB_PROFILE, age: 28, livesInAssistedArea: true },
      },
      PAYROLL_RULES_2026,
    );
    expect(result.assistedAreaRelief).toBe(115);
    expect(result.incomeTax).toBe(115);
    expect(result.youthRelief).toBe(57.5);
    expect(result.netPayWithYouthRelief).toBe(1542.5);
  });

  test('refunds all lower-rate tax up to age 25', () => {
    const result = calculatePayroll(
      { gross: 2000, nonTaxablePayments: 0, profile: { ...ZAGREB_PROFILE, age: 25 } },
      PAYROLL_RULES_2026,
    );
    expect(result.youthRelief).toBe(230);
  });
});

describe('calculateGrossFromNet', () => {
  const cases = [
    { input: 1370, expected: 2000 },
    { input: 799.24, expected: 1050 },
    { input: 9145.63, expected: 15_000 },
  ] as const;

  test.each(cases)('finds the gross for net $input', ({ input, expected }) => {
    expect(calculateGrossFromNet(input, 0, ZAGREB_PROFILE, PAYROLL_RULES_2026).gross).toBe(
      expected,
    );
  });

  test('excludes non-taxable payments from the gross', () => {
    expect(calculateGrossFromNet(1470, 100, ZAGREB_PROFILE, PAYROLL_RULES_2026).gross).toBe(2000);
  });
});
