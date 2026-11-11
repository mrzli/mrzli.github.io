const EURO_FORMAT = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });
const PERCENT_FORMAT = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
});
const NUMBER_FORMAT = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

export function formatEuro(amount: number): string {
  return EURO_FORMAT.format(amount);
}

export function formatPercent(rate: number): string {
  return PERCENT_FORMAT.format(rate);
}

export function formatNumber(value: number): string {
  return NUMBER_FORMAT.format(value);
}
