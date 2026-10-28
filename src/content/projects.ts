import { PROFILE } from './profile';
import type { PersonalProject } from './types';

export const PROJECT_ITEMS: readonly PersonalProject[] = [
  {
    title: 'Archon',
    text: [
      'A new computer becomes my full development setup in minutes, and every Omarchy machine I use stays identical, including my AI agent configuration.',
      "One command keeps all my projects in sync. Another opens the ones I'm working on as workspaces, each with an editor, terminal, and AI agent ready.",
    ],
    roleText: [
      'I guide its development, and AI agents implement it. Each change starts from something I need or something that gets in my way.',
    ],
    tags: ['Ruby', 'Bash', 'Arch Linux', 'Omarchy', 'Hyprland', 'Claude Code', 'Codex'],
    links: [{ label: 'Source Code', href: 'https://github.com/mrzli/archon' }],
  },
  {
    title: 'Agent Skills',
    text: [
      'Implementation runs in parallel in the background while I keep working. Once I agree on a change, an agent builds, verifies, and commits it on its own, and I move straight on to the next decision.',
      'Conversations stay on one thread. A side question splits off into its own session and comes back as a short summary of what was decided, and work for another repository goes there as a handoff.',
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
