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
  const shortCv = createCvDocument('concise', 2030);
  const sections = createLinkedInSections(shortCv);
  const markdown = renderLinkedIn(sections);
  assert.equal(markdown, renderLinkedIn(createLinkedInSections(shortCv)));
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
  assert.equal(experience.length, 2);
  assert.equal(
    experience[0].fields.find((field) => field.label === 'Start date')?.value,
    'January 2016',
  );
  assert.equal(experience[0].fields.find((field) => field.label === 'End date')?.value, 'Present');
  assert.ok(!experience.some((section) => section.title.includes('Student')));
  const earlier = shortCv.earlierExperience[0];
  assert.equal(experience[1].title, `Experience — ${earlier.title}`);
  assert.equal(
    experience[1].fields.find((field) => field.label === 'Description')?.value,
    [
      ...earlier.projects[0].context,
      ...earlier.projects[0].contributions,
      `More work and technical detail: ${shortCv.profile.website}experience#apis-it`,
    ].join('\n\u00a0\n'),
  );
  assert.ok(!experience[1].fields.some((field) => field.label === 'Company'));
  assert.equal(
    sections
      .find((section) => section.title === 'Education')
      ?.fields.find((field) => field.label === 'Description')?.value,
    shortCv.educationHighlights.join('\n\u00a0\n'),
  );

  for (const section of sections) {
    for (const field of section.fields) {
      if (field.label === 'About' || field.label === 'Description') {
        assert.ok(!field.value.includes('\n\n'), `Unprotected paragraph gap in ${section.title}`);
      }
    }
  }

  assert.ok(!sections.some((section) => section.title.startsWith('Project — ')));
  assert.ok(!sections.some((section) => section.title.startsWith('Website links — ')));
  assert.equal(
    experience[0].fields.find((field) => field.label === 'Title')?.value,
    'Senior software developer',
  );
  for (const [index, anchor] of ['contracting', 'apis-it'].entries()) {
    const url = `${shortCv.profile.website}experience#${anchor}`;
    assert.equal(
      experience[index].fields.find((field) => field.label === 'Website URL')?.value,
      url,
    );
    assert.ok(
      experience[index].fields.find((field) => field.label === 'Description')?.value.endsWith(url),
    );
  }
  const contractingDescription = experience[0].fields.find(
    (field) => field.label === 'Description',
  )!.value;
  assert.equal(contractingDescription.split('• ').length - 1, 6);
  assert.ok(contractingDescription.includes('technical architecture'));
  const contractingSkills = experience[0].fields
    .find((field) => field.label === 'Skills')!
    .value.split(', ');
  const sourceSkills = new Set(shortCv.projects.flatMap((project) => project.technologies));
  assert.ok(contractingSkills.length > 5 && contractingSkills.length < sourceSkills.size);
  assert.equal(new Set(contractingSkills).size, contractingSkills.length);
  assert.ok(contractingSkills.includes('JavaScript'));
  assert.ok(contractingSkills.every((skill) => skill === 'JavaScript' || sourceSkills.has(skill)));
  assert.equal(
    experience[1].fields.find((field) => field.label === 'Skills')?.value,
    earlier.projects[0].technologies.join(', '),
  );
  const about = sections.find((section) => section.title === 'About')?.fields[0].value;
  assert.equal(
    about?.replaceAll('\n\u00a0\n', '\n\n'),
    [...shortCv.summary, shortCv.ai, shortCv.profile.availability, shortCv.contracts].join('\n\n'),
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

  assert.equal(about?.split('\n\u00a0\n').length, 7);
  assert.ok(markdown.includes(`${about?.length} / 2600 characters`));
  assert.ok(blocks.includes(about!));

  assert.ok(!sections.some((section) => section.title.startsWith('Skills')));
  assert.throws(() => createLinkedInSections(createCvDocument('detailed')), /short CV/);

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
