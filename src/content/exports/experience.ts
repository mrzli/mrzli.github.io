import type { ExperienceKey } from '../experience-keys';
import type { ExportExperienceSummary } from './types';

export const EXPORT_EXPERIENCE_SUMMARIES: Readonly<
  Partial<Record<ExperienceKey, ExportExperienceSummary>>
> = {
  'apis-it': {
    title: 'APIS IT',
    summary:
      'Implemented seven complete e-Tax forms and contributed to about ten others, covering web interfaces, XML, PDF reports, validation, and data access.',
  },
  gemmeus: {
    title: 'Gemmeus d.o.o.',
    summary: 'Developed C# spreadsheet features, including Excel-to-Windows Forms export.',
  },
  inetec: {
    title: 'INETEC d.o.o.',
    summary:
      'Built substantial parts of nuclear inspection software: 2D/3D signal charts, multithreaded rendering, signal processing, and persistence.',
  },
  ultra: {
    title: 'Ultra d.o.o.',
    summary:
      'Built a complete Windows Forms application for fuel-dispenser control, including custom controls and SQLite storage.',
  },
  ekobit: {
    title: 'Ekobit d.o.o.',
    summary: 'Developed ASP.NET and database features for Croatian financial institutions.',
  },
};
