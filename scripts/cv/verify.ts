import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { EXPERIENCE_SECTIONS } from '../../src/content/experience';
import { SKILLS_SECTIONS } from '../../src/content/skills';
import { buildCv } from './build';
import { createCvDocument } from './document';
import { escapeLatex, formatDate, renderCv } from './render';

verify();

function verify(): void {
  const root = mkdtempSync(join(tmpdir(), 'portfolio-cv-verification-'));
  const document = createCvDocument('concise', 2030);
  assert.equal(document.professionalYears, 22);
  assert.equal(document.contractingYears, 14);
  assert.equal(formatDate({ year: 2008, month: 2 }), 'February 2008');
  assert.throws(() => formatDate({ year: 2008, month: 13 }), /Invalid month/);
  assert.equal(renderCv(document), renderCv(document));
  const specialText = String.raw`C# & C++: 100% of $5_000 {value} ~ ^ \ path`;
  const tex = renderCv({ ...document, summary: [...document.summary, specialText] });
  const output = buildCv([{ variant: 'concise', tex }], { workDirectory: root });
  const extracted = execFileSync('pdftotext', [join(output, 'cv-goran-mrzljak-short.pdf'), '-'], {
    encoding: 'utf8',
  });
  assert.ok(extracted.includes('Goran Mržljak'));
  assert.ok(extracted.includes(specialText));
  const normalizedText = extracted.replace(/\s+/g, ' ');
  assert.ok(normalizedText.includes('22 years of professional experience'));
  assert.ok(normalizedText.includes('14 years of independent contract work'));
  const concise = renderCv(document);
  const detailedDocument = createCvDocument('detailed', 2030);
  assert.deepEqual(detailedDocument.skills, SKILLS_SECTIONS);
  const detailed = renderCv(detailedDocument);
  const employments = [
    detailedDocument.contracting,
    ...detailedDocument.earlierExperience.map((entry) => entry.employment),
  ];
  assert.deepEqual(employments, EXPERIENCE_SECTIONS);
  const projects = [
    detailedDocument.projects,
    ...detailedDocument.earlierExperience.map((entry) => entry.projects),
  ];
  EXPERIENCE_SECTIONS.forEach((employment, employmentIndex) => {
    assert.equal(projects[employmentIndex].length, employment.projects.length);
    for (const value of [employment.title, employment.role, employment.location]) {
      assert.ok(detailed.includes(escapeLatex(value)), `Missing employment content: ${value}`);
    }
    employment.projects.forEach((project, projectIndex) => {
      const exported = projects[employmentIndex][projectIndex];
      assert.equal(exported.title, project.title);
      assert.deepEqual(exported.technologies, project.tags);
      assert.deepEqual(exported.context, project.text);
      assert.deepEqual(exported.contributions, project.roleText);
      for (const value of [project.title, ...project.tags, ...project.text, ...project.roleText]) {
        assert.ok(detailed.includes(escapeLatex(value)), `Missing project content: ${value}`);
      }
    });
  });
  const selectionNotes = concise
    .split('\n')
    .filter((line) => line.startsWith('{\\small\\color{technology}Selected'));
  assert.equal(selectionNotes.length, 2);
  assert.equal(document.earlierExperience.length, 1);
  assert.ok(normalizedText.includes('Earlier software development roles'));
  assert.ok(normalizedText.includes('January 2007'));
  assert.ok(normalizedText.includes('May 2016'));
  assert.ok(!concise.includes('\\employer{APIS IT}'));
  assert.deepEqual(document.skills, [SKILLS_SECTIONS[0]]);
  assert.deepEqual(
    {
      ...document,
      variant: 'detailed',
      projects: detailedDocument.projects,
      skills: detailedDocument.skills,
      earlierExperience: detailedDocument.earlierExperience,
    },
    detailedDocument,
  );
  const retainedKeys = ['hvac', 'warehouse-robotics'];
  const retainedProjects = detailedDocument.projects.filter((_, index) =>
    retainedKeys.includes(EXPERIENCE_SECTIONS[0].projects[index].contentKey),
  );
  assert.deepEqual(document.projects.slice(0, 2), retainedProjects);
  assert.equal(document.projects.length, 7);
  assert.equal(document.projects.at(-1)?.title, 'Other projects');
  assert.ok(detailed.includes('load testing exposed race conditions'));

  const standalone = join(root, 'standalone');
  mkdirSync(standalone);
  copyFileSync(
    join(output, 'cv-goran-mrzljak-short.tex'),
    join(standalone, 'cv-goran-mrzljak-short.tex'),
  );
  execFileSync(
    'latexmk',
    [
      '-norc',
      '-pdf',
      '-interaction=nonstopmode',
      '-halt-on-error',
      '-no-shell-escape',
      'cv-goran-mrzljak-short.tex',
    ],
    { cwd: standalone, stdio: 'pipe' },
  );
  assert.ok(
    readFileSync(join(standalone, 'cv-goran-mrzljak-short.pdf'))
      .subarray(0, 5)
      .equals(Buffer.from('%PDF-')),
  );

  const destination = join(root, 'public');
  mkdirSync(destination);
  writeFileSync(join(destination, 'cv-goran-mrzljak-short.pdf'), 'previous PDF');
  writeFileSync(join(destination, 'cv-goran-mrzljak-short.tex'), 'previous TeX');
  const invalid = String.raw`\documentclass{article}\begin{document}\undefinedCommand\end{document}`;
  assert.throws(
    () =>
      buildCv(
        [
          { variant: 'concise', tex },
          { variant: 'detailed', tex: invalid },
        ],
        {
          workDirectory: root,
          publishDirectory: destination,
        },
      ),
    /CV compilation failed/,
  );
  assert.equal(
    readFileSync(join(destination, 'cv-goran-mrzljak-short.pdf'), 'utf8'),
    'previous PDF',
  );
  assert.equal(
    readFileSync(join(destination, 'cv-goran-mrzljak-short.tex'), 'utf8'),
    'previous TeX',
  );
  assert.deepEqual(readdirSync(destination).sort(), [
    'cv-goran-mrzljak-short.pdf',
    'cv-goran-mrzljak-short.tex',
  ]);
  assert.throws(
    () =>
      buildCv([{ variant: 'concise', tex }], {
        workDirectory: root,
        publishDirectory: destination,
        texOnly: true,
      }),
    /require successful PDF compilation/,
  );

  buildCv([{ variant: 'concise', tex }], { workDirectory: root, publishDirectory: destination });
  assert.deepEqual(readdirSync(destination).sort(), [
    'cv-goran-mrzljak-short.pdf',
    'cv-goran-mrzljak-short.tex',
  ]);
  assert.equal(readFileSync(join(destination, 'cv-goran-mrzljak-short.tex'), 'utf8'), tex);
  assert.ok(
    readFileSync(join(destination, 'cv-goran-mrzljak-short.pdf'))
      .subarray(0, 5)
      .equals(Buffer.from('%PDF-')),
  );
  const textOnly = buildCv([{ variant: 'detailed', tex: detailed }], {
    workDirectory: root,
    texOnly: true,
  });
  assert.deepEqual(readdirSync(textOnly), ['cv-goran-mrzljak-detailed.tex']);
  console.log(
    `CV verification passed: Unicode, escaping, years, selections, standalone TeX, failure preservation, publication, and TeX-only output. Artifacts: ${root}`,
  );
}
