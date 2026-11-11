import type { ReactNode } from 'react';

import { formatPercent } from '../format';
import type { CityTaxRate } from '../model/city-tax-rates';
import { DISABILITY_LEVELS, type DisabilityLevel } from '../model/rules';
import type { TaxProfileSettings } from '../settings/settings';
import { CalculatorSection } from './calculator-section';
import {
  CheckboxField,
  ComboboxField,
  FieldGroup,
  NumberField,
  SelectField,
  type SelectOption,
} from './controls';
import { CountField } from './fields';

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
        <CountField
          label='Dependent children'
          value={settings.childCount}
          onChange={(childCount) => {
            onChange({ childCount });
          }}
        />
        <CountField
          label='Other dependent family members'
          value={settings.dependentCount}
          onChange={(dependentCount) => {
            onChange({ dependentCount });
          }}
        />
        <FieldGroup legend='Disability' columns='three'>
          <SelectField
            label='Yours'
            value={settings.disability}
            options={DISABILITY_OPTIONS}
            onChange={(disability) => {
              onChange({ disability });
            }}
          />
          <CountField
            label='Family members, partial'
            value={settings.familyMembersWithPartialDisability}
            onChange={(familyMembersWithPartialDisability) => {
              onChange({ familyMembersWithPartialDisability });
            }}
          />
          <CountField
            label='Family members, 100%'
            value={settings.familyMembersWithFullDisability}
            onChange={(familyMembersWithFullDisability) => {
              onChange({ familyMembersWithFullDisability });
            }}
            hint='Or with a care allowance.'
          />
        </FieldGroup>
        <div className='col-span-full grid gap-4 sm:grid-cols-2'>
          <CheckboxField
            variant='tile'
            label='Member of pension pillar II'
            checked={settings.isPensionPillar2Member}
            onChange={(isPensionPillar2Member) => {
              onChange({ isPensionPillar2Member });
            }}
            hint='Without pillar II, all 20% goes to pillar I.'
          />
          <CheckboxField
            variant='tile'
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
