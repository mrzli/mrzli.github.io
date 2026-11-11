import { roundToCents } from './money';
import type { DisabilityLevel, IncomeTaxRules, LowIncomeReliefRules, PayrollRules } from './rules';

/** The employee's circumstances that the monthly payroll depends on. */
export interface TaxProfile {
  readonly lowerTaxRate: number;
  readonly higherTaxRate: number;
  /** The age the employee reaches during the tax year. */
  readonly age: number;
  readonly isPensionPillar2Member: boolean;
  readonly childCount: number;
  readonly dependentCount: number;
  readonly disability: DisabilityLevel;
  /** Children and dependents with a partial disability. */
  readonly familyMembersWithPartialDisability: number;
  /** Children and dependents with a 100% disability or a care allowance. */
  readonly familyMembersWithFullDisability: number;
  readonly livesInAssistedArea: boolean;
}

export interface PayrollInput {
  readonly gross: number;
  /** Non-taxable payments within their caps, such as a meal allowance, paid on top of gross. */
  readonly nonTaxablePayments: number;
  readonly profile: TaxProfile;
}

export interface PayrollBreakdown {
  readonly gross: number;
  readonly pensionPillar1Base: number;
  readonly lowIncomeReliefReduction: number;
  readonly pensionPillar1: number;
  readonly pensionPillar2: number;
  readonly employeeContributions: number;
  readonly income: number;
  readonly personalAllowance: number;
  readonly taxableBase: number;
  readonly taxAtLowerRate: number;
  readonly taxAtHigherRate: number;
  readonly assistedAreaRelief: number;
  /** Income tax withheld from monthly pay. */
  readonly incomeTax: number;
  readonly nonTaxablePayments: number;
  /** Paid out each month, including non-taxable payments. */
  readonly netPay: number;
  /** Refunded after the year ends, in the annual tax settlement. */
  readonly youthRelief: number;
  readonly netPayWithYouthRelief: number;
  readonly employerHealthContribution: number;
  readonly employerCost: number;
}

export function calculatePayroll(input: PayrollInput, rules: PayrollRules): PayrollBreakdown {
  const { gross, nonTaxablePayments, profile } = input;
  const { contributions, incomeTax: taxRules } = rules;

  const contributionBase = Math.min(gross, contributions.maxMonthlyBase);
  const lowIncomeReliefReduction = roundToCents(
    Math.min(contributionBase, getLowIncomeReliefReduction(gross, contributions.lowIncomeRelief)),
  );
  const pensionPillar1Base = roundToCents(contributionBase - lowIncomeReliefReduction);
  // A worker insured only in pillar I pays both pillars' rates into pillar I.
  const pensionPillar1Rate = profile.isPensionPillar2Member
    ? contributions.pensionPillar1Rate
    : contributions.pensionPillar1Rate + contributions.pensionPillar2Rate;
  const pensionPillar1 = roundToCents(pensionPillar1Base * pensionPillar1Rate);
  const pensionPillar2 = profile.isPensionPillar2Member
    ? roundToCents(contributionBase * contributions.pensionPillar2Rate)
    : 0;
  const employeeContributions = roundToCents(pensionPillar1 + pensionPillar2);
  const income = roundToCents(gross - employeeContributions);

  const personalAllowance = calculatePersonalAllowance(profile, taxRules);
  const taxableBase = roundToCents(Math.max(0, income - personalAllowance));
  const lowerBracketBase = Math.min(taxableBase, taxRules.monthlyLowerBracketLimit);
  const higherBracketBase = taxableBase - lowerBracketBase;
  const taxAtLowerRate = roundToCents(lowerBracketBase * profile.lowerTaxRate);
  const taxAtHigherRate = roundToCents(higherBracketBase * profile.higherTaxRate);
  const taxBeforeRelief = roundToCents(taxAtLowerRate + taxAtHigherRate);
  const assistedAreaReliefShare = profile.livesInAssistedArea
    ? taxRules.assistedAreaReliefShare
    : 0;
  const assistedAreaRelief = roundToCents(taxBeforeRelief * assistedAreaReliefShare);
  const incomeTax = roundToCents(taxBeforeRelief - assistedAreaRelief);
  const netPay = roundToCents(income - incomeTax + nonTaxablePayments);

  // The youth relief applies to the lower-rate tax that remains after the assisted area relief.
  const youthRelief = roundToCents(
    taxAtLowerRate *
      (1 - assistedAreaReliefShare) *
      getYouthReliefShare(profile.age, taxRules.youthReliefs),
  );

  const employerHealthContribution = roundToCents(gross * contributions.employerHealthRate);

  return {
    gross,
    pensionPillar1Base,
    lowIncomeReliefReduction,
    pensionPillar1,
    pensionPillar2,
    employeeContributions,
    income,
    personalAllowance,
    taxableBase,
    taxAtLowerRate,
    taxAtHigherRate,
    assistedAreaRelief,
    incomeTax,
    nonTaxablePayments,
    netPay,
    youthRelief,
    netPayWithYouthRelief: roundToCents(netPay + youthRelief),
    employerHealthContribution,
    employerCost: roundToCents(gross + employerHealthContribution + nonTaxablePayments),
  };
}

/**
 * Finds the lowest gross, to the cent, whose monthly net pay reaches `netPay`. Net pay grows
 * strictly with gross, so a binary search over cents finds it exactly.
 */
export function calculateGrossFromNet(
  netPay: number,
  nonTaxablePayments: number,
  profile: TaxProfile,
  rules: PayrollRules,
): PayrollBreakdown {
  const targetCents = Math.round(netPay * 100);
  const netCentsAt = (grossCents: number): number =>
    Math.round(
      calculatePayroll({ gross: grossCents / 100, nonTaxablePayments, profile }, rules).netPay *
        100,
    );

  let lowCents = 0;
  let highCents = Math.max(100, targetCents);
  while (netCentsAt(highCents) < targetCents) {
    highCents *= 2;
  }
  while (lowCents < highCents) {
    const middleCents = Math.floor((lowCents + highCents) / 2);
    if (netCentsAt(middleCents) < targetCents) {
      lowCents = middleCents + 1;
    } else {
      highCents = middleCents;
    }
  }

  return calculatePayroll({ gross: lowCents / 100, nonTaxablePayments, profile }, rules);
}

export function calculatePersonalAllowance(profile: TaxProfile, rules: IncomeTaxRules): number {
  const coefficient =
    1 +
    profile.dependentCount * rules.dependentCoefficient +
    sumChildCoefficients(profile.childCount, rules) +
    rules.disabilityCoefficients[profile.disability] +
    profile.familyMembersWithPartialDisability * rules.disabilityCoefficients.partial +
    profile.familyMembersWithFullDisability * rules.disabilityCoefficients.full;
  return roundToCents(rules.personalAllowance * coefficient);
}

function sumChildCoefficients(childCount: number, rules: IncomeTaxRules): number {
  const listed = rules.childCoefficients;
  const lastListed = listed.at(-1) ?? 0;
  let sum = 0;
  for (let index = 0; index < childCount; index++) {
    sum +=
      index < listed.length
        ? listed[index]
        : lastListed + (index - listed.length + 1) * rules.childCoefficientIncrement;
  }
  return sum;
}

function getLowIncomeReliefReduction(gross: number, relief: LowIncomeReliefRules): number {
  if (gross <= relief.fullReductionUpTo) {
    return relief.maxReduction;
  }
  if (gross <= relief.phaseOutUpTo) {
    return relief.phaseOutFactor * (relief.phaseOutUpTo - gross);
  }
  return 0;
}

function getYouthReliefShare(age: number, reliefs: IncomeTaxRules['youthReliefs']): number {
  return reliefs.find((relief) => age <= relief.maxAge)?.share ?? 0;
}
