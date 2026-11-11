const EURO_FORMAT = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });
const PERCENT_FORMAT = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
});
const NUMBER_FORMAT = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

export function formatEuro(amount: number): string {
  // Shows a negated zero, such as an empty expense, as €0.00 rather than -€0.00.
  return EURO_FORMAT.format(amount === 0 ? 0 : amount);
}

export function formatPercent(rate: number): string {
  return PERCENT_FORMAT.format(rate);
}

export function formatNumber(value: number): string {
  return NUMBER_FORMAT.format(value);
}
