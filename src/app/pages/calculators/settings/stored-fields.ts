export type FieldValidators<T> = { readonly [K in keyof T]: (value: unknown) => value is T[K] };

/**
 * Keeps the fields of stored data that pass their validators, so data saved by an earlier version
 * of the page or edited by hand cannot break it.
 */
export function decodeStoredFields<T extends object>(
  raw: unknown,
  validators: FieldValidators<T>,
): Partial<T> {
  if (typeof raw !== 'object' || raw === null) {
    return {};
  }
  const entries = Object.entries(validators).filter(([key, validate]) =>
    (validate as (value: unknown) => boolean)((raw as Record<string, unknown>)[key]),
  );
  return Object.fromEntries(
    entries.map(([key]) => [key, (raw as Record<string, unknown>)[key]]),
  ) as Partial<T>;
}

export function isFiniteNumberBetween(
  min: number,
  max: number,
): (value: unknown) => value is number {
  return (value): value is number =>
    typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
}

export function isIntegerBetween(min: number, max: number): (value: unknown) => value is number {
  return (value): value is number =>
    typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max;
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isOneOf<T>(values: readonly T[]): (value: unknown) => value is T {
  return (value): value is T => values.includes(value as T);
}
