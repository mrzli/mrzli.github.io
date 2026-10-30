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
    paragraphs: ['For me, that was October 2026. Here is how I got to that point.'],
    subsections: [
      {
        title: 'By hand',
        paragraphs: [
          'For most of my career, every line of code was a conscious decision. I typed most of it by hand, with help from autocomplete, snippets, and code generators. I cared about clean, readable code and clear architecture, and when a codebase lacked both, I had to restructure it by hand.',
        ],
      },
      {
        title: 'AI autocomplete',
        paragraphs: [
          "Around 2023 or 2024, GitHub Copilot's suggestions started to help. Autocomplete was the extent of my AI use in development, but even that was useful.",
        ],
      },
      {
        title: 'Functions and tests',
        paragraphs: [
          'By the first half of 2025, I was using models to write self-contained functions and full unit test files. The code they produced was not always perfect, but it removed much of the tedium.',
        ],
      },
      {
        title: 'Directing an agent',
        paragraphs: [
          'Over the 2026 New Year holidays, I had a few days to experiment. The models and tools had improved a lot. With light effort over about ten days, I built a small application of about 3,000 lines, including tests. I guided the agent explicitly, telling it what to build and how, and it wrote the code. That was my first real wow moment.',
          'Back on client projects, agents could often fully resolve small, well-defined issues.',
        ],
      },
      {
        title: 'Learning to trust agents',
        paragraphs: [
          'In the summer of 2026, I started experimenting with Codex and newer models, GPT-5.6 Sol and later GPT-6 Astra. It took a few weeks to learn to let them work on their own and trust the result.',
          "By the end of the summer, I still worked one request at a time: ask, wait for the result, repeat. Working that way, Codex wrote all the code for this site's later features and improvements, a substantial share of the whole, and helped me structure its content.",
        ],
      },
      {
        title: 'Takeoff',
        paragraphs: [
          "In early October 2026, I tried Anthropic's Claude Opus 5.5, and from there things took off quickly. The model works remarkably well. At the same time, my process changed dramatically, in the feedback loop described below. Development has become incredibly fun: I say what I want and get it, and so far the only limit seems to be how fast I can think through features and architecture.",
          'My productivity has grown immensely, even compared with a month or two ago. The caveat is that this was on a personal project, free of the constraints, justified or otherwise, that come with client work.',
        ],
      },
      {
        title: 'What comes next',
        paragraphs: [
          'I have worked this new way for only a few weeks, and the excitement may fade. Still, it feels like I have only scratched the surface. There could be much more to gain from the process itself, not just from models and tools, which are bound to keep improving too. I am looking forward to finding out how far this goes.',
        ],
      },
    ],
    links: [],
  },
  {
    label: 'Workstation',
    title: 'A workstation defined as code',
    paragraphs: [
      'My workstation is the platform for everything else on this page. I define it as code in one repository, [Archon](https://github.com/mrzli/archon), and the machine follows it.',
    ],
    subsections: [
      {
        title: 'The problem',
        paragraphs: [
          'I used to hate setting up a computer. Reinstalling meant a long, tedious job of installing every tool and recreating every setting by hand, so formatting a drive felt like a nightmare. I also work on more than one computer at a time, and I wanted each of them set up the same way.',
        ],
      },
      {
        title: 'The system',
        paragraphs: [
          'I use [Omarchy](https://omarchy.org/), a ready-made Arch Linux setup built around the Hyprland window manager. Archon builds on it, adding the software and configuration I use and removing what I do not.',
        ],
      },
      {
        title: 'What Archon does for me',
        paragraphs: [
          'A new computer becomes my full workstation within minutes, and an update takes seconds. My code and data are online too, so a broken or lost computer costs me nothing important, and I can switch between machines freely.',
          'Every machine has the same tools and settings, including my [AI agent skills](https://github.com/mrzli/skills) and instructions. When I change how the agents work, every running agent session picks up the change at once.',
          'All my projects live in one place and stay in sync, and I can see at a glance where work is left unfinished. The projects I am working on open as workspaces, each with an editor, a Git client, a shell, and an AI agent ready.',
        ],
      },
    ],
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
        title: 'Working in parallel',
        paragraphs: [
          'I cannot truly multitask, but I can multiplex. I design the next feature with one agent while others implement what we already agreed, sometimes several changes at once.',
        ],
      },
      {
        title: 'A system, not ad hoc prompting',
        paragraphs: [
          'I maintain a public collection of over 30 [agent skills](https://github.com/mrzli/skills), reusable instructions an agent loads for one kind of task. They cover planning, implementation, code and architecture review, bug fixing, and implementing agreed work in the background while the discussion continues. Routing tests check that an agent picks the right skill for a request.',
        ],
      },
      {
        title: 'Instructions kept like code',
        paragraphs: [
          'My global agent rules are versioned in Git and installed with my workstation setup, so every project and machine uses the same rules. They define when an agent must ask for approval, how it reports its choices, that it ranks options by the quality of the result rather than the effort, and how it keeps Git history linear. They also shape how agents report back so that I can take in results quickly. For example, every question and option gets a short ID that I can answer in a word.',
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
