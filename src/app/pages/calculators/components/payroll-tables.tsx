import type { ReactNode } from 'react';

import type { PayrollBreakdown, TaxProfile } from '../model/payroll';
import type { PayrollRules } from '../model/rules';
import { BreakdownTable } from './breakdown-table';
import { getEmployeeRows, getEmployerRows } from './payroll-rows';

export interface PayrollTablesProps {
  readonly breakdown: PayrollBreakdown;
  readonly profile: TaxProfile;
  readonly rules: PayrollRules;
}

export function PayrollTables({ breakdown, profile, rules }: PayrollTablesProps): ReactNode {
  return (
    <div className='grid items-start gap-6 lg:grid-cols-2'>
      <BreakdownTable
        caption='Employee, per month'
        rows={getEmployeeRows(breakdown, profile, rules)}
      />
      <BreakdownTable caption='Employer, per month' rows={getEmployerRows(breakdown, rules)} />
    </div>
  );
}
