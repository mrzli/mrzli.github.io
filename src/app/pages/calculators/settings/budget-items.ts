/** Anything in a list with a stable `id`, such as an income or expense item. */
interface ListItem {
  readonly id: string;
}

export function updateBudgetItem<T extends ListItem>(
  items: readonly T[],
  id: string,
  changes: Partial<T>,
): readonly T[] {
  return items.map((item) => (item.id === id ? { ...item, ...changes } : item));
}

export function removeBudgetItem<T extends ListItem>(
  items: readonly T[],
  id: string,
): readonly T[] {
  return items.filter((item) => item.id !== id);
}

/** Moves an item by `offset` places, such as -1 for up; a move past either end does nothing. */
export function moveBudgetItem<T extends ListItem>(
  items: readonly T[],
  id: string,
  offset: number,
): readonly T[] {
  const from = items.findIndex((item) => item.id === id);
  const to = from + offset;
  if (from === -1 || to < 0 || to >= items.length) {
    return items;
  }
  return items.toSpliced(from, 1).toSpliced(to, 0, items[from]);
}
