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
          "In early October 2026, I tried Anthropic's Claude Opus 5.5, and from there things took off quickly. The model works remarkably well. At the same time, my process changed dramatically. Development has become incredibly fun: I say what I want and get it, and so far the only limit seems to be how fast I can think through features and architecture.",
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
      'I would rather solve a problem properly once than keep dealing with it again and again. Setting up and maintaining computers was one of those problems, so I define my whole workstation as code, in a repository called [Archon](https://github.com/mrzli/archon) that builds on the base [Omarchy](https://omarchy.org/) system.',
    ],
    subsections: [
      {
        title: 'The problem',
        paragraphs: [
          'I used to hate setting up a computer. Reinstalling meant installing every tool and recreating every setting by hand, which was long and annoying.',
          'I also did not want a broken or lost computer to cost me data, or the time to set everything up again. Such events are rare, but disruptive.',
          'Additionally, I work on more than one computer at a time, so I wanted each of them set up the same way.',
        ],
      },
      {
        title: 'The system',
        paragraphs: [
          'I use Omarchy, a ready-made Arch Linux setup built around the Hyprland window manager. Linux gives me complete flexibility, and Omarchy is modern, looks and feels great, and comes set up close to how I want to work, so I get everything I need with little effort. It is a perfect fit for me. Archon builds on it, adding the software and configuration I use and removing what I do not.',
        ],
      },
      {
        title: 'What Archon does for me',
        paragraphs: [
          'A new computer becomes my development workstation with one setup run. The initial setup usually takes a few minutes to download and install everything, and any later setup usually takes seconds. My whole setup is in Archon, and my code and data are stored remotely or can be regenerated, so if a computer fails, I lose nothing I cannot replace. I can also switch between machines freely.',
          'Every machine has the same tools and settings, including my [AI agent skills](https://github.com/mrzli/skills) and instructions. When I change how the agents work, every running agent session picks up the change at once.',
          'All my projects live in one place and stay in sync, and I can see at a glance where work is left unfinished. I keep my secrets, such as API tokens, in one place and sync them to all my projects with one command.',
          'One command opens the projects I am working on as workspaces, each with an editor, a Git client, a shell, and an AI agent ready.',
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
];
