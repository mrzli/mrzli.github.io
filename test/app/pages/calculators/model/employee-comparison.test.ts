import { describe, expect, test } from 'bun:test';

import { calculateCompanyBudget } from '../../../../../src/app/pages/calculators/model/company-budget';
import {
  compareEmployeeOffer,
  type EmployeeComparisonInput,
} from '../../../../../src/app/pages/calculators/model/employee-comparison';
import { COMPANY_TAX_RULES_2026 } from '../../../../../src/app/pages/calculators/model/rules-2026';
import { zagrebPayrollFor } from '../fixtures';

// Offer: net 1986 and employer cost 3495 per month. Owner: net 1370 and cost 2330 per month.
const INPUT: EmployeeComparisonInput = {
  offerPayroll: zagrebPayrollFor(3000),
  ownerPayroll: zagrebPayrollFor(2000),
  companyExpenses: [{ amount: 80, currency: 'EUR', period: 'month', vatRate: 0, payee: 'others' }],
  usdPerEur: 1.25,
  billableHours: 2000,
};

describe('compareEmployeeOffer', () => {
  test('finds the revenue that matches the offer net through salary and dividends', () => {
    // Net dividends 23,832 − 16,440 = 7,392, so dividends 8,400 and profit 9,333.33.
    const result = compareEmployeeOffer(INPUT, COMPANY_TAX_RULES_2026);
    expect(result.offerNet).toBe(23_832);
    expect(result.offerEmployerCost).toBe(41_940);
    expect(result.employerCostHourlyRate).toBe(20.97);
    expect(result.matchingBudget.revenue).toBe(38_253.33);
    expect(result.matchingBudget.personalNet).toBe(23_832);
    expect(result.matchingHourlyRate).toBe(19.13);
  });

  test('needs only to cover costs when the owner salary alone matches the offer', () => {
    const result = compareEmployeeOffer(
      { ...INPUT, offerPayroll: zagrebPayrollFor(1500) },
      COMPANY_TAX_RULES_2026,
    );
    expect(result.matchingBudget.revenue).toBe(28_920);
    expect(result.matchingBudget.profit).toBe(0);
  });

  test('searches past the higher profit tax limit when needed', () => {
    const result = compareEmployeeOffer(
      { ...INPUT, offerPayroll: zagrebPayrollFor(150_000) },
      COMPANY_TAX_RULES_2026,
    );
    expect(result.matchingBudget.revenue).toBeGreaterThan(1_000_000);
    expect(result.matchingBudget.profitTaxRate).toBe(0.18);
    expect(result.matchingBudget.personalNet).toBeGreaterThanOrEqual(result.offerNet);
    // One cent less revenue falls short of the offer, so the revenue is the lowest that matches.
    const justBelow = calculateCompanyBudget(
      {
        incomes: [
          {
            amount: result.matchingBudget.revenue - 0.01,
            currency: 'EUR',
            period: 'year',
            vatRate: 0,
          },
        ],
        expenses: INPUT.companyExpenses,
        usdPerEur: INPUT.usdPerEur,
        billableHours: INPUT.billableHours,
        payroll: INPUT.ownerPayroll,
      },
      COMPANY_TAX_RULES_2026,
    );
    expect(justBelow.personalNet).toBeLessThan(result.offerNet);
  });
});
