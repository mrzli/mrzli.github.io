import { readFileSync } from 'node:fs';

import type { CvDocument, CvProject } from '../../src/content/exports/types';
import type { DateRangeBound, ExperienceEntry } from '../../src/content/types';

export function renderCv(document: CvDocument): string {
  const { profile, contracting } = document;
  const contact = [
    escapeLatex(profile.location),
    link(`tel:${profile.phone.replaceAll(' ', '')}`, profile.phone),
    link(`mailto:${profile.email}`, profile.email),
  ].join(String.raw` \enspace $\cdot$\enspace `);
  const links = [
    link(profile.website, profile.website.replace(/^https?:\/\//, '').replace(/\/$/, '')),
    link(profile.github, 'GitHub'),
    link(profile.linkedin, 'LinkedIn'),
  ].join(String.raw` \enspace $\cdot$\enspace `);
  const body = [
    ...(document.variant === 'concise'
      ? [String.raw`\setlength{\parskip}{4pt}`]
      : [DETAILED_PAGINATION]),
    String.raw`\begin{center}`,
    String.raw`{\LARGE\bfseries ${escapeLatex(profile.name)}}\par`,
    String.raw`\vspace{2pt}{\large ${escapeLatex(profile.title)}}\par`,
    String.raw`\vspace{5pt}${contact}\par`,
    links,
    String.raw`\end{center}`,
    String.raw`\cvsection{Profile}`,
    ...document.summary.map(paragraph),
    bulletList([
      `${document.professionalYears} years of professional experience. ${document.contractingYears} years of contract work.`,
      document.ai,
      document.contracts,
    ]),
    String.raw`\cvsection{Core technologies}`,
    String.raw`\textbf{Development}\enspace ${escapeLatex(document.technologies.join(', '))}\par`,
    String.raw`\textbf{Tools}\enspace ${escapeLatex(document.tools.join(', '))}\par`,
    String.raw`\cvsection{Work experience}`,
    employer(contracting, 'Independent contractor', profile.title),
    ...document.projects.map((project) => renderProject(project, contracting)),
    ...(document.variant === 'detailed' ? [String.raw`\newpage`] : []),
    String.raw`\cvsection{Earlier employment}`,
    ...document.earlierExperience.flatMap((entry) => [
      employer(entry.employment, entry.title, entry.employment.role),
      ...entry.text.map(paragraph),
      ...entry.projects.map((project) => renderProject(project, entry.employment)),
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
          String.raw`\cvsection{Skills}\begingroup\setlength{\parskip}{2pt}`,
          ...document.skills.flatMap((section) => [
            String.raw`\par\addvspace{9pt}\textbf{${escapeLatex(section.title)}}\par\nopagebreak`,
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

function renderProject(project: CvProject, contracting: ExperienceEntry): string {
  return [
    ...(project.startContinuationPage
      ? [
          String.raw`\newpage\cvsection{Work experience continued}`,
          String.raw`\textbf{Independent contractor}\hfill ${dateRange(contracting)}\par`,
        ]
      : []),
    String.raw`\project{${escapeLatex(project.title)}}{${escapeLatex(project.technologies.join(', '))}}`,
    ...project.context.map(paragraph),
    bulletList(project.contributions),
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
\let\projectoriginal\project
\renewcommand{\project}[2]{\cvneedspace{7\baselineskip}\projectoriginal{#1}{#2}}
`;
