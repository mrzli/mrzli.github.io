import { formatEuro, formatPercent } from '../format';
import type { PayrollBreakdown } from '../model/payroll';
import { type BreakdownRow, rowsIf } from './breakdown-row';

export function getEmployeeRows(breakdown: PayrollBreakdown): readonly BreakdownRow[] {
  const pillar1Base = `${formatPercent(breakdown.pensionPillar1Rate)} of ${formatEuro(breakdown.pensionPillar1Base)}`;
  const pillar1Detail =
    breakdown.lowIncomeReliefReduction > 0
      ? `${pillar1Base}, after a ${formatEuro(breakdown.lowIncomeReliefReduction)} low-pay reduction of the base`
      : pillar1Base;

  return [
    { label: 'Gross salary', amount: breakdown.gross, kind: 'subtotal' },
    {
      label: 'Pension insurance, pillar I',
      detail: pillar1Detail,
      amount: -breakdown.pensionPillar1,
    },
    ...rowsIf(breakdown.pensionPillar2Rate > 0, {
      label: 'Pension insurance, pillar II',
      detail: `${formatPercent(breakdown.pensionPillar2Rate)} of ${formatEuro(breakdown.contributionBase)}`,
      amount: -breakdown.pensionPillar2,
    }),
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
    ...rowsIf(breakdown.taxAtHigherRate > 0, {
      label: 'Income tax, higher rate',
      detail: `${formatPercent(breakdown.higherTaxRate)} of ${formatEuro(breakdown.higherBracketBase)}`,
      amount: -breakdown.taxAtHigherRate,
    }),
    ...rowsIf(breakdown.assistedAreaRelief > 0, {
      label: 'Assisted area tax relief',
      detail: `${formatPercent(breakdown.assistedAreaReliefShare)} of the income tax`,
      amount: breakdown.assistedAreaRelief,
    }),
    ...getNonTaxableRows(breakdown),
    { label: 'Net pay', amount: breakdown.netPay, kind: 'total' },
    ...rowsIf(
      breakdown.youthRelief > 0,
      {
        label: 'Youth tax relief',
        detail: 'Refunded after the year ends, in the annual tax settlement',
        amount: breakdown.youthRelief,
      },
      {
        label: 'Net pay with youth relief',
        detail: 'Monthly average over the year',
        amount: breakdown.netPayWithYouthRelief,
        kind: 'total',
      },
    ),
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
    ...getNonTaxableRows(breakdown),
    { label: 'Total employer cost', amount: breakdown.employerCost, kind: 'total' },
  ];
}

function getNonTaxableRows(breakdown: PayrollBreakdown): readonly BreakdownRow[] {
  return rowsIf(breakdown.nonTaxablePayments > 0, {
    label: 'Non-taxable payments',
    amount: breakdown.nonTaxablePayments,
  });
}
