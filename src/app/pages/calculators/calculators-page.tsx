import { ExternalLink, PageContainer, Typography } from '@components';
import type { ReactNode } from 'react';

import { CompanySection } from './components/company-section';
import { EmployeeOfferSection } from './components/employee-offer-section';
import { EquivalenceSection } from './components/equivalence-section';
import { SalarySection } from './components/salary-section';
import { TaxProfileSection } from './components/tax-profile-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import CITY_TAX_RATES from './data/city-tax-rates-2026.json';
import type { CityTaxRate, CityTaxRateData } from './model/city-tax-rates';
import { calculateWorkYear } from './model/contractor-equivalence';
import type { TaxProfile } from './model/payroll';
import { COMPANY_TAX_RULES_2026, PAYROLL_RULES_2026 } from './model/rules-2026';
import { toWorkYearInput } from './settings/conversions';
import {
  type BudgetItemSettings,
  CALCULATOR_TABS,
  type CalculatorTab,
  COMPANY_VALIDATORS,
  type CompanySettings,
  EQUIVALENCE_VALIDATORS,
  EMPLOYEE_OFFER_VALIDATORS,
  type EmployeeOfferSettings,
  type EquivalenceSettings,
  PAGE_VALIDATORS,
  type PageSettings,
  SALARY_VALIDATORS,
  type SalarySettings,
  TAX_PROFILE_VALIDATORS,
  type TaxProfileSettings,
} from './settings/settings';
import { useStoredSettings } from './settings/use-stored-settings';

const RULES = PAYROLL_RULES_2026;
const COMPANY_RULES = COMPANY_TAX_RULES_2026;
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
  nonTaxablePayments: { perMonth: 0, perYear: 0 },
};

const DEFAULT_COMPANY: CompanySettings = {
  ownerGross: 2000,
  ownerNonTaxablePayments: { perMonth: 0, perYear: 0 },
  usdPerEur: 1.15,
  incomes: [],
  expenses: [],
};

const DEFAULT_EMPLOYEE_OFFER: EmployeeOfferSettings = {
  gross: 3000,
  nonTaxablePayments: { perMonth: 0, perYear: 0 },
};

const DEFAULT_PAGE: PageSettings = { tab: 'equivalence' };

const TAB_LABELS: Readonly<Record<CalculatorTab, string>> = {
  equivalence: 'Rate and salary',
  salary: 'Gross and net',
  company: 'Company',
  employeeOffer: 'Employee offer',
};

const STORAGE_KEYS = {
  page: 'calculators.page',
  taxProfile: 'calculators.tax-profile',
  equivalence: 'calculators.equivalence',
  salary: 'calculators.salary',
  company: 'calculators.company',
  employeeOffer: 'calculators.employee-offer',
} as const;

export function CalculatorsPage(): ReactNode {
  const page = useStoredSettings(STORAGE_KEYS.page, DEFAULT_PAGE, PAGE_VALIDATORS);
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
  const company = useStoredSettings(STORAGE_KEYS.company, DEFAULT_COMPANY, COMPANY_VALIDATORS);
  const employeeOffer = useStoredSettings(
    STORAGE_KEYS.employeeOffer,
    DEFAULT_EMPLOYEE_OFFER,
    EMPLOYEE_OFFER_VALIDATORS,
  );
  const city = findCity(taxProfile.settings.cityCode, CITY_DATA.cities);
  // A stored city missing from the current data shows and uses the default city.
  const taxProfileSettings = { ...taxProfile.settings, cityCode: city.code };
  const profile = toTaxProfile(taxProfileSettings, city);

  return (
    <PageContainer title='Calculators'>
      <Typography variant='prose'>
        Croatian salary calculators with {RULES.year} rules. The results are estimates, not tax
        advice. Inputs are saved in this browser.
      </Typography>
      <TaxProfileSection
        settings={taxProfileSettings}
        onChange={taxProfile.update}
        cities={CITY_DATA.cities}
        year={RULES.year}
      />
      <Tabs
        value={page.settings.tab}
        onValueChange={(value) => {
          const tab = CALCULATOR_TABS.find((candidate) => candidate === value);
          if (tab !== undefined) {
            page.update({ tab });
          }
        }}
        className='flex flex-col gap-4'
      >
        <TabsList aria-label='Calculators'>
          {CALCULATOR_TABS.map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {TAB_LABELS[tab]}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='equivalence'>
          <EquivalenceSection
            settings={equivalence.settings}
            onChange={equivalence.update}
            profile={profile}
            rules={RULES}
          />
        </TabsContent>
        <TabsContent value='salary'>
          <SalarySection
            settings={salary.settings}
            onChange={salary.update}
            profile={profile}
            rules={RULES}
          />
        </TabsContent>
        <TabsContent value='company'>
          <CompanySection
            settings={company.settings}
            onChange={company.update}
            createItem={createBudgetItem}
            profile={profile}
            payrollRules={RULES}
            companyRules={COMPANY_RULES}
          />
        </TabsContent>
        <TabsContent value='employeeOffer'>
          <EmployeeOfferSection
            settings={employeeOffer.settings}
            onChange={employeeOffer.update}
            company={company.settings}
            billableHours={calculateWorkYear(toWorkYearInput(equivalence.settings)).billableHours}
            profile={profile}
            payrollRules={RULES}
            companyRules={COMPANY_RULES}
          />
        </TabsContent>
      </Tabs>
      <div className='flex flex-wrap items-center gap-x-1 text-sm text-slate-700 dark:text-slate-300'>
        Sources: Porezna uprava, Narodne novine, and the city tax rate table from
        <ExternalLink label='data.gov.hr' href={CITY_DATA.source} variant='highlight' />
        under the Croatian open license.
      </div>
    </PageContainer>
  );
}

function createBudgetItem(): BudgetItemSettings {
  return {
    id: crypto.randomUUID(),
    label: '',
    amount: 0,
    currency: 'EUR',
    period: 'month',
    vatApplies: false,
    vatRate: COMPANY_RULES.standardVatRate,
  };
}

function findCity(cityCode: number, cities: readonly CityTaxRate[]): CityTaxRate {
  const city =
    cities.find((candidate) => candidate.code === cityCode) ??
    cities.find((candidate) => candidate.code === DEFAULT_TAX_PROFILE.cityCode);
  if (city === undefined) {
    throw new Error('The city tax rate data has no default city.');
  }
  return city;
}

function toTaxProfile(settings: TaxProfileSettings, city: CityTaxRate): TaxProfile {
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
