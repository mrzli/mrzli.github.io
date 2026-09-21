import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { createLinkedInSections, LINKEDIN_LIMITS } from '../../src/content/exports/linkedin';
import type { LinkedInSection } from '../../src/content/exports/types';
import { exportLinkedIn, renderLinkedIn } from './export';

verify();

function verify(): void {
  const sections = createLinkedInSections(2030);
  const markdown = renderLinkedIn(sections);
  assert.equal(markdown, renderLinkedIn(createLinkedInSections(2030)));
  const blocks = [...markdown.matchAll(/^```text\n([\s\S]*?)\n```$/gm)].map((match) => match[1]);
  assert.deepEqual(
    blocks,
    sections.flatMap((section) => section.fields.map((field) => field.value)),
  );
  assert.ok(blocks.includes('Goran Mržljak'));
  assert.ok(
    blocks.some(
      (block) =>
        block.includes('22 years of professional') && block.includes('14 years of independent'),
    ),
  );
  const experience = sections.filter((section) => section.title.startsWith('Experience'));
  assert.equal(experience.length, 6);
  assert.equal(
    experience[0].fields.find((field) => field.label === 'Start date')?.value,
    'January 2016',
  );
  assert.equal(experience[0].fields.find((field) => field.label === 'End date')?.value, 'Present');
  assert.ok(!experience.some((section) => section.title.includes('Student')));
  assert.ok(
    sections
      .find((section) => section.title === 'Education')
      ?.fields.some((field) => field.value.includes('Student Project')),
  );

  for (const [field, limit] of Object.entries(LINKEDIN_LIMITS)) {
    const boundary: readonly LinkedInSection[] = [
      { title: 'Boundary', fields: [{ label: field, value: 'ž'.repeat(limit), limit }] },
    ];
    assert.doesNotThrow(() => renderLinkedIn(boundary), field);
    assert.throws(
      () =>
        renderLinkedIn([
          { title: 'Overflow', fields: [{ label: field, value: 'ž'.repeat(limit + 1), limit }] },
        ]),
      /1 over/,
      field,
    );
  }
  assert.throws(
    () =>
      renderLinkedIn([{ title: 'Unicode', fields: [{ label: 'Emoji', value: '😀', limit: 1 }] }]),
    /2\/1/,
  );
  assert.ok(
    renderLinkedIn([
      { title: 'Fences', fields: [{ label: 'Text', value: 'Literal ``` inside text' }] },
    ]).includes('````text\nLiteral ``` inside text\n````'),
  );

  const root = mkdtempSync(join(tmpdir(), 'portfolio-linkedin-'));
  const destination = join(root, 'public', 'linkedin.md');
  exportLinkedIn(sections, destination, join(root, 'work'));
  assert.equal(readFileSync(destination, 'utf8'), markdown);
  writeFileSync(destination, 'Previous good export');
  assert.throws(
    () =>
      exportLinkedIn(
        [{ title: 'Failure', fields: [{ label: 'Headline', value: 'Too long', limit: 1 }] }],
        destination,
        join(root, 'work'),
      ),
    /Failure \/ Headline/,
  );
  assert.equal(readFileSync(destination, 'utf8'), 'Previous good export');
  console.log(
    `LinkedIn verification passed: exact copy blocks, deterministic generation, Unicode, dates, selection, limit boundaries, overflow and previous-file preservation. Artifacts: ${root}`,
  );
}
