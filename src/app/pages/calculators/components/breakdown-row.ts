export interface BreakdownRow {
  readonly label: string;
  /** Explains the amount, such as the rate and base it comes from. */
  readonly detail?: string;
  readonly amount: number;
  readonly kind?: BreakdownRowKind;
}

export const BREAKDOWN_ROW_KINDS = ['item', 'subtotal', 'total'] as const;
export type BreakdownRowKind = (typeof BREAKDOWN_ROW_KINDS)[number];
