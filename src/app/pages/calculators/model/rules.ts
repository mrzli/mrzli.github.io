export interface PayrollRules {
  readonly year: number;
  readonly contributions: ContributionRules;
  readonly incomeTax: IncomeTaxRules;
}

export interface ContributionRules {
  readonly pensionPillar1Rate: number;
  readonly pensionPillar2Rate: number;
  readonly employerHealthRate: number;
  readonly maxMonthlyBase: number;
  readonly lowIncomeRelief: LowIncomeReliefRules;
}

/**
 * Reduces the pension pillar I base for low gross pay: by `maxReduction` up to
 * `fullReductionUpTo`, then by `phaseOutFactor × (phaseOutUpTo − gross)` up to `phaseOutUpTo`.
 */
export interface LowIncomeReliefRules {
  readonly maxReduction: number;
  readonly fullReductionUpTo: number;
  readonly phaseOutUpTo: number;
  readonly phaseOutFactor: number;
}

export interface IncomeTaxRules {
  readonly personalAllowance: number;
  readonly dependentCoefficient: number;
  /** Coefficients for the first, second, and later children, in order. */
  readonly childCoefficients: readonly number[];
  /**
   * Added to the previous child's coefficient for each child past the listed ones. This follows
   * the literal wording of the law ("1,1 više u odnosu prema koeficijentu za prethodno dijete"),
   * although the listed steps grow by 0.1 and would suggest a smaller next step.
   */
  readonly childCoefficientIncrement: number;
  readonly disabilityCoefficients: Readonly<Record<DisabilityLevel, number>>;
  /** The monthly taxable base taxed at the lower rate; the rest is taxed at the higher rate. */
  readonly monthlyLowerBracketLimit: number;
  /** Ordered by `maxAge`, youngest first. */
  readonly youthReliefs: readonly YouthRelief[];
  readonly assistedAreaReliefShare: number;
}

export const DISABILITY_LEVELS = ['none', 'partial', 'full'] as const;
export type DisabilityLevel = (typeof DISABILITY_LEVELS)[number];

/** Share of the lower-rate tax on salary that is refunded for ages up to `maxAge`. */
export interface YouthRelief {
  readonly maxAge: number;
  readonly share: number;
}

export interface CompanyTaxRules {
  readonly profitTaxLowRate: number;
  readonly profitTaxHighRate: number;
  /** Annual revenue up to which the low profit tax rate applies. */
  readonly profitTaxLowRateRevenueLimit: number;
  readonly dividendTaxRate: number;
  readonly standardVatRate: number;
  /** Final tax on rent the owner receives, charged after the flat expense share. */
  readonly rentTaxRate: number;
  /** Share of the rent recognized as expenses without proof. */
  readonly rentFlatExpenseShare: number;
  /** Final tax on interest the owner receives. */
  readonly interestTaxRate: number;
}
