import { formatEuro, formatPercent } from '../format';
import type { PayrollBreakdown, TaxProfile } from '../model/payroll';
import type { PayrollRules } from '../model/rules';
import type { BreakdownRow } from './breakdown-row';

export function getEmployeeRows(
  breakdown: PayrollBreakdown,
  profile: TaxProfile,
  rules: PayrollRules,
): readonly BreakdownRow[] {
  const { contributions } = rules;
  const pillar1Rate = profile.isPensionPillar2Member
    ? contributions.pensionPillar1Rate
    : contributions.pensionPillar1Rate + contributions.pensionPillar2Rate;
  const pillar1Detail =
    breakdown.lowIncomeReliefReduction > 0
      ? `${formatPercent(pillar1Rate)} of ${formatEuro(breakdown.pensionPillar1Base)}, after a ${formatEuro(breakdown.lowIncomeReliefReduction)} low-pay reduction of the base`
      : `${formatPercent(pillar1Rate)} of ${formatEuro(breakdown.pensionPillar1Base)}`;
  const contributionBase = Math.min(breakdown.gross, contributions.maxMonthlyBase);
  const higherBracketBase =
    breakdown.taxableBase -
    Math.min(breakdown.taxableBase, rules.incomeTax.monthlyLowerBracketLimit);

  return [
    { label: 'Gross salary', amount: breakdown.gross, kind: 'subtotal' },
    {
      label: 'Pension insurance, pillar I',
      detail: pillar1Detail,
      amount: -breakdown.pensionPillar1,
    },
    ...(profile.isPensionPillar2Member
      ? [
          {
            label: 'Pension insurance, pillar II',
            detail: `${formatPercent(contributions.pensionPillar2Rate)} of ${formatEuro(contributionBase)}`,
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
      detail: 'Not taxed; deducted only to find the taxable base',
      amount: breakdown.personalAllowance,
    },
    { label: 'Taxable base', amount: breakdown.taxableBase },
    {
      label: 'Income tax, lower rate',
      detail: `${formatPercent(profile.lowerTaxRate)} of ${formatEuro(breakdown.taxableBase - higherBracketBase)}`,
      amount: -breakdown.taxAtLowerRate,
    },
    ...(breakdown.taxAtHigherRate > 0
      ? [
          {
            label: 'Income tax, higher rate',
            detail: `${formatPercent(profile.higherTaxRate)} of ${formatEuro(higherBracketBase)}`,
            amount: -breakdown.taxAtHigherRate,
          },
        ]
      : []),
    ...(breakdown.assistedAreaRelief > 0
      ? [
          {
            label: 'Assisted area tax relief',
            detail: `${formatPercent(rules.incomeTax.assistedAreaReliefShare)} of the income tax`,
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

export function getEmployerRows(
  breakdown: PayrollBreakdown,
  rules: PayrollRules,
): readonly BreakdownRow[] {
  return [
    { label: 'Gross salary', amount: breakdown.gross },
    {
      label: 'Health insurance',
      detail: `${formatPercent(rules.contributions.employerHealthRate)} of gross, paid by the employer`,
      amount: breakdown.employerHealthContribution,
    },
    ...(breakdown.nonTaxablePayments > 0
      ? [{ label: 'Non-taxable payments', amount: breakdown.nonTaxablePayments }]
      : []),
    { label: 'Total employer cost', amount: breakdown.employerCost, kind: 'total' },
  ];
}
