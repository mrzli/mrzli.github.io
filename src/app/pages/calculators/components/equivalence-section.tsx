import type { ReactNode } from 'react';

import { formatEuro, formatNumber, formatPercent } from '../format';
import {
  calculateFromHourlyRate,
  calculateFromMonthlyGross,
  type EquivalenceInput,
} from '../model/contractor-equivalence';
import { calculatePayroll, type TaxProfile } from '../model/payroll';
import type { PayrollRules } from '../model/rules';
import { toWorkYearInput } from '../settings/conversions';
import type { EquivalenceSettings } from '../settings/settings';
import { BreakdownTable } from './breakdown-table';
import { CalculatorSection } from './calculator-section';
import { NumberField } from './controls';
import { PayrollTables } from './payroll-tables';

export interface EquivalenceSectionProps {
  readonly settings: EquivalenceSettings;
  readonly onChange: (changes: Partial<EquivalenceSettings>) => void;
  readonly profile: TaxProfile;
  readonly rules: PayrollRules;
}

export function EquivalenceSection({
  settings,
  onChange,
  profile,
  rules,
}: EquivalenceSectionProps): ReactNode {
  const input: EquivalenceInput = {
    workYear: toWorkYearInput(settings),
    employerHealthRate: rules.contributions.employerHealthRate,
    annualEmployerExtras: settings.annualEmployerExtras,
  };
  const equivalence =
    settings.source === 'hourlyRate'
      ? calculateFromHourlyRate(settings.hourlyRate, input)
      : calculateFromMonthlyGross(settings.monthlyGross, input);
  const { workYear } = equivalence;
  const payroll = calculatePayroll(
    { gross: equivalence.monthlyGross, nonTaxablePayments: 0, profile },
    rules,
  );
  const annualHealthContribution =
    equivalence.annualBilling - settings.annualEmployerExtras - equivalence.annualGross;

  return (
    <CalculatorSection
      title='Contractor rate and salary'
      description='The hourly rate and the monthly gross salary that cost a client or an employer the same per year. A contractor bills only the hours worked, while an employee is also paid for holidays, vacation, and sick days.'
    >
      <div className='grid gap-4 sm:grid-cols-2'>
        <NumberField
          label='Hourly rate'
          unit='EUR'
          value={equivalence.hourlyRate}
          min={0}
          onChange={(hourlyRate) => {
            onChange({ source: 'hourlyRate', hourlyRate });
          }}
        />
        <NumberField
          label='Gross salary per month'
          unit='EUR'
          value={equivalence.monthlyGross}
          min={0}
          onChange={(monthlyGross) => {
            onChange({ source: 'monthlyGross', monthlyGross });
          }}
        />
        <NumberField
          label='Hours per day'
          value={settings.hoursPerDay}
          min={0}
          max={24}
          onChange={(hoursPerDay) => {
            onChange({ hoursPerDay });
          }}
        />
        <NumberField
          label='Vacation days per year'
          value={settings.vacationDays}
          min={0}
          onChange={(vacationDays) => {
            onChange({ vacationDays });
          }}
          hint='The legal minimum is 20.'
        />
        <NumberField
          label='Sick days per year'
          value={settings.sickDays}
          min={0}
          onChange={(sickDays) => {
            onChange({ sickDays });
          }}
        />
        <NumberField
          label='Other unbilled days per year'
          value={settings.otherUnbilledDays}
          min={0}
          onChange={(otherUnbilledDays) => {
            onChange({ otherUnbilledDays });
          }}
          hint='Such as gaps between contracts.'
        />
        <NumberField
          label='Employer extras per year'
          unit='EUR'
          value={settings.annualEmployerExtras}
          min={0}
          onChange={(annualEmployerExtras) => {
            onChange({ annualEmployerExtras });
          }}
          hint='Paid on top of the salary, such as meal allowances and bonuses.'
        />
      </div>
      <dl className='grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:grid-cols-4'>
        <WorkYearStat label='Workdays' value={workYear.weekdays} />
        <WorkYearStat label='Holidays on workdays' value={workYear.holidaysOnWeekdays} />
        <WorkYearStat label='Billable days' value={workYear.billableDays} />
        <WorkYearStat label='Billable hours' value={workYear.billableHours} />
      </dl>
      <p className='text-xs text-slate-500 dark:text-slate-400'>
        Yearly averages: 365.25 days a year, and each holiday counted by how often it falls on a
        workday.
      </p>
      <BreakdownTable
        caption='Per year'
        rows={[
          {
            label: 'Contractor billing',
            detail: `${formatNumber(workYear.billableHours)} hours at ${formatEuro(equivalence.hourlyRate)}`,
            amount: equivalence.annualBilling,
            kind: 'subtotal',
          },
          ...(settings.annualEmployerExtras > 0
            ? [{ label: 'Employer extras', amount: -settings.annualEmployerExtras }]
            : []),
          {
            label: 'Health insurance',
            detail: `${formatPercent(rules.contributions.employerHealthRate)} of gross, paid by the employer`,
            amount: -annualHealthContribution,
          },
          { label: 'Gross salary', amount: equivalence.annualGross, kind: 'total' },
        ]}
      />
      <PayrollTables breakdown={payroll} />
    </CalculatorSection>
  );
}

function WorkYearStat({
  label,
  value,
}: {
  readonly label: string;
  readonly value: number;
}): ReactNode {
  return (
    <div className='flex flex-col'>
      <dt className='text-xs text-slate-500 dark:text-slate-400'>{label}</dt>
      <dd className='font-medium text-slate-900 tabular-nums dark:text-slate-100'>
        {formatNumber(value)}
      </dd>
    </div>
  );
}
