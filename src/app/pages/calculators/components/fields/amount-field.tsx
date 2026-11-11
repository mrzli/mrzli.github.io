import type { ReactNode } from 'react';

import { SETTING_LIMITS } from '../../settings/settings';
import { NumberField } from '../controls';

export interface AmountFieldProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly hint?: string;
  readonly hideLabel?: boolean;
}

/** A euro amount within the range that stored settings accept. */
export function AmountField(props: AmountFieldProps): ReactNode {
  return <NumberField {...props} unit='EUR' min={0} max={SETTING_LIMITS.amount} />;
}
