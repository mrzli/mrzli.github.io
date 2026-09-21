import { TAG_CARD_DATA, THESIS_LINKS } from '../background';
import type { ExperienceProjectKey } from '../experience-keys';
import { PROFILE } from '../profile';
import { SKILLS_SECTIONS } from '../skills';
import type { DetailedProject } from './types';

const SELECTED_SKILLS = new Set([
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Angular',
  'Express',
  'NestJS',
  'Tailwind CSS',
  'Material UI',
  'Redux',
  'MobX',
  'RxJS',
  'NgRx',
  'Node.js',
  'Bun',
  'ESLint',
  'Prettier',
  'Vite',
  'Webpack',
  'Jest',
  'Vitest',
  'Storybook',
  'Docker',
  'Bash',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'GitHub Actions',
  'Codex CLI',
  'Copilot',
  'Windows',
  'macOS',
  'Linux',
  'Kotlin',
  'Java',
  'C#',
  'C++',
  'Spring Boot',
  'JPA/Hibernate',
  'Liquibase',
  'Vue',
  'AngularJS',
  'ASP.NET MVC',
  'ASP.NET Web Forms',
  'WPF',
  'Windows Forms',
  'JVM',
  '.NET Framework',
  'React Testing Library',
  'Mocha',
  'Nx (monorepo)',
  'Prisma',
  'Maven',
  'JUnit',
  'H2',
  'SQLite',
  'Microsoft SQL Server',
  'Ruby',
  'Python',
  'GraphQL',
  'Android SDK',
  'Playwright',
  'Cypress',
  'IBM DB2',
  'Oracle Database',
  'Claude',
  'Cursor',
]);

export const DETAILED_CV = {
  summary: [PROFILE.availability, PROFILE.services],
  skills: SKILLS_SECTIONS.map((section) => ({
    ...section,
    groups: section.groups
      .filter((group) => !['Source control', 'IDEs'].includes(group.title))
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) => SELECTED_SKILLS.has(skill)),
      }))
      .filter((group) => group.skills.length > 0),
  })),
  languages: TAG_CARD_DATA.find((group) => group.title === 'Languages')?.tags ?? [],
  thesisLinks: THESIS_LINKS.filter((item) =>
    ['Thesis summary on the faculty site', 'Thesis application source code'].includes(item.label),
  ),
} as const;

export const DETAILED_CV_PROJECTS: Readonly<
  Partial<Record<ExperienceProjectKey, DetailedProject>>
> = {
  hvac: {
    title: 'HVAC monitoring and control',
    technologies: [
      'React',
      'TypeScript',
      'MobX',
      'Tailwind CSS',
      'FIN Framework',
      'Project Haystack',
    ],
    context: [
      'An application for monitoring and controlling HVAC equipment across buildings and sites, developed for a large multinational. It formed part of a hardware and software solution for facilities such as hotels and office buildings.',
    ],
    contributions: [
      'I joined an established team and built frontend sections, components, and controls to match UI designs. I fixed issues as they arose and worked with the specialist domain, technologies, and tools used by the platform.',
    ],
  },
  'warehouse-robotics': {
    title: 'Warehouse robotics',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Docker', 'PostgreSQL'],
    context: [
      'A web application for managing autonomous warehouse robots and fleets. The wider system covered automation, planning, robot orchestration, and computer vision. Several related frontend repositories each contained about 100,000 lines of code, much of it shared across versions.',
    ],
    contributions: [
      'I worked almost exclusively on the frontend, as one of two frontend developers in a project involving several dozen people.',
      'I independently migrated Angular 8 to 18, resolving over a thousand errors and refactoring libraries where necessary. I completed the migration without observed regressions, removing a major blocker for the security audit.',
      'I organized the changes for reuse across related robot and fleet applications and branches. I also implemented client requests, including dock monitoring and truck reception interfaces, pallet stacking support, and other robot operations.',
    ],
  },
  eloqua: {
    title: 'Oracle Eloqua messaging integration',
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'MySQL',
      'Prisma',
      'Jest',
      'OAuth',
      'JWT',
      'Nx',
    ],
    context: [
      'An integration connecting Oracle Eloqua, a B2B marketing automation platform, to a mobile messaging service so users can send SMS and WhatsApp messages within their campaigns. Users configure and monitor the integration through an embedded React interface, implemented as part of the project.',
    ],
    contributions: [
      'I independently built the integration, including the frontend, backend, database, and external API connections. Within broad constraints, including requirements to use JavaScript and MySQL, I made all technical and architectural decisions. I worked from general goals and platform documentation, clarified requirements with the client, and gave regular progress demos.',
      'The roughly 20,000-line application coordinated two-way asynchronous communication between the platforms. Campaigns involved sending hundreds of thousands of messages within a short time frame. I designed the integration to handle these messages and the resulting callbacks and interactions reliably, coordinating concurrent operations and preventing race conditions to avoid losing messages or delivery status updates. The messaging platform sent delivery and failure reports through webhooks, which the integration used to compile campaign statistics.',
      'Once the main functionality was in place, load testing exposed race conditions that I then fixed and covered with regression tests. I added extensive backend tests covering individual units, every endpoint, and complex asynchronous flows. Mockable database and service interfaces kept tests clean and fast. Detailed logging helped diagnose complex issues, including those race conditions, and supported monitoring.',
      'The integration required different authentication methods for its connections to each platform and between its own frontend and backend. I implemented OAuth 2.0 for requests to Oracle Eloqua, OAuth 1.0a for requests from Eloqua, and API keys for the messaging platform. JWT authenticated communication between the embedded frontend and backend. Incoming webhook requests from the messaging platform were authenticated using HTTP Basic Auth.',
    ],
  },
  'electricity-consumption': {
    title: 'Electricity consumption mobile application',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Jest'],
    context: [
      'A mobile application built for a Norwegian client, helping consumers in Norway monitor and manage electricity consumption, choose electricity providers, and view statistics and insights.',
    ],
    contributions: [
      'I worked exclusively on the React Native frontend, implementing screens and features as part of a team of eight developers.',
    ],
  },
  'mobile-fueling': {
    title: 'Mobile fueling operations',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Angular', 'TypeScript', 'NgRx', 'Mocha', 'Nx'],
    context: [
      'A production system supporting the operations of a leading mobile fueling company in California. The company had several hundred employees, with dozens of developers working on its web applications, mobile apps, and shared backend.',
    ],
    contributions: [
      'I spent about 70% of my time on the Node.js backend and 30% on the Angular administration app. My backend work covered all layers, from REST APIs to database access.',
      'I was responsible for parts of the system and occasionally made changes affecting the whole application. I planned and coordinated these changes with developers and project managers, delivering them without significant issues.',
      'I ran production MongoDB migrations using scripts written in JavaScript. Through careful testing and execution, I completed these migrations without errors during my time at the company.',
      'I drove improvements to testing practices and the introduction of a monorepo where practical. I also interviewed, onboarded, and mentored other developers.',
    ],
  },
  insurance: {
    title: 'Insurance platform',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'RxJS',
      'Storybook',
      'Material UI',
      'Jest',
      'Cypress',
    ],
    context: [
      'A web platform for a UK client that connected parties involved in the insurance process and supported searches for insurance schemes. The frontend contained about 100,000 lines of code.',
    ],
    contributions: [
      'The project had been in development for a year and a half when I joined. My work focused exclusively on the frontend. For most of my time on the project, I was the only developer working on it.',
      'At the time I joined, the frontend had numerous bugs and structural issues. I restructured much of it while also developing new features. I refactored application sections, resolved deep-rooted problems with TypeScript typing throughout the codebase, fixed other bugs, rebuilt state management and asynchronous API handling, and reorganized the overall frontend architecture.',
      'I improved the build and development tooling, introduced linting and formatting, and added tests. I achieved good test coverage for utility code, added basic component tests, and wrote a handful of Cypress tests for more complex flows.',
      'I built a component library using Material UI and Storybook that matched the existing application design.',
    ],
  },
  accounting: {
    title: 'Accounting and transactions',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Jest', 'AG Grid'],
    context: [
      'A large accounting and transactions application for a medium-sized Finnish company. It included dozens of screens for viewing and editing financial data, with complex business rules.',
    ],
    contributions: [
      'I worked exclusively on the frontend. A colleague and I joined after limited prototype development. We implemented most of the initial frontend and contributed to architectural decisions.',
      'Within a few months, the frontend team grew to more than ten people. From then on, my work included changes across the application, building subsystems and reusable patterns, developing larger features and screens, and maintenance.',
    ],
  },
  'graveyard-management': {
    title: 'Graveyard management',
    technologies: [
      'Vue',
      'TypeScript',
      'OpenLayers',
      'Kotlin',
      'Spring Boot',
      'PostgreSQL',
      'Liquibase',
      'Jest',
    ],
    context: [
      'A multi-tenant web application for managing graveyards, graves, and information about the deceased and grave owners. Interactive maps showed geospatial data for each grave.',
    ],
    contributions: [
      'I implemented nearly the entire application, both frontend and backend. I built the frontend with Vue, Vuex, Vuetify, and OpenLayers, and wrote unit tests with Jest.',
      'I built the backend with Kotlin and Spring Boot, using Liquibase for schema changes and migrations. I used PostgreSQL in production, an in-memory H2 database for development and testing, and Jasper Reports for PDF reports.',
      "I wrote backend integration tests in Jest and TypeScript. These integration tests covered much of the backend's functionality across all layers, using an in-memory H2 database.",
      'I used Docker and Docker Swarm only in development for automation and deployment experiments. Production deployment was partly manual, with scripts handling most steps.',
    ],
  },
  parking: {
    title: 'Parking payments backend',
    technologies: ['Java', 'REST APIs'],
    context: [
      'A mobile application for the general public to buy parking tickets for parking lots and garages in Zagreb, Croatia.',
    ],
    contributions: [
      "I built the backend's central integration layer, connecting the Android and iOS apps with parking providers, payment processing, and data access.",
      'This included the REST API used by the mobile apps, backend validation, direct integration with parking provider APIs, and integration with payment providers through a component built by another developer.',
    ],
  },
  nias: {
    title: 'National single sign-on integration',
    technologies: ['Java', 'JSP', 'SOAP'],
    context: [
      "An integration with NIAS, Croatia's National Identification and Authentication System, for the Croatian Postal Service.",
    ],
    contributions: [
      'I implemented the entire integration, enabling users to access government services connected to NIAS using credentials issued by the Croatian Postal Service.',
    ],
  },
  'government-payments': {
    title: 'Government payments validation',
    technologies: ['Java', 'JUnit', 'JSON'],
    context: [
      'A reusable component validating payments to the Croatian government, agencies, and local and regional administrations. It checked individual invoice fields and combinations against configurable rules, returning structured errors and warnings.',
    ],
    contributions: [
      'I implemented the component and extensive unit tests in less than two weeks. Requirements came from about 180 pages of rules, supporting tables, and data.',
      'I translated the rules into a JSON configuration of about 3,000 lines and wrote the logic to parse and apply them.',
      'QA found about three failures in 100 manual scenarios. I converted their spreadsheet results to CSV-backed automated tests, fixed the failures, and retained every scenario as regression coverage. No further issues were reported after that.',
    ],
  },
  'eu-roaming': {
    title: 'EU roaming usage and traffic tracking',
    technologies: [
      'Java',
      'Spring Boot',
      'JPA/Hibernate',
      'Querydsl',
      'Liquibase',
      'Jasper Reports',
    ],
    context: [
      "A system for Croatia's largest telecom, providing roaming usage statistics and helping detect abuse during changes to EU roaming rules.",
    ],
    contributions: [
      'I implemented the entire backend for its administration application, from the REST API to the repository layer, and built its reporting system with Jasper Reports.',
    ],
  },
  'e-learning': {
    title: 'E-learning web application',
    technologies: ['AngularJS', 'Java', 'Spring Boot', 'PostgreSQL', 'Video.js', 'Veeting Rooms'],
    context: [
      'A web application for online learning, with video courses and online meetings with whiteboards.',
    ],
    contributions: [
      'I took over the application after limited initial development by others and implemented or rewrote nearly all of it while working toward an MVP. I also handled deployment and collaborated directly with the client to define requirements.',
    ],
  },
  'e-tax': {
    title: 'e-Tax platform',
  },
  'building-permits': {
    title: 'Location and building permits',
  },
  spreadsheet: {
    title: 'Spreadsheet component',
  },
  'damage-analysis': {
    title: 'Nuclear inspection and damage analysis',
  },
  'inspection-robot': {
    title: 'Inspection robot control',
  },
  'fuel-dispenser-web': {
    title: 'Fuel dispenser web application',
  },
  'fuel-dispenser-desktop': {
    title: 'Fuel dispenser desktop application',
  },
  'financial-web': {
    title: 'Financial web applications',
  },
  'body-animation': {
    title: 'Body animation exporter',
  },
};
