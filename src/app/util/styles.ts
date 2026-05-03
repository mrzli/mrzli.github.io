import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: readonly ClassValue[]): string => {
  return twMerge(clsx(...inputs));
};
