import type { SkillsSectionProps } from './components';

export const SKILLS_SECTIONS: readonly SkillsSectionProps[] = [
  {
    title: 'Extensive and Recent Experience',
    groups: [
      {
        title: 'Programming Languages',
        skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Libraries and Frameworks',
        skills: [
          'React',
          'Angular',
          'Express',
          'NestJS',
          'Tailwind CSS',
          'Class Variance Authority',
          'Shadcn/UI',
          'MUI',
          'Ant Design',
          'Redux',
          'redux-observable',
          'React Hook Form',
          'Zod',
          'RxJS',
        ],
      },
      {
        title: 'Platforms',
        skills: ['Node.js', 'Bun'],
      },
      {
        title: 'Tools',
        skills: [
          'ESLint',
          'Prettier',
          'Vite',
          'Webpack',
          'Jest',
          'Vitest',
          'Storybook',
          'Docker',
          'Bash',
          'npm',
          'pnpm',
          'Bun Package Manager',
        ],
      },
      {
        title: 'Databases',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
      },
      {
        title: 'CI/CD',
        skills: ['GitHub Actions'],
      },
      {
        title: 'Source Control',
        skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      },
      {
        title: 'IDE',
        skills: ['Visual Studio Code', 'WebStorm', 'IntelliJ IDEA'],
      },
      {
        title: 'AI',
        skills: ['GPT-5.x', 'Claude Sonnet 4.x', 'Copilot'],
      },
      {
        title: 'Operating Systems',
        skills: ['Windows', 'macOS', 'Linux'],
      },
    ],
  },
  {
    title: 'Extensive Experience, Not Recent',
    groups: [
      {
        title: 'Programming Languages',
        skills: ['Kotlin', 'Java', 'C#', 'C++'],
      },
      {
        title: 'Libraries and Frameworks',
        skills: [
          'Spring Boot',
          'JPA/Hibernate',
          'Liquibase',
          'Vue',
          'Vuetify',
          'AngularJS',
          'ASP.NET MVC',
          'ASP.NET Web Forms',
          'WPF',
          'Windows Forms',
        ],
      },
      {
        title: 'Platforms',
        skills: ['JVM', '.NET Framework'],
      },
      {
        title: 'Tools',
        skills: [
          'React Testing Library',
          'Nx (monorepo)',
          'Prisma',
          'Maven',
          'JUnit',
        ],
      },
      {
        title: 'Databases',
        skills: ['H2', 'SQLite', 'Microsoft SQL Server'],
      },
      {
        title: 'Source Control',
        skills: ['TFS (Microsoft)', 'SVN', 'Jazz (IBM)'],
      },
      {
        title: 'IDE',
        skills: ['Visual Studio', 'Eclipse'],
      },
    ],
  },
  {
    title: 'Limited Experience',
    groups: [
      {
        title: 'Programming Languages',
        skills: [
          'Ruby',
          'Python',
          'Racket',
          'F#',
          'R',
          'Octave',
          'Fantom (JVM)',
        ],
      },
      {
        title: 'Libraries and Frameworks',
        skills: [
          'Android SDK',
          'libGDX (game engine)',
          'Ruby on Rails',
          'Sinatra',
          'GraphQL',
        ],
      },
      {
        title: 'Tools',
        skills: ['Playwright', 'Cypress'],
      },
      {
        title: 'Databases',
        skills: ['IBM DB2', 'Oracle Database'],
      },
      {
        title: 'CI/CD',
        skills: ['CircleCI', 'Docker Swarm'],
      },
    ],
  },
];
