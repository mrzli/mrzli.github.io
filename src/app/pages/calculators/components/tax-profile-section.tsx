import type { ReactNode } from 'react';

import { formatPercent } from '../format';
import type { CityTaxRate } from '../model/city-tax-rates';
import { DISABILITY_LEVELS, type DisabilityLevel } from '../model/rules';
import type { TaxProfileSettings } from '../settings/settings';
import { CalculatorSection } from './calculator-section';
import {
  CheckboxField,
  ComboboxField,
  NumberField,
  SelectField,
  type SelectOption,
} from './controls';

export interface TaxProfileSectionProps {
  readonly settings: TaxProfileSettings;
  readonly onChange: (changes: Partial<TaxProfileSettings>) => void;
  readonly cities: readonly CityTaxRate[];
  readonly year: number;
}

const DISABILITY_LABELS: Readonly<Record<DisabilityLevel, string>> = {
  none: 'None',
  partial: 'Partial',
  full: '100% or care allowance',
};

const DISABILITY_OPTIONS: readonly SelectOption<DisabilityLevel>[] = DISABILITY_LEVELS.map(
  (level) => ({ value: level, label: DISABILITY_LABELS[level] }),
);

export function TaxProfileSection({
  settings,
  onChange,
  cities,
  year,
}: TaxProfileSectionProps): ReactNode {
  const cityOptions = cities.map((city) => ({
    value: city.code,
    label: `${city.name} (${formatPercent(city.lowerRate)} / ${formatPercent(city.higherRate)})`,
  }));

  return (
    <CalculatorSection
      title='Tax profile'
      description={`Personal circumstances that the salary calculations below use, with ${year} rules.`}
    >
      <div className='grid gap-4 sm:grid-cols-2'>
        <ComboboxField
          label='City or municipality of residence'
          searchPlaceholder='Search cities and municipalities'
          value={settings.cityCode}
          options={cityOptions}
          onChange={(cityCode) => {
            onChange({ cityCode });
          }}
          hint='Sets the lower and higher income tax rates.'
        />
        <NumberField
          label='Age'
          value={settings.age}
          min={0}
          integer
          onChange={(age) => {
            onChange({ age });
          }}
          hint={`The age reached during ${year}. Up to 25 refunds all lower-rate tax, 26 to 30 half.`}
        />
        <NumberField
          label='Dependent children'
          value={settings.childCount}
          min={0}
          integer
          onChange={(childCount) => {
            onChange({ childCount });
          }}
        />
        <NumberField
          label='Other dependent family members'
          value={settings.dependentCount}
          min={0}
          integer
          onChange={(dependentCount) => {
            onChange({ dependentCount });
          }}
        />
        <SelectField
          label='Own disability'
          value={settings.disability}
          options={DISABILITY_OPTIONS}
          onChange={(disability) => {
            onChange({ disability });
          }}
        />
        <NumberField
          label='Family members with a partial disability'
          value={settings.familyMembersWithPartialDisability}
          min={0}
          integer
          onChange={(familyMembersWithPartialDisability) => {
            onChange({ familyMembersWithPartialDisability });
          }}
        />
        <NumberField
          label='Family members with a 100% disability'
          value={settings.familyMembersWithFullDisability}
          min={0}
          integer
          onChange={(familyMembersWithFullDisability) => {
            onChange({ familyMembersWithFullDisability });
          }}
        />
        <div className='flex flex-col gap-3'>
          <CheckboxField
            label='Member of pension pillar II'
            checked={settings.isPensionPillar2Member}
            onChange={(isPensionPillar2Member) => {
              onChange({ isPensionPillar2Member });
            }}
            hint='Without pillar II, all 20% goes to pillar I.'
          />
          <CheckboxField
            label='Lives in Vukovar or an assisted area of development group I'
            checked={settings.livesInAssistedArea}
            onChange={(livesInAssistedArea) => {
              onChange({ livesInAssistedArea });
            }}
            hint='Halves the income tax.'
          />
        </div>
      </div>
    </CalculatorSection>
  );
}
