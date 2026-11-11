import type { ReactNode } from 'react';

import { SETTING_LIMITS } from '../../settings/settings';
import { NumberField } from '../controls';

export interface DaysFieldProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly hint?: string;
}

/** A number of days in a year. */
export function DaysField(props: DaysFieldProps): ReactNode {
  return <NumberField {...props} min={0} max={SETTING_LIMITS.days} />;
}
