import type { Payee } from '../model/company-budget';

/** How each payee reads in an expense's "Paid to" field. */
export const PAYEE_LABELS: Readonly<Record<Payee, string>> = {
  others: 'Others',
  ownerTaxFree: 'Me, tax-free',
  ownerRent: 'Me, as rent',
  ownerInterest: 'Me, as interest',
};
