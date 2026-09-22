import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { createLinkedInSections, LINKEDIN_LIMITS } from '../../src/content/exports/linkedin';
import type { LinkedInSection } from '../../src/content/exports/types';
import { createCvDocument } from '../cv/document';
import { exportLinkedIn, renderLinkedIn } from './export';

verify();

function verify(): void {
  const sections = createLinkedInSections(2030);
  const markdown = renderLinkedIn(sections);
  assert.equal(markdown, renderLinkedIn(createLinkedInSections(2030)));
  const blocks = [...markdown.matchAll(/^```text\n([\s\S]*?)\n```$/gm)].map((match) => match[1]);
  const values = [...markdown.matchAll(/^```text\n([\s\S]*?)\n```$|<code>(.*?)<\/code>/gm)].map(
    (match) =>
      match[1] ?? match[2].replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code))),
  );
  assert.deepEqual(
    values,
    sections.flatMap((section) => section.fields.map((field) => field.value)),
  );
  assert.ok(values.includes('Goran Mržljak'));
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

  for (const section of sections) {
    for (const field of section.fields) {
      if (field.label === 'About' || field.label === 'Description') {
        assert.ok(!field.value.includes('\n\n'), `Unprotected paragraph gap in ${section.title}`);
      }
    }
  }

  const shortCv = createCvDocument('concise', 2030);
  const projects = sections.filter((section) => section.title.startsWith('Project — '));
  assert.equal(projects.length, 6);
  for (const [index, project] of projects.entries()) {
    const source = shortCv.projects[index];
    assert.equal(
      project.fields.find((field) => field.label === 'Project name')?.value,
      source.title,
    );
    assert.equal(
      project.fields
        .find((field) => field.label === 'Description')
        ?.value.replaceAll('\n\u00a0\n', '\n\n'),
      [...source.context, ...source.contributions].join('\n\n'),
    );
    assert.equal(
      project.fields.find((field) => field.label === 'Associated with')?.value,
      'Self-employed',
    );
    const skills = project.fields.filter((field) => field.label.startsWith('Skill '));
    assert.ok(skills.length <= 5);
    assert.ok(skills.every((field) => source.technologies.includes(field.value)));
    assert.ok(!project.fields.some((field) => field.label.includes('date')));
  }
  const about = sections.find((section) => section.title === 'About')?.fields[0].value;
  assert.equal(
    about?.replaceAll('\n\u00a0\n', '\n\n'),
    [
      ...shortCv.summary,
      shortCv.ai,
      shortCv.profile.availability,
      shortCv.contracts,
      `Work and project details: ${shortCv.profile.website}`,
    ].join('\n\n'),
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

  assert.equal(about?.split('\n\u00a0\n').length, 8);
  assert.ok(markdown.includes(`${about?.length} / 2600 characters`));
  assert.ok(blocks.includes(about!));

  const compact = renderLinkedIn([
    {
      title: 'Compact fields',
      fields: [
        { label: 'Company', value: 'A | B & <C>_*' },
        { label: 'Location', value: 'Zagreb, Croatia' },
        { label: 'Start date', value: 'January 2016' },
      ],
    },
  ]);
  assert.ok(
    compact.includes(
      '| Company | <code>A &#124; B &#38; &#60;C&#62;&#95;&#42;</code> | Location | <code>Zagreb, Croatia</code> |',
    ),
  );
  assert.ok(compact.includes('| Start date | <code>January 2016</code> |  |  |'));

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
