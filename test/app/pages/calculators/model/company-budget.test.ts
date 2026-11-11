import { describe, expect, test } from 'bun:test';

import {
  calculateCompanyBudget,
  type CompanyBudgetInput,
} from '../../../../../src/app/pages/calculators/model/company-budget';
import { COMPANY_TAX_RULES_2026 } from '../../../../../src/app/pages/calculators/model/rules-2026';
import { zagrebPayrollFor } from '../fixtures';

// Net pay 1370 and employer cost 2330 per month.
const PAYROLL = zagrebPayrollFor(2000);

const INPUT: CompanyBudgetInput = {
  incomes: [{ amount: 10_000, currency: 'EUR', period: 'month', vatRate: 0 }],
  expenses: [{ amount: 100, currency: 'USD', period: 'month', vatRate: 0.25, payee: 'others' }],
  usdPerEur: 1.25,
  billableHours: 1800,
  payroll: PAYROLL,
};

describe('calculateCompanyBudget', () => {
  test('pays out the profit after expenses and profit tax as dividends', () => {
    // Profit 120,000 − 27,960 − 960 = 91,080; 10% profit tax; 12% dividend tax.
    expect(calculateCompanyBudget(INPUT, COMPANY_TAX_RULES_2026)).toMatchObject({
      revenue: 120_000,
      salaryCost: 27_960,
      expenses: 960,
      profit: 91_080,
      profitTax: 9108,
      dividends: 81_972,
      dividendTax: 9836.64,
      netDividends: 72_135.36,
      netSalary: 16_440,
      personalNet: 88_575.36,
      vatCharged: 0,
      vatPaid: 240,
    });
  });

  test('applies the higher profit tax rate above 1,000,000 EUR of revenue', () => {
    const result = calculateCompanyBudget(
      {
        ...INPUT,
        incomes: [{ amount: 1_200_000, currency: 'EUR', period: 'year', vatRate: 0.25 }],
      },
      COMPANY_TAX_RULES_2026,
    );
    expect(result.profitTaxRate).toBe(0.18);
    expect(result.vatCharged).toBe(300_000);
  });

  test('pays no profit tax or dividends on a loss', () => {
    const result = calculateCompanyBudget(
      { ...INPUT, incomes: [{ amount: 20_000, currency: 'EUR', period: 'year', vatRate: 0 }] },
      COMPANY_TAX_RULES_2026,
    );
    expect(result.profit).toBe(-8920);
    expect(result.profitTax).toBe(0);
    expect(result.dividends).toBe(0);
    expect(result.personalNet).toBe(16_440);
  });

  test('counts income per hour over the billable hours of the year', () => {
    const result = calculateCompanyBudget(
      { ...INPUT, incomes: [{ amount: 50, currency: 'USD', period: 'hour', vatRate: 0 }] },
      COMPANY_TAX_RULES_2026,
    );
    // 50 USD at 1.25 USD per EUR is 40 EUR, over 1,800 hours.
    expect(result.revenue).toBe(72_000);
  });

  test('adds expenses paid to the owner to their net, after the tax of each kind', () => {
    // Profit 120,000 − 27,960 − 14,660 = 77,380, so net dividends 61,284.96.
    const result = calculateCompanyBudget(
      {
        ...INPUT,
        expenses: [
          ...INPUT.expenses,
          { amount: 1000, currency: 'EUR', period: 'month', vatRate: 0, payee: 'ownerRent' },
          { amount: 100, currency: 'EUR', period: 'month', vatRate: 0, payee: 'ownerTaxFree' },
          { amount: 500, currency: 'EUR', period: 'year', vatRate: 0, payee: 'ownerInterest' },
        ],
      },
      COMPANY_TAX_RULES_2026,
    );
    expect(result.expenses).toBe(14_660);
    expect(result.netDividends).toBe(61_284.96);
    expect(result.ownerPayments).toEqual({
      ownerTaxFree: { amount: 1200, taxRate: 0, tax: 0, net: 1200 },
      ownerRent: { amount: 12_000, taxRate: expect.closeTo(0.084, 10), tax: 1008, net: 10_992 },
      ownerInterest: { amount: 500, taxRate: 0.12, tax: 60, net: 440 },
    });
    expect(result.personalNet).toBe(90_356.96);
  });
});
