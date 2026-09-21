export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  readonly website: string;
  readonly github: string;
  readonly linkedin: string;
  readonly stackOverflow: string;
  readonly lead: string;
  readonly summary: string;
  readonly additionalExperience: string;
  readonly ai: string;
  readonly availability: string;
  readonly services: string;
  readonly contracts: string;
}

export const PROFILE: Profile = {
  name: 'Goran Mržljak',
  title: 'Senior software developer',
  location: 'Zagreb, Croatia',
  email: 'goran.mrzljak@gmail.com',
  phone: '+385 91 224 3145',
  website: 'https://mrzli.github.io/',
  github: 'https://github.com/mrzli/repos',
  linkedin: 'https://www.linkedin.com/in/goran-mrzljak',
  stackOverflow: 'https://stackoverflow.com/users/520229/mrzli',
  lead: 'I build software and make complex codebases easier to work with.',
  summary:
    "Recently, I've worked mainly with React, TypeScript, and Node.js. I develop both frontend and backend, building applications from scratch and bringing them into production. I can also redesign and restructure complex existing systems. I favor clear architecture and readable code that makes systems easier to understand, maintain, and extend.",
  additionalExperience: 'My experience also includes desktop and mobile applications.',
  ai: 'I use AI coding agents regularly and for a growing range of tasks. The skills I developed before these tools existed complement them well. I can also work without AI assistance when required.',
  availability:
    "I'm looking for hands-on senior development work: frontend, backend, or full-stack.",
  services:
    'I work independently or within established teams. I design application architecture, help clarify requirements, mentor and onboard developers, and conduct developer interviews.',
  contracts:
    'B2B contracts for full-time, part-time, or fixed-price work. Remote, with hybrid work possible in Zagreb, Croatia.',
};

export const EXPERIENCE_START_YEARS = {
  professional: 2008,
  contracting: 2016,
} as const;
