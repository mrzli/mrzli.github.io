import { Icon } from '@iconify/react';
import { type ReactNode, useId, useState } from 'react';

import { cn } from '@/app/util';

import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CONTROL_BORDER_CLASS, FOCUS_RING_CLASS } from '../ui/styles';
import { FIELD_HINT_CLASS, FIELD_LABEL_CLASS } from './field-styles';

export interface ComboboxOption<T> {
  readonly value: T;
  /** Unique among the options; the search matches it. */
  readonly label: string;
}

export interface ComboboxFieldProps<T> {
  readonly label: string;
  readonly value: T;
  readonly options: readonly ComboboxOption<T>[];
  readonly onChange: (value: T) => void;
  readonly searchPlaceholder: string;
  readonly hint?: string;
}

/** A select whose long option list can be searched by typing. */
export function ComboboxField<T>({
  label,
  value,
  options,
  onChange,
  searchPlaceholder,
  hint,
}: ComboboxFieldProps<T>): ReactNode {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((option) => option.value === value);

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className={FIELD_LABEL_CLASS}>
        {label}
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger
          id={id}
          role='combobox'
          aria-expanded={isOpen}
          className={cn(
            'flex h-9 w-full items-center justify-between gap-2 rounded-md px-3 text-left text-sm',
            CONTROL_BORDER_CLASS,
            FOCUS_RING_CLASS,
          )}
        >
          <span className='truncate'>{selected?.label}</span>
          <Icon
            icon='mdi:unfold-more-horizontal'
            aria-hidden='true'
            className='size-4 opacity-60'
          />
        </PopoverTrigger>
        <PopoverContent className='w-(--radix-popover-trigger-width) p-0'>
          <Command filter={matchesSearch}>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>No match.</CommandEmpty>
              {options.map((option) => (
                <CommandItem
                  key={option.label}
                  value={option.label}
                  onSelect={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <Icon
                    icon='mdi:check'
                    aria-hidden='true'
                    className={cn('size-4', option.value !== value && 'invisible')}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {hint !== undefined && <p className={FIELD_HINT_CLASS}>{hint}</p>}
    </div>
  );
}

const SEARCH_SCORES = { nameStart: 1, wordStart: 0.5, elsewhere: 0.1, none: 0 } as const;

/**
 * Matches text containing the search, ignoring case and diacritics, such as "sibenik" for
 * "Šibenik". Matches at the start of the text rank first, then those at the start of a word.
 */
function matchesSearch(value: string, search: string): number {
  const text = normalize(value);
  const query = normalize(search);
  if (text.startsWith(query)) {
    return SEARCH_SCORES.nameStart;
  }
  if (text.includes(` ${query}`) || text.includes(`-${query}`) || text.includes(`(${query}`)) {
    return SEARCH_SCORES.wordStart;
  }
  return text.includes(query) ? SEARCH_SCORES.elsewhere : SEARCH_SCORES.none;
}

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replaceAll(/\p{Diacritic}/gu, '')
    .replaceAll('đ', 'd')
    .replaceAll('Đ', 'D')
    .toLocaleLowerCase('hr');
}
