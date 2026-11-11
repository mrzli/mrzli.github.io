import { describe, expect, test } from 'bun:test';

import {
  toAnnualAmount,
  toBudgetItem,
  toMonthlyAmount,
  toOfferPayrollInput,
  toOwnerPayrollInput,
} from '../../../../../src/app/pages/calculators/settings/conversions';
import type { BudgetItemSettings } from '../../../../../src/app/pages/calculators/settings/settings';
import { ZAGREB_PROFILE } from '../fixtures';

const ITEM: BudgetItemSettings = {
  id: 'item',
  label: 'Software',
  amount: 100,
  currency: 'USD',
  period: 'month',
  vatApplies: true,
};

describe('toBudgetItem', () => {
  test('uses the company VAT rate when VAT applies', () => {
    expect(toBudgetItem(ITEM, 0.25)).toEqual({
      amount: 100,
      currency: 'USD',
      period: 'month',
      vatRate: 0.25,
    });
  });

  test('uses a zero VAT rate when VAT does not apply', () => {
    expect(toBudgetItem({ ...ITEM, vatApplies: false }, 0.25).vatRate).toBe(0);
  });
});

describe('payroll inputs', () => {
  test('add the monthly payments to the yearly ones spread over the months', () => {
    expect(
      toOwnerPayrollInput(
        {
          ownerGross: 2000,
          ownerNonTaxablePayments: { perMonth: 0, perYear: 1200 },
          usdPerEur: 1.2,
          vatRate: 0.25,
          incomes: [],
          expenses: [],
        },
        ZAGREB_PROFILE,
      ),
    ).toEqual({ gross: 2000, nonTaxablePayments: 100, profile: ZAGREB_PROFILE });
    expect(
      toOfferPayrollInput(
        { gross: 3000, nonTaxablePayments: { perMonth: 100, perYear: 600 } },
        ZAGREB_PROFILE,
      ),
    ).toEqual({
      gross: 3000,
      nonTaxablePayments: 150,
      profile: ZAGREB_PROFILE,
    });
  });
});

describe('monthly and yearly amounts', () => {
  const amounts = { perMonth: 100, perYear: 600 };

  test('spread the yearly amount over the months for a monthly total', () => {
    expect(toMonthlyAmount(amounts)).toBe(150);
  });

  test('add twelve months to the yearly amount for a yearly total', () => {
    expect(toAnnualAmount(amounts)).toBe(1800);
  });
});
