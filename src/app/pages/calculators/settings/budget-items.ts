import type { BudgetItemSettings } from './settings';

export function updateBudgetItem(
  items: readonly BudgetItemSettings[],
  id: string,
  changes: Partial<BudgetItemSettings>,
): readonly BudgetItemSettings[] {
  return items.map((item) => (item.id === id ? { ...item, ...changes } : item));
}

export function removeBudgetItem(
  items: readonly BudgetItemSettings[],
  id: string,
): readonly BudgetItemSettings[] {
  return items.filter((item) => item.id !== id);
}

/** Moves an item by `offset` places, such as -1 for up; a move past either end does nothing. */
export function moveBudgetItem(
  items: readonly BudgetItemSettings[],
  id: string,
  offset: number,
): readonly BudgetItemSettings[] {
  const from = items.findIndex((item) => item.id === id);
  const to = from + offset;
  if (from === -1 || to < 0 || to >= items.length) {
    return items;
  }
  const moved = items.toSpliced(from, 1);
  return moved.toSpliced(to, 0, items[from]);
}
