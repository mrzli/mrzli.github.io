import { type ReactNode, useId, useState } from 'react';

import { FIELD_HINT_CLASS, FIELD_INPUT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface NumberFieldProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
  /** Accepts whole numbers only. */
  readonly integer?: boolean;
  readonly unit?: string;
  readonly hint?: string;
  /** Keeps the label for assistive technology only, for fields in a labeled row. */
  readonly hideLabel?: boolean;
}

/**
 * A number input that keeps the text being typed while it has focus, so intermediate text such as
 * an empty field or "1." does not reset to the last valid value.
 */
export function NumberField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  integer,
  unit,
  hint,
  hideLabel,
}: NumberFieldProps): ReactNode {
  const id = useId();
  const [draft, setDraft] = useState<string>();

  const handleChange = (text: string): void => {
    setDraft(text);
    const parsed = parseNumber(text, min, max, integer ?? false);
    if (parsed !== undefined) {
      onChange(parsed);
    }
  };

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className={hideLabel === true ? 'sr-only' : FIELD_LABEL_CLASS}>
        {label}
      </label>
      <div className='flex items-center gap-2'>
        <input
          id={id}
          type='number'
          inputMode='decimal'
          className={FIELD_INPUT_CLASS}
          value={draft ?? String(value)}
          min={min}
          max={max}
          step={step ?? (integer === true ? 1 : 'any')}
          onFocus={() => {
            setDraft(String(value));
          }}
          onBlur={() => {
            setDraft(undefined);
          }}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
        {unit !== undefined && <span className={FIELD_HINT_CLASS}>{unit}</span>}
      </div>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
    </div>
  );
}

function parseNumber(
  text: string,
  min: number | undefined,
  max: number | undefined,
  integer: boolean,
): number | undefined {
  if (text.trim() === '') {
    return undefined;
  }
  const parsed = Number(text);
  if (!Number.isFinite(parsed) || (integer && !Number.isInteger(parsed))) {
    return undefined;
  }
  if ((min !== undefined && parsed < min) || (max !== undefined && parsed > max)) {
    return undefined;
  }
  return parsed;
}
