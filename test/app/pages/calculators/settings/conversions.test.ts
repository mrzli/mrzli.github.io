import { describe, expect, test } from 'bun:test';

import type { TaxProfile } from '../../../../../src/app/pages/calculators/model/payroll';
import {
  toBudgetItem,
  toOfferPayrollInput,
  toOwnerPayrollInput,
} from '../../../../../src/app/pages/calculators/settings/conversions';
import type { BudgetItemSettings } from '../../../../../src/app/pages/calculators/settings/settings';

const PROFILE: TaxProfile = {
  lowerTaxRate: 0.2,
  higherTaxRate: 0.3,
  age: 35,
  isPensionPillar2Member: true,
  childCount: 0,
  dependentCount: 0,
  disability: 'none',
  familyMembersWithPartialDisability: 0,
  familyMembersWithFullDisability: 0,
  livesInAssistedArea: false,
};

const ITEM: BudgetItemSettings = {
  id: 'item',
  label: 'Software',
  amount: 100,
  currency: 'USD',
  period: 'month',
  vatApplies: true,
  vatRate: 0.25,
};

describe('toBudgetItem', () => {
  test('keeps the VAT rate when VAT applies', () => {
    expect(toBudgetItem(ITEM)).toEqual({
      amount: 100,
      currency: 'USD',
      period: 'month',
      vatRate: 0.25,
    });
  });

  test('uses a zero VAT rate when VAT does not apply', () => {
    expect(toBudgetItem({ ...ITEM, vatApplies: false }).vatRate).toBe(0);
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
          incomes: [],
          expenses: [],
        },
        PROFILE,
      ),
    ).toEqual({ gross: 2000, nonTaxablePayments: 100, profile: PROFILE });
    expect(
      toOfferPayrollInput(
        { gross: 3000, nonTaxablePayments: { perMonth: 100, perYear: 600 } },
        PROFILE,
      ),
    ).toEqual({
      gross: 3000,
      nonTaxablePayments: 150,
      profile: PROFILE,
    });
  });
});
