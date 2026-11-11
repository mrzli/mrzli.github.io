import type { ReactNode } from 'react';

import { SETTING_LIMITS } from '../../settings/settings';
import { NumberField } from '../controls';

export interface CountFieldProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly hint?: string;
}

/** A number of family members within the range that stored settings accept. */
export function CountField(props: CountFieldProps): ReactNode {
  return <NumberField {...props} min={0} max={SETTING_LIMITS.familyMembers} integer />;
}
