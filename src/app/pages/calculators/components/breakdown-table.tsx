import type { ReactNode } from 'react';

import { cn } from '@/app/util';

import { formatEuro } from '../format';
import type { BreakdownRow } from './breakdown-row';

export interface BreakdownTableProps {
  readonly caption: string;
  readonly rows: readonly BreakdownRow[];
}

export function BreakdownTable({ caption, rows }: BreakdownTableProps): ReactNode {
  return (
    <table className='w-full text-sm'>
      <caption className='pb-2 text-left font-semibold text-slate-900 dark:text-slate-100'>
        {caption}
      </caption>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.label}
            className={cn(
              'border-t border-slate-200 dark:border-slate-800',
              row.kind === 'subtotal' && 'font-medium',
              row.kind === 'info' && 'text-slate-500 italic dark:text-slate-400',
              row.kind === 'total' &&
                'border-t-2 border-slate-400 font-semibold dark:border-slate-500',
            )}
          >
            <th scope='row' className='py-1.5 pr-4 text-left font-[inherit]'>
              <span
                className={row.kind === 'info' ? undefined : 'text-slate-800 dark:text-slate-200'}
              >
                {row.label}
              </span>
              {row.detail !== undefined && (
                <span className='block text-xs font-normal text-slate-500 dark:text-slate-400'>
                  {row.detail}
                </span>
              )}
            </th>
            <td
              className={cn(
                'py-1.5 text-right whitespace-nowrap tabular-nums',
                row.kind === 'info'
                  ? 'text-slate-500 dark:text-slate-400'
                  : 'text-slate-900 dark:text-slate-100',
              )}
            >
              {formatEuro(row.amount)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
