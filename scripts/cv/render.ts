import { readFileSync } from 'node:fs';

import type { CvDocument, CvProject, CvVariant } from '../../src/content/exports/types';
import type { DateRangeBound, ExperienceEntry } from '../../src/content/types';

export function renderCv(document: CvDocument): string {
  const { profile, contracting } = document;
  const contact = [
    escapeLatex(profile.location),
    link(`tel:${profile.phone.replaceAll(' ', '')}`, profile.phone),
    link(`mailto:${profile.email}`, profile.email),
  ].join(String.raw` \enspace $\cdot$\enspace `);
  const links = [
    { label: 'Personal website', href: profile.website },
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    {
      label: 'Short CV',
      href: new URL('data/cv-goran-mrzljak-short.pdf', profile.website).href,
    },
    {
      label: 'Detailed CV',
      href: new URL('data/cv-goran-mrzljak-detailed.pdf', profile.website).href,
    },
  ];
  const body = [
    ...(document.variant === 'concise'
      ? [String.raw`\setlength{\parskip}{4pt}`]
      : [DETAILED_PAGINATION]),
    String.raw`\begin{center}`,
    String.raw`{\LARGE\bfseries ${escapeLatex(profile.name)}}\par`,
    String.raw`\smallskip{\large ${escapeLatex(profile.title)}}\par`,
    String.raw`\medskip ${contact}\par`,
    String.raw`\end{center}`,
    String.raw`\cvsection{Profile}`,
    ...document.summary.map(paragraph),
    String.raw`\profilepoints{${[
      document.variant === 'detailed'
        ? profile.availability
        : `${document.professionalYears} years of professional experience. ${document.contractingYears} years of contract work.`,
      document.ai,
      document.contracts,
    ]
      .map(escapeLatex)
      .join(String.raw`\par `)}}`,
    String.raw`\cvsection{Links}`,
    String.raw`\begin{tabular}{@{}l@{\hspace{1em}}l@{}}`,
    ...links.map(
      (item) => String.raw`${escapeLatex(item.label)} & ${link(item.href, item.href)} \\`,
    ),
    String.raw`\end{tabular}\par`,
    String.raw`\cvsection{Work experience}`,
    employer(contracting, 'Independent contractor', profile.title),
    ...document.projects.map((project) => renderProject(project, contracting, document.variant)),
    ...document.earlierExperience.flatMap((entry) => [
      String.raw`\employerseparator`,
      employer(entry.employment, entry.title, entry.employment.role),
      ...entry.text.map(paragraph),
      ...entry.projects.map((project) =>
        renderProject(project, entry.employment, document.variant),
      ),
    ]),
    String.raw`\cvsection{Education}`,
    String.raw`\textbf{${escapeLatex(document.education.institution)}}\par`,
    ...(document.variant === 'concise'
      ? [paragraph([document.education.qualification, ...document.educationHighlights].join('. '))]
      : [
          paragraph(`${document.education.qualification}. ${document.educationHighlights[0]}`),
          ...document.educationHighlights.slice(1).map(paragraph),
        ]),
    ...(document.thesisLinks.length
      ? [
          document.thesisLinks
            .map((item) => link(item.href, item.label))
            .join(String.raw` \enspace $\cdot$\enspace `),
          String.raw`\par`,
        ]
      : []),
    ...(document.languages.length
      ? [String.raw`\textbf{Languages}: ${escapeLatex(document.languages.join(' · '))}\par`]
      : []),
    ...(document.skills.length
      ? [
          String.raw`\cvsection{Skills}\begingroup\setlength{\parskip}{\smallskipamount}`,
          ...document.skills.flatMap((section) => [
            String.raw`\par\addvspace{\medskipamount}\textbf{${escapeLatex(section.title)}}\par\nopagebreak`,
            ...section.groups.map(
              (group) =>
                String.raw`\textit{${escapeLatex(group.title)}}: ${escapeLatex(group.skills.join(', '))}\par`,
            ),
          ]),
          String.raw`\endgroup`,
        ]
      : []),
  ].join('\n');
  return readFileSync(new URL('./template.tex', import.meta.url), 'utf8')
    .replace('%%AUTHOR%%', () => escapeLatex(profile.name))
    .replace('%%BODY%%', () => body);
}

function link(url: string, label: string): string {
  const encoded = url.replace(/[\\{}\s]/g, (character) => encodeURIComponent(character));
  return String.raw`\href{${encoded.replaceAll('%', '\\%').replaceAll('#', '\\#')}}{${escapeLatex(label)}}`;
}

function paragraph(text: string): string {
  return `${escapeLatex(text)}\\par`;
}

function bulletList(items: readonly string[]): string {
  if (items.length === 0) {
    return '';
  }
  return [
    String.raw`\begin{points}`,
    ...items.map((item) => String.raw`\item ${escapeLatex(item)}`),
    String.raw`\end{points}`,
  ].join('\n');
}

function employer(entry: ExperienceEntry, title: string, role: string): string {
  return String.raw`\employer{${escapeLatex(title)}}{${dateRange(entry)}}{${escapeLatex(role)}}{${escapeLatex(entry.location)}}`;
}

function dateRange(entry: ExperienceEntry): string {
  return `${escapeLatex(formatDate(entry.from))} -- ${escapeLatex(formatDate(entry.to))}`;
}

function renderProject(
  project: CvProject,
  contracting: ExperienceEntry,
  variant: CvVariant,
): string {
  return [
    ...(project.startContinuationPage
      ? [
          String.raw`\newpage\cvsection{Work experience continued}`,
          employer(contracting, 'Independent contractor', contracting.role),
        ]
      : []),
    String.raw`\project{${escapeLatex(project.title)}}{${escapeLatex(project.technologies.join(' · '))}}`,
    ...project.context.map(paragraph),
    ...(variant === 'detailed' && project.contributions.length > 0
      ? [
          String.raw`\begin{contribution}`,
          ...project.contributions.map((text, index) =>
            index < project.contributions.length - 1
              ? String.raw`${escapeLatex(text)}\rule[-\dimexpr\dp\strutbox+\smallskipamount+1pt\relax]{0pt}{\smallskipamount}\tabularnewline`
              : String.raw`\multicolumn{1}{@{}l@{}}{\borderedlast{${escapeLatex(text)}}}\tabularnewline`,
          ),
          String.raw`\end{contribution}`,
        ]
      : [bulletList(project.contributions)]),
  ].join('\n');
}

export function formatDate(date: DateRangeBound): string {
  if (date === 'Present') {
    return date;
  }
  if (!Number.isInteger(date.month) || date.month < 1 || date.month > 12) {
    throw new Error(`Invalid month: ${date.month}`);
  }
  return `${MONTH_NAMES[date.month - 1]} ${date.year}`;
}

export function escapeLatex(text: string): string {
  return text.replace(/[\\{}$&#%_^~]/g, (character) => LATEX_ESCAPES[character]);
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const LATEX_ESCAPES: Readonly<Record<string, string>> = {
  '\\': String.raw`\textbackslash{}`,
  '{': String.raw`\{`,
  '}': String.raw`\}`,
  $: String.raw`\$`,
  '&': String.raw`\&`,
  '#': String.raw`\#`,
  '%': String.raw`\%`,
  _: String.raw`\_`,
  '^': String.raw`\textasciicircum{}`,
  '~': String.raw`\textasciitilde{}`,
};

const DETAILED_PAGINATION = String.raw`
\setlength{\emergencystretch}{2em}
\newcommand{\cvneedspace}[1]{\par\begingroup\dimen0=\pagegoal\advance\dimen0 by -\pagetotal\ifdim\dimen0<#1\newpage\fi\endgroup}
\let\cvsectionoriginal\cvsection
\renewcommand{\cvsection}[1]{\cvneedspace{6\baselineskip}\cvsectionoriginal{#1}}
\let\employeroriginal\employer
\renewcommand{\employer}[4]{\cvneedspace{9\baselineskip}\employeroriginal{#1}{#2}{#3}{#4}}
\let\employerseparatororiginal\employerseparator
\renewcommand{\employerseparator}{\cvneedspace{11\baselineskip}\employerseparatororiginal}
\let\projectoriginal\project
\renewcommand{\project}[2]{\cvneedspace{7\baselineskip}\projectoriginal{#1}{#2}}
\let\contributionoriginal\contribution
\renewcommand{\contribution}{\cvneedspace{5\baselineskip}\contributionoriginal}
`;
