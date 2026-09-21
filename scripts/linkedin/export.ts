import { mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

import type { LinkedInSection } from '../../src/content/exports/types';

export function exportLinkedIn(
  sections: readonly LinkedInSection[],
  destination: string,
  workDirectory: string,
): void {
  const markdown = renderLinkedIn(sections);
  mkdirSync(workDirectory, { recursive: true });
  mkdirSync(dirname(destination), { recursive: true });
  const staging = join(workDirectory, 'linkedin.md');
  writeFileSync(staging, markdown);
  renameSync(staging, destination);
}

export function renderLinkedIn(sections: readonly LinkedInSection[]): string {
  const errors: string[] = [];
  for (const section of sections) {
    for (const field of section.fields) {
      if (field.limit !== undefined && field.value.length > field.limit) {
        errors.push(
          `${section.title} / ${field.label}: ${field.value.length}/${field.limit} characters (${field.value.length - field.limit} over)`,
        );
      }
    }
  }
  if (errors.length > 0) {
    throw new Error(`LinkedIn export exceeds working limits:\n${errors.join('\n')}`);
  }
  return (
    [
      '# LinkedIn profile copy',
      'Generated from shared portfolio content. Copy only the text inside each block into the named field, without the code fences. Labels, counts, and notes are not profile text. Skills and languages are individual entries, not a single description.',
      'Counts include spaces and line breaks and use UTF-16 code units (conservative for emoji). Limits are local working limits, not verification in your account. Unchecked fields show counts only. See [generation notes and limit sources](../../docs/linkedin-generation.md).',
      ...sections.flatMap((section) => [
        `## ${section.title}`,
        ...(section.note ? [section.note] : []),
        ...section.fields.flatMap((field) => {
          const runs = field.value.match(/`+/g) ?? [];
          const fence = '`'.repeat(Math.max(3, ...runs.map((run) => run.length + 1)));
          return [
            `### ${field.label}`,
            field.limit === undefined
              ? `${field.value.length} characters. Limit not checked.`
              : `${field.value.length} / ${field.limit} characters (working limit).`,
            `${fence}text\n${field.value}\n${fence}`,
          ];
        }),
      ]),
    ].join('\n\n') + '\n'
  );
}
