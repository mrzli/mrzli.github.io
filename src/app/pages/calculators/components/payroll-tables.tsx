import type { ReactNode } from 'react';

import type { PayrollBreakdown } from '../model/payroll';
import { BreakdownTable } from './breakdown-table';
import { getEmployeeRows, getEmployerRows } from './payroll-rows';

export interface PayrollTablesProps {
  readonly breakdown: PayrollBreakdown;
}

export function PayrollTables({ breakdown }: PayrollTablesProps): ReactNode {
  return (
    <div className='grid items-start gap-6 lg:grid-cols-2'>
      <BreakdownTable caption='Employee, per month' rows={getEmployeeRows(breakdown)} />
      <BreakdownTable caption='Employer, per month' rows={getEmployerRows(breakdown)} />
    </div>
  );
}
