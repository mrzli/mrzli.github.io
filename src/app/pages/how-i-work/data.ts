import type { LinkItem } from '@/content/types';

export interface WorkSection {
  readonly label: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly topics: readonly WorkTopic[];
  readonly links: readonly LinkItem[];
}

export interface WorkTopic {
  readonly title: string;
  readonly text: string;
}

export const WORK_SECTIONS: readonly WorkSection[] = [
  {
    label: 'Transition',
    title: 'The month everything changed',
    paragraphs: [
      'For me, that was October 2026.',
      "For most of my career, every character of source code I wrote was a deterministic, conscious decision. Much of it I typed directly by hand. Some parts I produced with the help of tooling - autocomplete, code snippets or code generators. I cared about clean, readable code and clear architecture, and when the code base that did not fit that description and I was able to improve it, I had to do that completely manually.",
      "Sometime during 2023 or 2024, GitHub Copilot's suggestions started to help. At that point, pressing tabs to autocomplete lines and code sections was the limit of my AI usage in software development. Still, even just that was useful.",
      // "During the first half of 2025, I mostly",
      "By 2025, it could write a whole function or a test file in one go. Over the 2025 winter break, with better models, I built a small application of about 3,000 lines with tests, deciding what it should do and how while the agent wrote the code. Back at work, I could often hand an agent an issue and have it solved. In the summer of 2026, I started giving tasks to Codex, and in September, GPT-6 Astra took over most of the tedious work, including much of the work on this website.",
      'Then, in October, I started using Claude Opus 5.5 in Claude Code, and I have written almost no code by hand since. My time goes to deciding what to build, making the architectural decisions, guiding the agents, and improving how they work.',
      'It keeps changing from week to week, so this page describes where it stands at the moment.',
    ],
    topics: [],
    links: [],
  },
  {
    label: 'Workstation',
    title: 'A workstation defined as code',
    paragraphs: [
      'I used to hate setting up a computer. Reinstalling meant a long, tedious job of installing every tool and recreating every setting by hand, so formatting a drive felt like a nightmare. I wanted that to be painless.',
      'Now my whole workstation is defined in one repository, Archon, and the machine follows it. One setup script brings a new Omarchy machine to my full setup within minutes, and an update takes seconds. My code and data are online too, so a broken or lost computer costs me nothing important, and I switch between machines freely.',
      'Every change to how I work starts there, from the software I install to the skills and instructions my AI agents use, so every machine works the same way.',
    ],
    topics: [],
    links: [
      {
        href: 'https://github.com/mrzli/archon',
        label: 'Archon on GitHub',
      },
    ],
  },
  {
    label: 'Agentic Development',
    title: 'How I direct AI coding agents',
    paragraphs: [
      'I build software by directing AI coding agents, mainly Claude Code, through the whole cycle: clarifying requirements, design, planning, implementation, and review. I make the decisions and judge the results.',
    ],
    topics: [
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
        text: 'After finishing work, I look at where it went wrong or slowed down, such as recurring agent mistakes or weak verification, and adjust the skills and rules to match. Each improvement makes the next one easier. Better skills make the agents work better, a better project workflow makes changes faster and verification cheaper, and a better architecture makes new features easier to add.',
      },
      {
        title: 'What this means for clients',
        text: 'My architecture and code standards are the same as before. More of my time goes to requirements, design, and review.',
      },
    ],
    links: [
      {
        href: 'https://github.com/mrzli/skills',
        label: 'Agent skills on GitHub',
      },
    ],
  },
];
