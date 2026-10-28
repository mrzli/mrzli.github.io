import type { LinkItem } from '@/content/types';

export interface WorkPracticeTopic {
  readonly title: string;
  readonly text: string;
}

export const AGENTIC_DEVELOPMENT_INTRO =
  'I build software by directing AI coding agents, mainly Claude Code, through the whole cycle: clarifying requirements, design, planning, implementation, and review. I make the decisions and judge the results.';

export const AGENTIC_DEVELOPMENT_TOPICS: readonly WorkPracticeTopic[] = [
  {
    title: 'What I keep for myself',
    text: 'I own the requirements, architecture, naming, and scope, and I decide whether a result is good enough. Agents propose and implement. I approve or reject their proposals, have them report every choice they made beyond what I approved, and correct their mistakes.',
  },
  {
    title: 'A system, not ad hoc prompting',
    text: 'I maintain a public collection of over 30 agent skills, reusable instructions an agent loads for one kind of task. They cover planning, implementation, code and architecture review, bug fixing, and implementing agreed work in the background while the discussion continues. Routing tests check that an agent picks the right skill for a request.',
  },
  {
    title: 'Instructions kept like code',
    text: 'My global agent rules are versioned in Git and installed with my workstation setup, so every project and machine uses the same rules. They define when an agent must ask for approval, how it reports its choices, that it ranks options by the quality of the result rather than the effort, and how it keeps Git history linear.',
  },
  {
    title: 'Quality controls',
    text: 'Each project states which checks each kind of change requires. I review changes before they are merged, check user interface changes in a real browser, and keep each self-contained change in its own commit.',
  },
  {
    title: 'Improving the process',
    text: 'After finishing work, I look at where it went wrong or slowed down, such as recurring agent mistakes or weak verification, and adjust the skills and rules to match.',
  },
  {
    title: 'What this means for clients',
    text: 'My architecture and code standards are the same as before. More of my time goes to requirements, design, and review.',
  },
];

export const AGENTIC_DEVELOPMENT_LINKS: readonly LinkItem[] = [
  {
    href: 'https://github.com/mrzli/skills',
    label: 'Agent skills on GitHub',
  },
  {
    href: 'https://github.com/mrzli/archon',
    label: 'Workstation setup and agent rules on GitHub',
  },
];
