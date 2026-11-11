import type { ReactNode } from 'react';

import type { BreakdownRow } from './breakdown-row';
import { BreakdownTable } from './breakdown-table';

export interface BreakdownTableSpec {
  readonly caption: string;
  readonly rows: readonly BreakdownRow[];
}

/** Tables side by side on wide screens and stacked on narrow ones. */
export function BreakdownTables({
  tables,
}: {
  readonly tables: readonly BreakdownTableSpec[];
}): ReactNode {
  return (
    <div className='grid items-start gap-6 lg:grid-cols-2'>
      {tables.map((table) => (
        <BreakdownTable key={table.caption} caption={table.caption} rows={table.rows} />
      ))}
    </div>
  );
}
