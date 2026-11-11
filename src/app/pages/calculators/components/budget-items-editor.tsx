import type { ReactNode } from 'react';

import { cn } from '@/app/util';

import { CURRENCIES, type Currency, type Period } from '../model/company-budget';
import { moveBudgetItem, removeBudgetItem, updateBudgetItem } from '../settings/budget-items';
import { SETTING_LIMITS, type BudgetItemSettings } from '../settings/settings';
import { CheckboxField, NumberField, SelectField, type SelectOption, TextField } from './controls';
import { FIELD_HINT_CLASS } from './controls/field-styles';
import { IconButton } from './ui/icon-button';

export interface BudgetItemsEditorProps<T extends BudgetItemSettings> {
  readonly title: string;
  readonly items: readonly T[];
  readonly onChange: (items: readonly T[]) => void;
  readonly createItem: () => T;
  /** The periods an item may be paid in, such as per hour only for income. */
  readonly periods: readonly Period[];
  readonly hint?: string;
  /** A field for what only this kind of item has, placed before the VAT switch. */
  readonly renderExtraField?: (
    item: T,
    name: string,
    update: (changes: Partial<T>) => void,
  ) => ReactNode;
}

const ROW_COLUMNS = 'lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_5.5rem_8rem_auto_auto]';
const ROW_COLUMNS_WITH_EXTRA_FIELD =
  'lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_5.5rem_8rem_9.5rem_auto_auto]';

const CURRENCY_OPTIONS: readonly SelectOption<Currency>[] = CURRENCIES.map((currency) => ({
  value: currency,
  label: currency,
}));

const PERIOD_LABELS: Readonly<Record<Period, string>> = {
  hour: 'Per hour',
  month: 'Per month',
  year: 'Per year',
};

export function BudgetItemsEditor<T extends BudgetItemSettings>({
  title,
  items,
  onChange,
  createItem,
  periods,
  hint,
  renderExtraField,
}: BudgetItemsEditorProps<T>): ReactNode {
  const periodOptions: readonly SelectOption<Period>[] = periods.map((period) => ({
    value: period,
    label: PERIOD_LABELS[period],
  }));
  const updateItem = (id: string, changes: Partial<T>): void => {
    onChange(updateBudgetItem(items, id, changes));
  };
  // Changes to the fields every item has are valid for T, which TypeScript cannot infer.
  const updateBaseFields = (id: string, changes: Partial<BudgetItemSettings>): void => {
    updateItem(id, changes as Partial<T>);
  };

  return (
    <fieldset className='flex flex-col gap-3'>
      <legend className='pb-2 font-semibold text-slate-900 dark:text-slate-100'>{title}</legend>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
      {items.length === 0 && (
        <p className='text-sm text-slate-500 dark:text-slate-400'>No items yet.</p>
      )}
      {items.map((item, index) => {
        const name = item.label === '' ? `${title} item ${index + 1}` : item.label;
        return (
          <div
            key={item.id}
            className={cn(
              'grid grid-cols-2 items-center gap-2 border-t border-slate-200 pt-3 dark:border-slate-800',
              renderExtraField === undefined ? ROW_COLUMNS : ROW_COLUMNS_WITH_EXTRA_FIELD,
            )}
          >
            <div className='col-span-2 lg:col-span-1'>
              <TextField
                label={`${name}: description`}
                hideLabel
                placeholder='Description'
                value={item.label}
                onChange={(label) => {
                  updateBaseFields(item.id, { label });
                }}
              />
            </div>
            <NumberField
              label={`${name}: amount without VAT`}
              hideLabel
              max={SETTING_LIMITS.amount}
              value={item.amount}
              min={0}
              onChange={(amount) => {
                updateBaseFields(item.id, { amount });
              }}
            />
            <SelectField
              label={`${name}: currency`}
              hideLabel
              value={item.currency}
              options={CURRENCY_OPTIONS}
              onChange={(currency) => {
                updateBaseFields(item.id, { currency });
              }}
            />
            <SelectField
              label={`${name}: period`}
              hideLabel
              value={item.period}
              options={periodOptions}
              onChange={(period) => {
                updateBaseFields(item.id, { period });
              }}
            />
            {renderExtraField?.(item, name, (changes) => {
              updateItem(item.id, changes);
            })}
            <CheckboxField
              label={
                <>
                  <span className='sr-only'>{name}: </span>VAT
                </>
              }
              checked={item.vatApplies}
              onChange={(vatApplies) => {
                updateBaseFields(item.id, { vatApplies });
              }}
            />
            <div className='col-span-2 flex justify-self-end lg:col-span-1'>
              <IconButton
                icon='mdi:arrow-up'
                label={`Move ${name} up`}
                disabled={index === 0}
                onClick={() => {
                  onChange(moveBudgetItem(items, item.id, -1));
                }}
              />
              <IconButton
                icon='mdi:arrow-down'
                label={`Move ${name} down`}
                disabled={index === items.length - 1}
                onClick={() => {
                  onChange(moveBudgetItem(items, item.id, 1));
                }}
              />
              <IconButton
                icon='mdi:delete-outline'
                label={`Remove ${name}`}
                className='hover:text-red-700 dark:hover:text-red-400'
                onClick={() => {
                  onChange(removeBudgetItem(items, item.id));
                }}
              />
            </div>
          </div>
        );
      })}
      <button
        type='button'
        className='self-start rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
        onClick={() => {
          onChange([...items, createItem()]);
        }}
      >
        Add item
      </button>
    </fieldset>
  );
}
