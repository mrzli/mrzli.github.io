import { describe, expect, test } from 'bun:test';

import {
  decodeStoredFields,
  type FieldValidators,
  isArrayOf,
  isBoolean,
  isComplete,
  isIntegerBetween,
  isOneOf,
} from '../../../../../src/app/pages/calculators/settings/stored-fields';

interface Example {
  readonly count: number;
  readonly enabled: boolean;
  readonly mode: 'first' | 'second';
}

const VALIDATORS: FieldValidators<Example> = {
  count: isIntegerBetween(0, 10),
  enabled: isBoolean,
  mode: isOneOf(['first', 'second'] as const),
};

describe('decodeStoredFields', () => {
  const cases = [
    {
      description: 'keeps valid fields',
      input: { count: 3, enabled: true, mode: 'second' },
      expected: { count: 3, enabled: true, mode: 'second' },
    },
    {
      description: 'drops invalid and unknown fields',
      input: { count: 2.5, enabled: 'yes', mode: 'third', extra: 1 },
      expected: {},
    },
    {
      description: 'keeps the valid fields of partly valid data',
      input: { count: 11, enabled: false },
      expected: { enabled: false },
    },
    { description: 'ignores data that is not an object', input: 'text', expected: {} },
    { description: 'ignores null', input: JSON.parse('null'), expected: {} },
  ] as const;

  test.each(cases)('$description', ({ input, expected }) => {
    expect(decodeStoredFields(input, VALIDATORS)).toEqual(expected);
  });
});

describe('isArrayOf(isComplete(...))', () => {
  const isExampleList = isArrayOf(isComplete(VALIDATORS));
  const cases = [
    {
      description: 'accepts complete items',
      input: [{ count: 1, enabled: true, mode: 'first' }],
      expected: true,
    },
    { description: 'accepts an empty list', input: [], expected: true },
    {
      description: 'rejects an item with a missing field',
      input: [{ count: 1, enabled: true }],
      expected: false,
    },
    { description: 'rejects a value that is not a list', input: { count: 1 }, expected: false },
  ] as const;

  test.each(cases)('$description', ({ input, expected }) => {
    expect(isExampleList(input)).toBe(expected);
  });
});
