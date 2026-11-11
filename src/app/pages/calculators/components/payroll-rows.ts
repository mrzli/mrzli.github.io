import { formatEuro, formatPercent } from '../format';
import type { PayrollBreakdown } from '../model/payroll';
import type { BreakdownRow } from './breakdown-row';

export function getEmployeeRows(breakdown: PayrollBreakdown): readonly BreakdownRow[] {
  const pillar1Detail =
    breakdown.lowIncomeReliefReduction > 0
      ? `${formatPercent(breakdown.pensionPillar1Rate)} of ${formatEuro(breakdown.pensionPillar1Base)}, after a ${formatEuro(breakdown.lowIncomeReliefReduction)} low-pay reduction of the base`
      : `${formatPercent(breakdown.pensionPillar1Rate)} of ${formatEuro(breakdown.pensionPillar1Base)}`;

  return [
    { label: 'Gross salary', amount: breakdown.gross, kind: 'subtotal' },
    {
      label: 'Pension insurance, pillar I',
      detail: pillar1Detail,
      amount: -breakdown.pensionPillar1,
    },
    ...(breakdown.pensionPillar2Rate > 0
      ? [
          {
            label: 'Pension insurance, pillar II',
            detail: `${formatPercent(breakdown.pensionPillar2Rate)} of ${formatEuro(breakdown.contributionBase)}`,
            amount: -breakdown.pensionPillar2,
          },
        ]
      : []),
    {
      label: 'Income',
      detail: 'Gross minus contributions',
      amount: breakdown.income,
      kind: 'subtotal',
    },
    {
      label: 'Personal allowance',
      detail: 'Not taxed; deducted from income only to find the taxable base',
      amount: breakdown.personalAllowance,
      kind: 'info',
    },
    { label: 'Taxable base', amount: breakdown.taxableBase, kind: 'info' },
    {
      label: 'Income tax, lower rate',
      detail: `${formatPercent(breakdown.lowerTaxRate)} of ${formatEuro(breakdown.lowerBracketBase)}`,
      amount: -breakdown.taxAtLowerRate,
    },
    ...(breakdown.taxAtHigherRate > 0
      ? [
          {
            label: 'Income tax, higher rate',
            detail: `${formatPercent(breakdown.higherTaxRate)} of ${formatEuro(breakdown.higherBracketBase)}`,
            amount: -breakdown.taxAtHigherRate,
          },
        ]
      : []),
    ...(breakdown.assistedAreaRelief > 0
      ? [
          {
            label: 'Assisted area tax relief',
            detail: `${formatPercent(breakdown.assistedAreaReliefShare)} of the income tax`,
            amount: breakdown.assistedAreaRelief,
          },
        ]
      : []),
    ...(breakdown.nonTaxablePayments > 0
      ? [{ label: 'Non-taxable payments', amount: breakdown.nonTaxablePayments }]
      : []),
    { label: 'Net pay', amount: breakdown.netPay, kind: 'total' },
    ...(breakdown.youthRelief > 0
      ? [
          {
            label: 'Youth tax relief',
            detail: 'Refunded after the year ends, in the annual tax settlement',
            amount: breakdown.youthRelief,
          },
          {
            label: 'Net pay with youth relief',
            detail: 'Monthly average over the year',
            amount: breakdown.netPayWithYouthRelief,
            kind: 'total' as const,
          },
        ]
      : []),
  ];
}

export function getEmployerRows(breakdown: PayrollBreakdown): readonly BreakdownRow[] {
  return [
    { label: 'Gross salary', amount: breakdown.gross },
    {
      label: 'Health insurance',
      detail: `${formatPercent(breakdown.employerHealthRate)} of gross, paid by the employer`,
      amount: breakdown.employerHealthContribution,
    },
    ...(breakdown.nonTaxablePayments > 0
      ? [{ label: 'Non-taxable payments', amount: breakdown.nonTaxablePayments }]
      : []),
    { label: 'Total employer cost', amount: breakdown.employerCost, kind: 'total' },
  ];
}
