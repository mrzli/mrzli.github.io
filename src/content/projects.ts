import { PROFILE } from './profile';
import type { PersonalProject } from './types';

export const PROJECT_ITEMS: readonly PersonalProject[] = [
  {
    title: 'Archon',
    text: [
      'My development workstation, defined as code. A fresh machine reaches my full setup within minutes, and one idempotent setup script keeps every machine I work on identical.',
      'It sets up my AI agents the same way everywhere too: the same skills and global instructions, applied to every running agent session with one command.',
    ],
    roleText: [
      'The idea, the design, and every decision are mine, drawn from years of setting up machines by hand. AI agents wrote almost all of the code under my direction, including the archon command-line program. It syncs all my repositories, opens project workspaces with an editor, Git client, shell, and AI agent ready, and gains a command whenever I notice a task I repeat.',
    ],
    tags: ['Ruby', 'Bash', 'Arch Linux', 'Omarchy', 'Hyprland', 'Claude Code', 'Codex'],
    links: [{ label: 'Source Code', href: 'https://github.com/mrzli/archon' }],
  },
  {
    title: 'Agent Skills',
    text: [
      'The skills I use every day to direct AI coding agents. They take a feature from shaping through design, implementation, review, and release, and each one names the skill to use next.',
      'They let me keep discussing the next work item while background agents implement the agreed ones, and branch a hard question into its own session without losing the main thread.',
    ],
    roleText: [
      'I decide how I want to work and what each skill must do. AI agents write and revise the skills under my direction. They also review my sessions and the collection and propose improvements, and I choose which to adopt. Routing tests check that an agent picks the right skill for a request.',
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
