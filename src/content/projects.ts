import { PROFILE } from './profile';
import type { PersonalProject } from './types';

export const PROJECT_ITEMS: readonly PersonalProject[] = [
  {
    title: 'Archon',
    text: [
      'This project converts a raw Omarchy installation to my full development setup in minutes, including my AI agent configuration.',
      'It sets up a CLI tool with commands for many useful purposes, such as cloning and updating all of my projects at once, and opening up selected projects as workspaces laid out for agentic work.',
    ],
    roleText: [
      'I say what I want, and AI agents implement it. Each change starts from something I need or something that gets in my way.',
    ],
    tags: ['Ruby', 'Bash', 'Arch Linux', 'Omarchy', 'Hyprland', 'Claude Code', 'Codex'],
    links: [{ label: 'Source Code', href: 'https://github.com/mrzli/archon' }],
  },
  {
    title: 'Agent Skills',
    text: [
      'Skills that guide AI coding agents through engineering work, from clarifying a feature through design, implementation, and review.',
      'Common flow is to run work in parallel in the background. I queue an agreed change, and an agent implements and verifies it on its own branch and worktree, then rebases it onto the main branch, so it arrives finished while I keep working.',
      'Complex discussions can be branched into a tree of sessions. I can dig deep into one topic, or explore several at different levels, without losing the main thread, and every decision flows back into it.',
    ],
    roleText: [
      'Some skills started from public collections and were adapted to how I work. Others I asked for explicitly, by explaining a problem I kept running into.',
      'AI agents write the skills, and refining them is partly automatic: agents review my sessions and propose improvements, which often make sense. I steer that process and make decisions when required.',
    ],
    tags: ['Claude Code', 'Codex', 'Markdown', 'Bash'],
    links: [{ label: 'Source Code', href: 'https://github.com/mrzli/skills' }],
  },
  {
    title: 'Personal website',
    text: ['This website presents my professional experience, skills, projects, and background.'],
    roleText: [
      'I built the entire site. It is static, with content stored in TypeScript data files and React components.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Bun',
      'Oxlint',
      'Oxfmt',
      'Storybook',
      'Codex',
      'Claude Code',
    ],
    links: [
      {
        label: 'Site',
        href: PROFILE.website,
      },
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli/mrzli.github.io',
      },
    ],
  },
  {
    title: 'Symbol Jump',
    text: ['A complete, fully featured clone of Doodle Jump.'],
    roleText: [
      'I wrote all the code and created the simple black-and-white graphics.',
      'I also built a global score service on a VPS, accessed by the game through asynchronous HTTP calls. The server is no longer active.',
    ],
    tags: [
      'Java',
      'libGDX',
      'Android SDK',
      'Facebook SDK for Android',
      'Sinatra (Ruby)',
      'Apache',
      'MySQL',
    ],
    links: [{ label: 'Source Code', href: 'https://github.com/mrzli-other/tria' }],
  },
  {
    title: 'Hell Hopper',
    text: ['A simpler predecessor to Symbol Jump.'],
    roleText: ['I wrote all the code and created all the graphics.'],
    tags: ['Java', 'libGDX', 'Android SDK'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli-other/hellhopper',
      },
    ],
  },
  {
    title: 'Suchy Blocks',
    text: ['A Tetris clone for Android and desktop.'],
    roleText: ['I wrote all the code and created all the graphics.'],
    tags: ['Java', 'libGDX', 'Android SDK'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/mrzli-other/suchyblocks',
      },
    ],
  },
];
