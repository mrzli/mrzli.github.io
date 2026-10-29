import type { LinkItem } from '@/content/types';

export interface WorkSection {
  readonly label: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly subsections: readonly WorkSubsection[];
  readonly links: readonly LinkItem[];
}

export interface WorkSubsection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export const WORK_SECTIONS: readonly WorkSection[] = [
  {
    label: 'Transition',
    title: 'The month everything changed',
    paragraphs: [
      'For me at least, that was October 2026.',
      'But a few steps came before that.',
      'Compared to some, I am a late adopter - below is my personal timeline.',
    ],
    subsections: [
      {
        title: 'The old days',
        paragraphs: [
          'For most of my career, every character of source code I wrote was a deterministic, conscious decision. Much of it I typed directly by hand. Some parts I produced with the help of tooling - autocomplete, code snippets or code generators.',
          'I cared about clean, readable code and clear architecture, and when the code base that did not fit that description and I was able to improve it, I had to do that completely manually.',
        ],
      },
      {
        title: 'AI autocomplete',
        paragraphs: [
          "Sometime during 2023 or 2024, GitHub Copilot's suggestions started to help. At that point, pressing tabs to autocomplete lines and code sections was the limit of my AI usage in software development. Still, even just that was useful.",
        ],
      },
      {
        title: 'Functions and tests',
        paragraphs: [
          "During the first half of 2025, the most advanced use I got from the models is for them to write self-contained functions, whether it's something general such binary search, or something domain specific but still pure.",
          'They were also good at writing full unit test files for such function, though not perfect. Still they performed well enough to remove a lot of tedium from that task.',
        ],
      },
      {
        title: 'Agentic era begins',
        paragraphs: [
          'The next clear step up for me can during the 2026 new year when I had a few days of to experiment. The models and tooling were much better.',
          'I used them to built a small application of about 3,000 lines with tests. The effort was light and most of it was spread up over 10 days or so. I guided the models directly, deciding what they should do and how while the agent wrote the code.',
          'Back on paid projects, I could hand an agent an issue and have it solved much of the time.',
        ],
      },
      {
        title: 'Experimentation and awe',
        paragraphs: [
          'In the summer of 2026, I started expriementing with Codex, and the newer models, such as 5.6 Sol and later Astra. I was not focused on this work, so it took a couple of weeks for me to start trusting it to do the work, but by the end of summer I was very impressed with what the models could do.',
          'By the end, my flow was to ask it to do something, wait for the result, then repeat. Still sequential, but very powerful. In the end, it helped me finish this site, and at that point it did all the coding for me, and helped me structure and write the content, although that part is still mine.',
        ],
      },
      {
        title: 'The singularity',
        paragraphs: [
          'Well kind of. It would be closer to the truth if I were not the limiting factor.',
          'In early October 2026 I decided to try out the new Anthropic models, Opus 5.5. And it works spectacularly well.',
          "It is not just the model, my process has improved dramatically, in what is apparently a positive-feedback loop. I still can't truly multitask, but I can multiplex my work, design features while the models implement what was agreed, potentially in parallel.",
          'I can guide the models with structure, rules, verfications, learn how I can best consume the information it returns to me and instruct it to facilitate that.',
          'Development became increadibly fun this last month. I can essentially say what I want and get it. The limit is how fast I can think about features and architecture (which I still partially design).',
          'The apparent productivity increase has been immense, even compared to just a month or two ago, but I would like to caveat that claim with the fact that my recent experimentation was done on a personal project, without the justified and unjustified limitations one usually has when working for clients, especially the inert kind.',
        ],
      },
      {
        title: 'The future',
        paragraphs: [
          'I have been in the latest era of agent-assisted development for just a few weeks. The exuberance may fade as I adjust to it, but the feeling is that of having just touched the surface of what is possible.',
          "There seems to still be much to gain in the individual process alone, so even if model and tooling development completely stopped, my impression is that we are far from the limit. Let's see how this plays out.",
        ],
      },
    ],
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
    subsections: [],
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
    subsections: [
      {
        title: 'What I keep for myself',
        paragraphs: [
          'I own the requirements, architecture, naming, and scope, and I decide whether a result is good enough. Agents propose and implement. I approve or reject their proposals, have them report every choice they made beyond what I approved, and correct their mistakes.',
        ],
      },
      {
        title: 'A system, not ad hoc prompting',
        paragraphs: [
          'I maintain a public collection of over 30 agent skills, reusable instructions an agent loads for one kind of task. They cover planning, implementation, code and architecture review, bug fixing, and implementing agreed work in the background while the discussion continues. Routing tests check that an agent picks the right skill for a request.',
        ],
      },
      {
        title: 'Instructions kept like code',
        paragraphs: [
          'My global agent rules are versioned in Git and installed with my workstation setup, so every project and machine uses the same rules. They define when an agent must ask for approval, how it reports its choices, that it ranks options by the quality of the result rather than the effort, and how it keeps Git history linear.',
        ],
      },
      {
        title: 'Quality controls',
        paragraphs: [
          'Each project states which checks each kind of change requires. I review changes before they are merged, check user interface changes in a real browser, and keep each self-contained change in its own commit.',
        ],
      },
      {
        title: 'Improving the process',
        paragraphs: [
          'After finishing work, I look at where it went wrong or slowed down, such as recurring agent mistakes or weak verification, and adjust the skills and rules to match. Each improvement makes the next one easier. Better skills make the agents work better, a better project workflow makes changes faster and verification cheaper, and a better architecture makes new features easier to add.',
        ],
      },
      {
        title: 'What this means for clients',
        paragraphs: [
          'My architecture and code standards are the same as before. More of my time goes to requirements, design, and review.',
        ],
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
