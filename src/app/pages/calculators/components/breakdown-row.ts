export interface BreakdownRow {
  readonly label: string;
  /** Explains the amount, such as the rate and base it comes from. */
  readonly detail?: string;
  readonly amount: number;
  /** An `info` row shows an amount used in the calculation that the totals do not include. */
  readonly kind?: BreakdownRowKind;
}

export const BREAKDOWN_ROW_KINDS = ['item', 'info', 'subtotal', 'total'] as const;
export type BreakdownRowKind = (typeof BREAKDOWN_ROW_KINDS)[number];
