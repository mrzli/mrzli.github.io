import { mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

import type { LinkedInSection, LinkedInField } from '../../src/content/exports/types';

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
      'Generated from shared portfolio content. Short fields are grouped in tables. Copy each value into its matching LinkedIn field. For longer text, use the code block copy button in the Markdown preview. About and all descriptions contain a non-breaking space on each blank line to try to preserve paragraph gaps when pasted into LinkedIn. Labels, counts, and notes are not profile text. Skills and languages are individual entries, not a single description.',
      'Counts include spaces and line breaks and use UTF-16 code units (conservative for emoji). Limits are local working limits, not verification in your account. Unchecked fields show counts only. See [generation notes and limit sources](../../docs/linkedin-generation.md).',
      ...sections.flatMap((section) => [
        `## ${section.title}`,
        ...(section.note ? [section.note] : []),
        ...renderFields(section.fields),
      ]),
    ].join('\n\n') + '\n'
  );
}

function renderFields(fields: readonly LinkedInField[]): readonly string[] {
  const parts: string[] = [];
  let compactFields: LinkedInField[] = [];
  for (const field of fields) {
    if (isCompactField(field)) {
      compactFields.push(field);
      continue;
    }
    if (compactFields.length > 0) {
      parts.push(renderCompactFields(compactFields));
      compactFields = [];
    }
    const runs = field.value.match(/`+/g) ?? [];
    const fence = '`'.repeat(Math.max(3, ...runs.map((run) => run.length + 1)));
    parts.push(
      `### ${field.label}`,
      field.limit === undefined
        ? `${field.value.length} characters. Limit not checked.`
        : `${field.value.length} / ${field.limit} characters (working limit).`,
      `${fence}text\n${field.value}\n${fence}`,
    );
  }
  if (compactFields.length > 0) {
    parts.push(renderCompactFields(compactFields));
  }
  return parts;
}

function isCompactField(field: LinkedInField): boolean {
  return (
    [
      'Name',
      'Location',
      'Title',
      'Company',
      'Start date',
      'End date',
      'Location / workplace',
      'Project name',
      'Associated with',
      'School',
      'Degree',
      'Email',
      'Phone',
      'Website',
      'GitHub',
      'Stack Overflow',
      'Portfolio URL',
      'GitHub URL',
      'Nationality',
      'Languages',
      "Driver's License",
      'LinkedIn',
      'Short CV',
      'Detailed CV',
    ].includes(field.label) || /^(Skill|Language) \d+$/.test(field.label)
  );
}

function renderCompactFields(fields: readonly LinkedInField[]): string {
  const rows = ['| Field | Value | Field | Value |', '| --- | --- | --- | --- |'];
  for (let index = 0; index < fields.length; index += 2) {
    const cells = fields
      .slice(index, index + 2)
      .flatMap((field) => [
        escapeTableText(field.label),
        `<code>${escapeTableText(field.value)}</code>`,
      ]);
    if (cells.length === 2) {
      cells.push('', '');
    }
    rows.push(`| ${cells.join(' | ')} |`);
  }
  return rows.join('\n');
}

function escapeTableText(value: string): string {
  return value.replace(/[&<>|`*_[\]\\\r\n]/g, (character) => `&#${character.charCodeAt(0)};`);
}
