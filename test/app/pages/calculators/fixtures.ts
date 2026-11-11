import {
  calculatePayroll,
  type PayrollBreakdown,
  type TaxProfile,
} from '../../../../src/app/pages/calculators/model/payroll';
import { PAYROLL_RULES_2026 } from '../../../../src/app/pages/calculators/model/rules-2026';

/** A Zagreb resident without children, dependents, or reliefs. */
export const ZAGREB_PROFILE: TaxProfile = {
  lowerTaxRate: 0.23,
  higherTaxRate: 0.33,
  age: 35,
  isPensionPillar2Member: true,
  childCount: 0,
  dependentCount: 0,
  disability: 'none',
  familyMembersWithPartialDisability: 0,
  familyMembersWithFullDisability: 0,
  livesInAssistedArea: false,
};

/** The 2026 monthly payroll for a gross salary in Zagreb, without non-taxable payments. */
export function zagrebPayrollFor(gross: number): PayrollBreakdown {
  return calculatePayroll(
    { gross, nonTaxablePayments: 0, profile: ZAGREB_PROFILE },
    PAYROLL_RULES_2026,
  );
}
