import type { CompanyTaxRules, PayrollRules } from './rules';

/**
 * Croatian payroll rules for 2026.
 *
 * Sources:
 * - Contributions: https://porezna-uprava.gov.hr/hr/doprinosi/4585
 * - Contribution bases for 2026 (maximum base, director minimum base), NN 150/2025:
 *   https://narodne-novine.nn.hr/clanci/sluzbeni/full/2025_12_150_2237.html
 * - Pension pillar I relief for low pay (Zakon o doprinosima, art. 21.a), NN 114/2023:
 *   https://narodne-novine.nn.hr/clanci/sluzbeni/2023_10_114_1611.html
 * - Personal allowance and coefficients:
 *   https://porezna-uprava.gov.hr/hr/osobni-odbitak-ili-neoporezivi-dio-place/4677
 * - Tax brackets, NN 152/2024: https://narodne-novine.nn.hr/clanci/sluzbeni/2024_12_152_2505.html
 * - Youth relief: https://porezna-uprava.gov.hr/hr/umanjenja-osobama-do-30-godina-zivota/4670
 * - Assisted areas and Vukovar: https://porezna-uprava.gov.hr/hr/posebne-olaksice/4669
 * - Minimum wage, NN 132/2025: https://narodne-novine.nn.hr/clanci/sluzbeni/2025_10_132_1931.html
 */
export const PAYROLL_RULES_2026: PayrollRules = {
  year: 2026,
  contributions: {
    pensionPillar1Rate: 0.15,
    pensionPillar2Rate: 0.05,
    employerHealthRate: 0.165,
    maxMonthlyBase: 11_958,
    lowIncomeRelief: {
      maxReduction: 300,
      fullReductionUpTo: 700,
      phaseOutUpTo: 1300,
      phaseOutFactor: 0.5,
    },
  },
  incomeTax: {
    personalAllowance: 600,
    dependentCoefficient: 0.5,
    childCoefficients: [0.5, 0.7, 1.0, 1.4, 1.9, 2.5, 3.2, 4.0, 4.9],
    childCoefficientIncrement: 1.1,
    disabilityCoefficients: { none: 0, partial: 0.3, full: 1.0 },
    monthlyLowerBracketLimit: 5000,
    youthReliefs: [
      { maxAge: 25, share: 1 },
      { maxAge: 30, share: 0.5 },
    ],
    assistedAreaReliefShare: 0.5,
  },
  minimumWage: 1050,
  directorMinimumContributionBase: 1295.45,
};

/**
 * Croatian company tax rules for 2026.
 *
 * Sources:
 * - Profit tax: https://porezna-uprava.gov.hr/hr/porez-na-dobit-3940/3940
 * - Dividend tax: https://porezna-uprava.gov.hr/hr/oporezivanje-kapitala/4745
 * - VAT: https://porezna-uprava.gov.hr/hr/pdv-3938/3938
 */
export const COMPANY_TAX_RULES_2026: CompanyTaxRules = {
  profitTaxLowRate: 0.1,
  profitTaxHighRate: 0.18,
  profitTaxLowRateRevenueLimit: 1_000_000,
  dividendTaxRate: 0.12,
  vatRates: [0.25, 0.13, 0.05, 0],
};
