import type { ReactNode } from 'react';

import type { PayrollBreakdown } from '../model/payroll';
import { BreakdownTables } from './breakdown-tables';
import { getEmployeeRows, getEmployerRows } from './payroll-rows';

export function PayrollTables({ breakdown }: { readonly breakdown: PayrollBreakdown }): ReactNode {
  return (
    <BreakdownTables
      tables={[
        { caption: 'Employee, per month', rows: getEmployeeRows(breakdown) },
        { caption: 'Employer, per month', rows: getEmployerRows(breakdown) },
      ]}
    />
  );
}
