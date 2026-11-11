import { PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { EquivalenceSection } from './components/equivalence-section';
import { SalarySection } from './components/salary-section';
import { TaxProfileSection } from './components/tax-profile-section';
import CITY_TAX_RATES from './data/city-tax-rates-2026.json';
import type { CityTaxRate, CityTaxRateData } from './model/city-tax-rates';
import type { TaxProfile } from './model/payroll';
import { PAYROLL_RULES_2026 } from './model/rules-2026';
import {
  EQUIVALENCE_VALIDATORS,
  type EquivalenceSettings,
  SALARY_VALIDATORS,
  type SalarySettings,
  TAX_PROFILE_VALIDATORS,
  type TaxProfileSettings,
} from './settings/settings';
import { useStoredSettings } from './settings/use-stored-settings';

const RULES = PAYROLL_RULES_2026;
const CITY_DATA: CityTaxRateData = CITY_TAX_RATES;
const ZAGREB_CODE = 1333;

const DEFAULT_TAX_PROFILE: TaxProfileSettings = {
  cityCode: ZAGREB_CODE,
  age: 35,
  isPensionPillar2Member: true,
  childCount: 0,
  dependentCount: 0,
  disability: 'none',
  familyMembersWithPartialDisability: 0,
  familyMembersWithFullDisability: 0,
  livesInAssistedArea: false,
};

const DEFAULT_EQUIVALENCE: EquivalenceSettings = {
  source: 'hourlyRate',
  hourlyRate: 30,
  monthlyGross: 5000,
  hoursPerDay: 8,
  vacationDays: 20,
  sickDays: 3,
  otherUnbilledDays: 0,
  annualEmployerExtras: 0,
};

const DEFAULT_SALARY: SalarySettings = {
  direction: 'grossToNet',
  gross: 3000,
  netPay: 2000,
  nonTaxablePayments: 0,
};

const STORAGE_KEYS = {
  taxProfile: 'calculators.tax-profile',
  equivalence: 'calculators.equivalence',
  salary: 'calculators.salary',
} as const;

export function CalculatorsPage(): ReactNode {
  const taxProfile = useStoredSettings(
    STORAGE_KEYS.taxProfile,
    DEFAULT_TAX_PROFILE,
    TAX_PROFILE_VALIDATORS,
  );
  const equivalence = useStoredSettings(
    STORAGE_KEYS.equivalence,
    DEFAULT_EQUIVALENCE,
    EQUIVALENCE_VALIDATORS,
  );
  const salary = useStoredSettings(STORAGE_KEYS.salary, DEFAULT_SALARY, SALARY_VALIDATORS);
  const profile = toTaxProfile(taxProfile.settings, CITY_DATA.cities);

  return (
    <PageContainer title='Calculators'>
      <Typography variant='prose'>
        Croatian salary calculators with {RULES.year} rules. The results are estimates, not tax
        advice. Inputs are saved in this browser.
      </Typography>
      <TaxProfileSection
        settings={taxProfile.settings}
        onChange={taxProfile.update}
        cities={CITY_DATA.cities}
        year={RULES.year}
      />
      <EquivalenceSection
        settings={equivalence.settings}
        onChange={equivalence.update}
        profile={profile}
        rules={RULES}
      />
      <SalarySection
        settings={salary.settings}
        onChange={salary.update}
        profile={profile}
        rules={RULES}
      />
      <Typography variant='body'>
        Sources: Porezna uprava, Narodne novine, and the city tax rate table from{' '}
        <a className='underline' href={CITY_DATA.source}>
          data.gov.hr
        </a>{' '}
        under the Croatian open license.
      </Typography>
    </PageContainer>
  );
}

function toTaxProfile(settings: TaxProfileSettings, cities: readonly CityTaxRate[]): TaxProfile {
  const city =
    cities.find((candidate) => candidate.code === settings.cityCode) ??
    cities.find((candidate) => candidate.code === DEFAULT_TAX_PROFILE.cityCode);
  if (city === undefined) {
    throw new Error('The city tax rate data has no default city.');
  }
  return {
    lowerTaxRate: city.lowerRate,
    higherTaxRate: city.higherRate,
    age: settings.age,
    isPensionPillar2Member: settings.isPensionPillar2Member,
    childCount: settings.childCount,
    dependentCount: settings.dependentCount,
    disability: settings.disability,
    familyMembersWithPartialDisability: settings.familyMembersWithPartialDisability,
    familyMembersWithFullDisability: settings.familyMembersWithFullDisability,
    livesInAssistedArea: settings.livesInAssistedArea,
  };
}
