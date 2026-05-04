import type { FC } from 'react';

interface SubSection {
  readonly name: string;
  readonly items: readonly string[];
}

interface MainSection {
  readonly name: string;
  readonly subsections: readonly SubSection[];
}

const DATA: readonly MainSection[] = [
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
        items: ['Mongo', 'PostgreSQL'],
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
        items: ['Visual Studio Code'],
      },
    ],
  },
];

export const SkillsOverviewPage: FC = () => {
  return (
    <div>
      <h1 className='mt-6 mb-3 text-lg font-bold text-slate-800 uppercase dark:text-slate-200'>
        Skills
      </h1>
      {DATA.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mt-6'>
          <h2 className='my-2 font-bold text-pink-600 dark:text-pink-500'>
            {section.name}
          </h2>
          {section.subsections.map((sub, subIndex) => (
            <div key={subIndex} className='my-4'>
              {sub.name && <p className='my-2'>{sub.name}</p>}
              <ul className='ml-6 list-disc'>
                {sub.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
