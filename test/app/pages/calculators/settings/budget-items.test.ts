import { describe, expect, test } from 'bun:test';

import {
  moveBudgetItem,
  removeBudgetItem,
  updateBudgetItem,
} from '../../../../../src/app/pages/calculators/settings/budget-items';
import type { BudgetItemSettings } from '../../../../../src/app/pages/calculators/settings/settings';

const itemWithId = (id: string): BudgetItemSettings => ({
  id,
  label: id,
  amount: 0,
  currency: 'EUR',
  period: 'month',
  vatApplies: false,
});

const ITEMS = ['a', 'b', 'c'].map(itemWithId);
const ids = (items: readonly BudgetItemSettings[]): string => items.map((item) => item.id).join('');

describe('moveBudgetItem', () => {
  const cases = [
    { description: 'moves an item up', input: { id: 'b', offset: -1 }, expected: 'bac' },
    { description: 'moves an item down', input: { id: 'b', offset: 1 }, expected: 'acb' },
    { description: 'keeps the first item first', input: { id: 'a', offset: -1 }, expected: 'abc' },
    { description: 'keeps the last item last', input: { id: 'c', offset: 1 }, expected: 'abc' },
    { description: 'ignores an unknown item', input: { id: 'x', offset: 1 }, expected: 'abc' },
  ] as const;

  test.each(cases)('$description', ({ input, expected }) => {
    expect(ids(moveBudgetItem(ITEMS, input.id, input.offset))).toBe(expected);
  });
});

describe('updateBudgetItem and removeBudgetItem', () => {
  test('change only the matching item', () => {
    expect(updateBudgetItem(ITEMS, 'b', { amount: 5 }).map((item) => item.amount)).toEqual([
      0, 5, 0,
    ]);
    expect(ids(removeBudgetItem(ITEMS, 'b'))).toBe('ac');
  });
});
