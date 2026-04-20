import React from 'react';
import { Title } from '../reusable/Title';
import { SkillsOverviewMainSection } from '../reusable/SkillsOverviewMainSection';

interface MainSectionItem {
  readonly name: string;
  readonly subsections: readonly SubSectionItem[];
}

interface SubSectionItem {
  readonly name: string;
  readonly items: readonly string[];
}

const DATA: readonly MainSectionItem[] = [
  {
    name: 'Recent and Substantial Experience',
    subsections: [
      {
        name: 'Programming Languages:',
        items: [
          'Web Frontend Languages (JavaScript/HTML/CSS) and variations (SCSS etc.)',
          'TypeScript',
        ],
      },
      {
        name: 'Libraries, Frameworks, Platforms, Tools:',
        items: [
          'React',
          'Angular',
          'Node',
          'Express',
          'NestJS',
          'ESLint, Prettier',
          'NX (monorepo)',
          'RxJS',
          'Jest',
          'React Testing Library',
          'Webpack',
          'Storybook',
          'Redux, redux-observable',
          'Material-UI (UI component library for React)',
          'Zod (validation)',
          'NPM (obviously)',
          '...',
        ],
      },
      {
        name: 'Databases:',
        items: ['Mongo', 'PostreSQL'],
      },
      {
        name: 'CI/CD:',
        items: ['Github Actions', 'Heroku'],
      },
      {
        name: 'Source Control:',
        items: ['Git'],
      },
      {
        name: 'IDEs:',
        items: ['Webstorm', 'Intellij IDEA'],
      },
    ],
  },
  {
    name: 'Previous Experience',
    subsections: [
      {
        name: 'Programming Languages:',
        items: ['Kotlin', 'Java', 'C#', 'C++'],
      },
      {
        name: 'Libraries, Frameworks, Platforms, Tools:',
        items: [
          'Spring Boot',
          'JPA/Hibernate',
          'Liquibase',
          'Maven',
          'Vue',
          'Vuetify (UI component library for Vue)',
          'AngularJS',
          'JUnit',
          'ASP.NET Web Forms',
          'ASP.NET MVC',
          'WPF',
          'Windows Forms',
        ],
      },
      {
        name: 'Databases:',
        items: ['H2', 'SQLite', 'Microsoft SQL Server'],
      },
      {
        name: 'Source Control:',
        items: ['TFS', 'SVN', 'Jazz (IBM)'],
      },
      {
        name: 'IDEs:',
        items: ['Visual Studio', 'Eclipse'],
      },
    ],
  },
  {
    name: 'Limited Experience',
    subsections: [
      {
        name: 'Programming Languages:',
        items: ['Python', 'Ruby', 'F#', 'R', 'Octave'],
      },
      {
        name: 'Libraries, Frameworks, Platforms, Tools:',
        items: [
          'Cypress',
          'GraphQL',
          'Android SDK',
          'libGDX',
          'Docker',
          'Docker Swarm',
        ],
      },
      {
        name: 'Databases:',
        items: ['MySql', 'IBM Db2', 'Oracle'],
      },
      {
        name: 'CI/CD:',
        items: ['CircleCI'],
      },
      {
        name: 'IDEs:',
        items: [],
      },
      {
        name: '',
        items: ['Visual Studio Code'],
      },
    ],
  },
];

export function SkillsOverviewScreen(): React.ReactElement {
  return (
    <div>
      <Title>Skills Overview (Techs I Worked With)</Title>
      {DATA.map((item, index) => (
        <SkillsOverviewMainSection key={index} {...item} />
      ))}
    </div>
  );
}
