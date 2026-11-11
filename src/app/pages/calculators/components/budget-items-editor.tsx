import type { ReactNode } from 'react';

import { CURRENCIES, type Currency, type Period } from '../model/company-budget';
import { roundToCents } from '../model/money';
import { SETTING_LIMITS, type BudgetItemSettings } from '../settings/settings';
import { CheckboxField, NumberField, SelectField, type SelectOption, TextField } from './controls';

export interface BudgetItemsEditorProps {
  readonly title: string;
  readonly items: readonly BudgetItemSettings[];
  readonly onChange: (items: readonly BudgetItemSettings[]) => void;
  readonly createItem: () => BudgetItemSettings;
}

const CURRENCY_OPTIONS: readonly SelectOption<Currency>[] = CURRENCIES.map((currency) => ({
  value: currency,
  label: currency,
}));

const PERIOD_OPTIONS: readonly SelectOption<Period>[] = [
  { value: 'month', label: 'Per month' },
  { value: 'year', label: 'Per year' },
];

const PERCENT = 100;

export function BudgetItemsEditor({
  title,
  items,
  onChange,
  createItem,
}: BudgetItemsEditorProps): ReactNode {
  const updateItem = (id: string, changes: Partial<BudgetItemSettings>): void => {
    onChange(items.map((item) => (item.id === id ? { ...item, ...changes } : item)));
  };

  return (
    <fieldset className='flex flex-col gap-3'>
      <legend className='pb-2 font-semibold text-slate-900 dark:text-slate-100'>{title}</legend>
      {items.length === 0 && (
        <p className='text-sm text-slate-500 dark:text-slate-400'>No items yet.</p>
      )}
      {items.map((item, index) => {
        const name = item.label === '' ? `${title} item ${index + 1}` : item.label;
        return (
          <div
            key={item.id}
            className='grid grid-cols-2 items-center gap-2 border-t border-slate-200 pt-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_auto_auto_auto_minmax(0,0.8fr)_auto] dark:border-slate-800'
          >
            <div className='col-span-2 sm:col-span-1'>
              <TextField
                label={`${name}: description`}
                hideLabel
                placeholder='Description'
                value={item.label}
                onChange={(label) => {
                  updateItem(item.id, { label });
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
                updateItem(item.id, { amount });
              }}
            />
            <SelectField
              label={`${name}: currency`}
              hideLabel
              value={item.currency}
              options={CURRENCY_OPTIONS}
              onChange={(currency) => {
                updateItem(item.id, { currency });
              }}
            />
            <SelectField
              label={`${name}: period`}
              hideLabel
              value={item.period}
              options={PERIOD_OPTIONS}
              onChange={(period) => {
                updateItem(item.id, { period });
              }}
            />
            <CheckboxField
              label={
                <>
                  <span className='sr-only'>{name}: </span>VAT
                </>
              }
              checked={item.vatApplies}
              onChange={(vatApplies) => {
                updateItem(item.id, { vatApplies });
              }}
            />
            <NumberField
              label={`${name}: VAT rate`}
              hideLabel
              disabled={!item.vatApplies}
              unit='%'
              value={roundToCents(item.vatRate * PERCENT)}
              min={0}
              max={PERCENT}
              onChange={(vatPercent) => {
                updateItem(item.id, { vatRate: vatPercent / PERCENT });
              }}
            />
            <button
              type='button'
              aria-label={`Remove ${name}`}
              className='justify-self-end rounded-md px-2 py-1 text-sm text-slate-500 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-cyan-600 dark:text-slate-400 dark:hover:text-red-400'
              onClick={() => {
                onChange(items.filter((other) => other.id !== item.id));
              }}
            >
              Remove
            </button>
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
