/** The income tax rates that each city and municipality sets, for one year. */
export interface CityTaxRateData {
  readonly year: number;
  readonly source: string;
  readonly cities: readonly CityTaxRate[];
}

export interface CityTaxRate {
  /** The Tax Administration's code for the city or municipality. */
  readonly code: number;
  readonly name: string;
  readonly lowerRate: number;
  readonly higherRate: number;
}
