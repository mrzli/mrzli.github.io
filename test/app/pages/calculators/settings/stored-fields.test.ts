import { describe, expect, test } from 'bun:test';

import {
  decodeStoredFields,
  type FieldValidators,
  isBoolean,
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
