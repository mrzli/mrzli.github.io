export const EXPERIENCE_KEYS = [
  'contracting',
  'apis-it',
  'gemmeus',
  'inetec',
  'ultra',
  'ekobit',
  'visage',
] as const;
export type ExperienceKey = (typeof EXPERIENCE_KEYS)[number];

export const EXPERIENCE_PROJECT_KEYS = [
  'hvac',
  'warehouse-robotics',
  'eloqua',
  'electricity-consumption',
  'mobile-fueling',
  'insurance',
  'accounting',
  'graveyard-management',
  'parking',
  'nias',
  'government-payments',
  'eu-roaming',
  'e-learning',
  'other-contracts',
  'e-tax',
  'building-permits',
  'other-apis',
  'spreadsheet',
  'damage-analysis',
  'inspection-robot',
  'fuel-dispenser-web',
  'fuel-dispenser-desktop',
  'other-ultra',
  'financial-web',
  'body-animation',
] as const;
export type ExperienceProjectKey = (typeof EXPERIENCE_PROJECT_KEYS)[number];
