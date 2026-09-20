import { EXPERIENCE_START_YEARS } from './profile';
import { EXPERIENCE_PROJECT_ANCHORS } from './project-anchors';
import type { ExperienceEntry } from './types';

export const EXPERIENCE_SECTIONS: readonly ExperienceEntry[] = [
  {
    title: 'Freelance Software Developer / Self-Employed',
    location: 'Remote',
    role: 'Primarily Full-Stack Web Developer',
    from: { year: EXPERIENCE_START_YEARS.contracting, month: 1 },
    to: 'Present',
    projects: [
      {
        title: 'Large HVAC system site monitoring and control web application',
        linkedinHighlight:
          "Built React and TypeScript interfaces and controls for a multinational's HVAC monitoring platform within an established team.",
        detailed: {
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
        concise: {
          title: 'HVAC monitoring and control',
          technologies: ['React', 'TypeScript', 'MobX'],
          context: '',
          contributions: [
            "Built interfaces and controls for a multinational's HVAC monitoring application within an established team.",
          ],
        },
        text: [
          'An application for monitoring and controlling HVAC equipment across buildings and sites, developed for a large multinational. It is part of a complete hardware and software solution for facilities such as hotels and office buildings.',
          'The software development was straightforward for my level of experience. Learning the domain and its specialized technologies and tools took time and patience.',
        ],
        tags: [
          'React',
          'TypeScript',
          'MobX',
          'Tailwind CSS',
          'Jest',
          'ESLint',
          'Prettier',
          'Fantom',
          'FIN Framework',
          'Axon',
          'Project Haystack',
          'Folio',
          'Copilot',
          'Claude',
          'ChatGPT',
        ],
        roleText: [
          'I joined an established team to help with day-to-day web development. I built frontend sections, components, and controls to match UI designs, and fixed issues as they arose or were assigned to me.',
        ],
      },
      {
        id: EXPERIENCE_PROJECT_ANCHORS.robotics,
        title: 'Automated warehouse robotics system web application',
        linkedinHighlight:
          'Independently migrated Angular 8 to 18 in a warehouse robotics frontend of roughly 100,000 lines per repository. Resolved over a thousand errors without observed regressions, removing a major security-audit blocker.',
        detailed: {
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
        concise: {
          title: 'Warehouse robotics',
          technologies: ['Angular', 'TypeScript', 'RxJS'],
          context:
            'Robot and fleet management with roughly 100,000 lines of frontend code per repository.',
          contributions: [
            'Independently migrated Angular 8 to 18, resolving over a thousand errors without observed regressions and removing a major security-audit blocker.',
            'Organized the migration for reuse across related applications and branches.',
          ],
        },
        text: [
          'A web application for managing robots and fleets in a warehouse automation system. The robots handle and move goods in large warehouses, operating autonomously for extended periods.',
          'The system was complex, covering automation, planning, robot orchestration, and computer vision. I worked almost exclusively on the frontend, maintaining several parallel repositories and branches. Each contained about 100,000 lines of code, much of it shared across versions.',
          'Several dozen people worked on the project, with two of us handling the frontend. Neither was clearly senior to the other. My colleague had several years at the company and deeper domain knowledge. I brought broader and deeper software development experience from more years across varied projects, along with a different approach to the work.',
        ],
        tags: [
          'Angular',
          'TypeScript',
          'RxJS',
          'ESLint',
          'Prettier',
          'Python',
          'PostgreSQL',
          'Docker',
          'Copilot',
          'Claude',
          'ChatGPT',
        ],
        roleText: [
          'I joined to improve the frontend, particularly to resolve a major blocker: the Angular migration.',
          "I independently migrated the application from Angular 8 to 18, resolving over a thousand errors and refactoring libraries where necessary. The migration's feasibility was initially uncertain, but I completed it without observed regressions, removing a major blocker for the system's security audit.",
          'I organized the changes so the migration could be repeated across related robot and fleet management applications and branches. I also fixed issues and implemented client requests, including a simpler interface for dock monitoring and truck reception, and frontend support for pallet stacking and related robot operations.',
        ],
      },
      {
        id: EXPERIENCE_PROJECT_ANCHORS.eloqua,
        title: 'Oracle Eloqua to mobile messaging integration',
        linkedinHighlight:
          'Independently built a React/NestJS integration for SMS and WhatsApp campaigns in Oracle Eloqua. Defined the architecture and clarified requirements. Coordinated asynchronous flows involving hundreds of thousands of messages, handled race conditions and authentication, and added extensive backend tests.',
        detailed: {
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
            'An integration connecting Oracle Eloqua to a mobile messaging service, allowing users to send SMS and WhatsApp messages within marketing campaigns. An embedded React interface supported configuration and monitoring.',
          ],
          contributions: [
            'I independently built the frontend, backend, database, and external API integrations. Within platform constraints, I made technical and architectural decisions, clarified requirements with the client, and demonstrated progress.',
            'The roughly 20,000-line application coordinated two-way asynchronous communication. Campaign flows involved hundreds of thousands of messages, callbacks, and delivery reports. I coordinated concurrent operations and prevented race conditions so campaigns could progress without losing messages.',
            'Load testing exposed race conditions that I fixed and covered with regression tests. Backend coverage included unit tests, every endpoint, and complex asynchronous flows. Mockable database and service interfaces kept tests fast, and detailed logging supported diagnosis.',
            'I implemented OAuth 2.0 for requests to Oracle Eloqua, OAuth 1.0a for requests from Eloqua, API keys for the messaging platform, and JWT between the embedded frontend and backend.',
          ],
        },
        concise: {
          title: 'Oracle Eloqua messaging integration',
          technologies: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Jest'],
          context: 'SMS and WhatsApp messaging within marketing campaigns.',
          contributions: [
            'Independently built the integration, defined its architecture, and clarified requirements with the client.',
            'Coordinated asynchronous flows involving hundreds of thousands of messages. Resolved race conditions, implemented multiple authentication protocols, and added extensive backend tests.',
          ],
        },
        text: [
          'An integration connecting Oracle Eloqua, a B2B marketing automation platform, to a mobile messaging service so users could send SMS and WhatsApp messages within their campaigns. An embedded React interface let users configure and monitor the integration.',
        ],
        tags: [
          'React',
          'TypeScript',
          'Redux',
          'redux-observable',
          'RxJS',
          'Tailwind CSS',
          'NestJS',
          'Prisma',
          'Jest',
          'ESLint',
          'Prettier',
          'MySQL',
          'Docker',
          'OAuth 1.0',
          'OAuth 2.0',
          'JWT',
          'Nx (monorepo)',
        ],
        roleText: [
          'I independently built the integration, from the frontend and backend to the database and external APIs. Within broad constraints, such as using JavaScript and MySQL, I made all technical and architectural decisions. I worked from general goals and platform documentation, clarified requirements with the client, gave periodic progress demos and produced the resulting integration.',
          'The roughly 20,000-line application coordinated two-way asynchronous communication between both platforms. Campaign flows involved hundreds of thousands of messages that needed to be processed in a relatively short amount of time, reliably and consistently, along with all of the callbacks and interactions they produced. One of the technical challenges was coordinating concurrent operations and preventing race conditions so campaigns could progress without losing messages. Webhooks supplied delivery and failure reports for statistics.',
          'Load testing exposed race conditions that I fixed and covered with regression tests. I added extensive backend coverage, including unit tests, every endpoint, and complex asynchronous flows. Mockable database and service interfaces kept tests clean and fast, while detailed logging supported debugging and monitoring.',
          'Different connections required separate authentication protocols. For this project, I implemented OAuth 2.0 for requests to Oracle Eloqua, OAuth 1.0a for requests from Eloqua, and API keys for the messaging platform. JWT authenticated communication between the embedded frontend and backend. Incoming messaging webhooks used Basic Auth, as I recall.',
        ],
      },
      {
        title: 'Mobile application for managing electricity consumption',
        detailed: {
          title: 'Electricity consumption mobile application',
          technologies: ['React Native', 'TypeScript', 'Expo', 'Jest'],
          context: [
            'A mobile application for the Norwegian public to monitor consumption, choose electricity providers, and view statistics and insights.',
          ],
          contributions: [
            'I worked exclusively on the React Native frontend in a team of eight developers, implementing screens and features.',
          ],
        },
        text: [
          'A mobile application built for a Norwegian client and intended for the Norwegian public. Users can monitor and manage electricity consumption, choose providers, and view statistics and insights.',
        ],
        tags: ['React Native', 'TypeScript', 'Expo', 'Jest', 'ESLint', 'Prettier'],
        roleText: [
          'I worked exclusively on the React Native frontend as part of a team of eight developers, implementing screens and features.',
        ],
      },
      {
        id: EXPERIENCE_PROJECT_ANCHORS.fueling,
        title: 'Mobile fueling management system',
        linkedinHighlight:
          'Owned Node.js backend subsystems, delivered system-wide changes, and ran production MongoDB migrations for a mobile fueling platform. Also worked on its Angular administration app, improved testing, and interviewed, onboarded, and mentored developers.',
        detailed: {
          title: 'Mobile fueling operations',
          technologies: [
            'Node.js',
            'Express',
            'MongoDB',
            'Angular',
            'TypeScript',
            'NgRx',
            'Mocha',
            'Nx',
          ],
          context: [
            'A production system supporting the operations of a leading mobile fueling company in California. The company had several hundred employees, with dozens of developers working on its web applications, mobile apps, and shared backend.',
          ],
          contributions: [
            'I spent about 70% of my time on the Node.js backend, from REST APIs to the database, and 30% on the Angular administration app.',
            'I owned parts of the system and delivered changes affecting the whole application. Careful planning with developers and project managers allowed these changes to proceed without significant issues.',
            'I ran production MongoDB migrations using JavaScript scripts. Careful testing and execution kept those migrations error-free during my time at the company.',
            'I drove improvements to testing practices and the introduction of a monorepo where practical. I also interviewed, onboarded, and mentored developers.',
          ],
        },
        concise: {
          title: 'Mobile fueling operations',
          technologies: ['Node.js', 'Express', 'MongoDB', 'Angular'],
          context: 'A production platform supporting a large mobile fueling company.',
          contributions: [
            'Owned backend subsystems, delivered system-wide changes, and ran production database migrations. Also worked on the Angular administration app.',
            'Improved testing practices and interviewed, onboarded, and mentored developers.',
          ],
        },
        text: [
          'A large system for managing the business and operations of a leading mobile fueling company in California. At the time, the startup had several hundred employees and was growing exponentially.',
          'Dozens of developers worked on the system, which included Angular and React web applications, iOS and Android apps, and a shared Node.js backend built with Express and MongoDB.',
          "The system was already in production and central to the company's operations.",
        ],
        tags: [
          'Angular',
          'TypeScript',
          'NgRx',
          'Mocha',
          'Express',
          'Nx',
          'ESLint',
          'Prettier',
          'MongoDB',
        ],
        roleText: [
          'I worked across the stack, spending about 70% of my time on the Node.js backend, from the REST API to the database, and 30% on the Angular administration app. I did not work on the mobile apps.',
          'I owned parts of the system and occasionally made changes affecting the whole application. Careful planning and coordination with developers and project managers allowed me to deliver these without significant issues.',
          'I also ran production MongoDB migrations using JavaScript scripts. Errors would have been costly, but careful testing and execution kept these migrations error-free during my time at the company.',
          'I drove improvements to testing practices and the introduction of a monorepo where the codebase allowed it. I also interviewed, onboarded, and mentored developers.',
        ],
      },
      {
        title: 'Insurance web platform',
        detailed: {
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
            'A platform for a UK client connecting parties in the insurance process and supporting searches for insurance schemes. The frontend contained about 100,000 lines of code.',
          ],
          contributions: [
            'I joined after a year and a half of development and worked exclusively on the frontend, mostly as its sole developer.',
            'I refactored application sections, fixed typing issues throughout the codebase, rebuilt state management and asynchronous API handling, and reorganized the frontend architecture.',
            'I improved the build and development tooling, introduced linting and formatting, and added tests. Utility code had good coverage, with basic component coverage and a handful of Cypress tests for larger flows.',
            'I built a Storybook component library around Material UI that matched the existing design, while continuing feature development and bug fixes.',
          ],
        },
        text: [
          'A web platform built for a UK client to connect parties in the insurance process and search for insurance schemes. The frontend alone contained about 100,000 lines of code.',
        ],
        tags: [
          'React',
          'TypeScript',
          'Jest',
          'Webpack',
          'Storybook',
          'React Testing Library',
          'Material UI',
          'Redux',
          'redux-observable',
          'RxJS',
          'Node.js',
          'Cypress',
        ],
        roleText: [
          'I joined after a year and a half of development and worked exclusively on the frontend. For most of my time on the project, I was the only frontend developer.',
          'The frontend needed substantial restructuring, from the UI to the backend API interface. I refactored entire application sections, fixed typing issues throughout the app, rebuilt state management and asynchronous API handling, and reorganized the top-level architecture.',
          'I improved development scripts and the Webpack build, introduced formatting and linting, and added tests. Utility code had good coverage, while component coverage was basic, with a handful of Cypress tests for more complex flows.',
          'Using Storybook, I built a component library around Material UI that matched the existing application design. I also developed features and fixed bugs.',
        ],
      },
      {
        title: 'Accounting web application',
        detailed: {
          title: 'Accounting and transactions',
          technologies: ['Angular', 'TypeScript', 'RxJS', 'Jest', 'AG Grid'],
          context: [
            'A large accounting application for a Finnish company, with dozens of screens containing complex business logic, forms, and data viewing and editing features.',
          ],
          contributions: [
            'A colleague and I joined after limited prototype development and did most of the initial frontend implementation, with room to make architectural decisions.',
            'As the frontend team grew to more than ten developers, I implemented application-wide changes, reusable subsystems and patterns, larger features and screens, and maintenance work.',
          ],
        },
        text: [
          'A large accounting and transactions application for a medium-sized Finnish company, with dozens of screens containing complex business logic and data viewing and editing features.',
        ],
        tags: ['Angular', 'TypeScript', 'Jest', 'RxJS', 'AG Grid'],
        roleText: [
          'I worked exclusively on the frontend. A colleague and I joined after limited prototype development and did most of the initial implementation, with room to make architectural decisions.',
          'Within a few months, the frontend team grew to more than ten people. As a senior developer, I made application-wide changes, implemented subsystems and reusable patterns, built larger features and screens, and handled maintenance.',
        ],
      },
      {
        title: 'Graveyard management web application',
        linkedinHighlight:
          'Built at least 95% of a multi-tenant graveyard management application with Vue, Kotlin/Spring Boot, PostgreSQL, maps, PDF reports, and frontend and backend tests.',
        detailed: {
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
            'A multi-tenant application for managing graveyards, graves, and information about the deceased and grave owners, with interactive maps and geospatial data for each grave.',
          ],
          contributions: [
            'I implemented at least 95% of the application. The frontend used Vue, Vuex, Vuetify, and OpenLayers, with Jest unit tests.',
            'I built the Kotlin/Spring Boot backend, using Liquibase for schema changes and migrations. PostgreSQL served production, while an in-memory H2 database supported development and testing. Jasper Reports produced PDF reports.',
            'I wrote backend integration tests in Jest and TypeScript, exercising the full backend stack and much of its functionality against H2.',
            'I used Docker and Docker Swarm in development for automation and deployment experiments. Production deployment remained partly manual, with scripts handling most steps.',
          ],
        },
        concise: {
          title: 'Graveyard management',
          technologies: ['Vue', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL'],
          context: '',
          contributions: [
            'Built at least 95% of a multi-tenant application with maps and PDF reports. Added frontend unit tests and backend integration tests using Jest and TypeScript.',
          ],
        },
        text: [
          'A small multi-tenant application for managing graveyards, graves, and information about the deceased and grave owners. It included interactive OpenLayers maps with geospatial data for each grave.',
        ],
        tags: [
          'Vue',
          'TypeScript',
          'Vuetify',
          'Vuex',
          'Jest',
          'OpenLayers',
          'Spring Boot',
          'Kotlin',
          'Liquibase',
          'PostgreSQL',
          'H2',
          'Jasper Reports',
          'Docker',
          'Docker Swarm',
        ],
        roleText: [
          'I implemented at least 95% of the application.',
          'The frontend used Vue and TypeScript, Vuex for state management, Vuetify for UI components, OpenLayers for maps, and Jest for unit tests.',
          'I built the backend with Kotlin and Spring Boot, using Liquibase for database setup and migrations. PostgreSQL served production and an in-memory H2 database supported development. Liquibase abstractions made switching between them straightforward. Jasper Reports handled PDF reporting.',
          'As an experiment, I wrote backend integration tests in Jest and TypeScript, tools I found flexible and familiar. The tests exercised the full backend stack, covered much of its functionality, and worked well with an in-memory H2 database.',
          'I used Docker and Docker Swarm only in development to automate tasks and experiment with deployment. Production used a partly manual process: scripts handled most steps, but deployment required a manual action. This was sufficient for the project.',
        ],
      },
      {
        title: 'Parking mobile application',
        detailed: {
          title: 'Parking payments backend',
          technologies: ['Java', 'REST APIs'],
          context: [
            'A public mobile application for buying parking tickets for lots and garages in Zagreb.',
          ],
          contributions: [
            'I built the central message hub connecting system endpoints and forming the top layer of the backend. It exposed the REST API for Android and iOS, validated requests, and integrated directly with parking provider APIs.',
            "It connected to the data access layer and to payment providers through another developer's component. My work was on the backend, not the mobile apps.",
          ],
        },
        text: [
          'A public mobile application for buying parking tickets for lots and garages in Zagreb, Croatia.',
        ],
        tags: ['Java'],
        roleText: [
          'I built the central message hub connecting the system endpoints and forming the top layer of the backend.',
          'This included the REST API for the Android and iOS apps, backend validation, and direct integration with parking provider APIs. It also connected to the data access layer and to payment providers through a component built by another developer.',
          'I did not work on the mobile apps themselves.',
        ],
      },
      {
        title: 'NIAS (SSO system) interface',
        detailed: {
          title: 'National single sign-on integration',
          technologies: ['Java', 'JSP', 'SOAP'],
          context: [
            "An integration with NIAS, Croatia's National Identification and Authentication System, for the Croatian Postal Service.",
          ],
          contributions: [
            "I implemented the entire integration. It allowed existing NIAS users to sign in to the Postal Service's system and enabled the Postal Service to act as a credentials provider for other NIAS services.",
          ],
        },
        text: [
          "NIAS (National Identification and Authentication System) is Croatia's national single sign-on system. Accredited authentication providers include the government, banks, and other trusted organizations.",
          "This project integrated the Croatian Postal Service as a NIAS provider and allowed existing NIAS users to sign in to the Postal Service's system and have their credentials validated.",
        ],
        tags: ['Java', 'JSP', 'SOAP'],
        roleText: ['I implemented the entire project.'],
      },
      {
        title: 'Government payments validation component',
        detailed: {
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
        text: [
          'A Java component (JAR) for validating payments to the Croatian government, agencies, and local and regional administrations.',
          'It accepted structured invoice data and checked individual fields and their combinations, including payment descriptions, destination accounts, dates, and payment references. It returned errors and warnings with details for each issue. The validation rules needed to be easy to update as requirements changed.',
          'Although part of a larger system, the component could be developed and tested independently.',
        ],
        tags: ['Java', 'JUnit'],
        roleText: [
          'I implemented the entire component and extensive unit tests in less than two weeks. The specification contained about 180 pages: roughly 30 pages of rules, followed by supporting tables and data.',
          "I translated those rules into a JSON configuration of about 3,000 lines and wrote the logic to parse and apply it. The component's isolated interface made it straightforward to test the complex validation logic, and I covered all the scenarios I could identify.",
          'QA then tested 100 scenarios manually and found about three failures. I converted their Excel results to CSV and used them to generate automated tests. After fixing the failures, every QA scenario became part of the regression suite. No further issues were reported after that.',
          'I enjoyed this project because the requirements were clear and I could focus on implementation. Thorough testing gave me very high confidence that the code would work reliably despite the complexity of the validation rules.',
        ],
      },
      {
        title: 'EU roaming usage and traffic tracking web application',
        detailed: {
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
        text: [
          "A roaming usage tracking system for Croatia's largest telecom, commissioned during significant changes to EU roaming rules. It provided usage statistics and helped detect abuse.",
        ],
        tags: [
          'Java',
          'Spring Boot',
          'JPA/Hibernate',
          'Querydsl',
          'Liquibase',
          'Jasper Reports',
          'Maven',
        ],
        roleText: [
          'I implemented the entire backend, from the REST API to the repository layer, and built the reporting system using Jasper Reports.',
        ],
      },
      {
        title: 'E-learning web application',
        detailed: {
          title: 'E-learning web application',
          technologies: [
            'AngularJS',
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'Video.js',
            'Veeting Rooms',
          ],
          context: [
            'A web application for online learning, with video courses and online meetings with whiteboards.',
          ],
          contributions: [
            'I took over the application after limited initial development by others and implemented or rewrote nearly all of it while working toward an MVP. I also handled deployment and collaborated directly with the client to define requirements.',
          ],
        },
        text: [
          'A web application for online learning, with video courses and online meetings with whiteboards.',
        ],
        tags: [
          'AngularJS',
          'Java',
          'Spring Boot',
          'JPA/Hibernate',
          'Querydsl',
          'PostgreSQL',
          'Maven',
          'Video.js',
          'Veeting Rooms',
        ],
        roleText: [
          'I took over the application after limited initial development by others and implemented or rewrote nearly all of it while working toward an MVP. I also handled deployment and collaborated directly with the client to define requirements.',
        ],
      },
      {
        title: 'Other projects',
        text: [
          'Examples of smaller client assignments.',
          'A C# and WCF service for exporting Microsoft SQL Server data as JSON.',
          'Urgent fixes to an Alfresco web application shortly before its production deadline.',
          'A Ruby backend for talent acquisition software.',
          'A small React application for talent management and recruitment.',
        ],
        tags: ['C#', 'WCF', 'Ruby', 'React', 'Java', 'Alfresco'],
        roleText: [
          'I built the data export service on my own.',
          'I joined an Alfresco project one or two weeks before its planned production release, with no prior experience of the platform or codebase. During that time, I resolved the issues the client needed fixed. Based on the results, the client commissioned further work on other projects.',
          'The two talent management projects each lasted several weeks. Another developer and I split the work evenly.',
        ],
      },
    ],
  },
  {
    title: 'APIS IT',
    conciseTitle: 'APIS IT',
    conciseSummary:
      'Implemented seven complete e-Tax forms and contributed to about ten others, covering web interfaces, XML, PDF reports, validation, and data access.',
    location: 'Zagreb (Croatia)',
    role: 'C# Developer',
    from: { year: 2013, month: 11 },
    to: { year: 2016, month: 5 },
    projects: [
      {
        title: "Croatia's Ministry of Finance e-Tax web application",
        detailed: { title: 'e-Tax platform' },
        text: [
          "The Croatian Ministry of Finance's official e-Tax web application, used by citizens and businesses to submit tax forms electronically. Already a large application when I worked on it, it received more than one million page views per day.",
          'Alongside other features, it implemented a wide range of tax forms covering different types of tax reporting.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'jQuery', 'Microsoft Reports (.rdlc)', 'IBM DB2'],
        roleText: [
          'I fully implemented seven tax forms that were in production as of March 2016. I also contributed to about ten others, from bug fixes to substantial implementation. The system contained about 25 tax forms in total at the time.',
          'Each form required a web interface, XML import and export, PDF reporting, extensive server-side validation against business and legal rules, and changes to the data access layer.',
        ],
      },
      {
        title: 'Location and building permits web application',
        detailed: { title: 'Location and building permits' },
        text: [
          "A web application for members of the public to submit data for location and building permits, built for Croatia's Ministry of Construction and Physical Planning.",
        ],
        tags: [
          'C#',
          'ASP.NET MVC',
          'jQuery',
          'Fluent Validation',
          'Aspose.Words',
          'Oracle Database',
        ],
        roleText: [
          'I implemented much of the UI, including views, models, and controllers, a substantial part of the business logic, the entire data access layer, and PDF reporting.',
        ],
      },
      {
        title: 'Other projects',
        text: [
          'Two additional large ASP.NET Web Forms applications for employees of the Ministry of Construction and Physical Planning.',
          'WCF and ASMX web services built both as part of these applications and as standalone components of larger systems.',
          'XML processing components for validation, data manipulation, database export to XML, and XML import into databases.',
          'Programs for offline data processing, validation, and error reporting by email.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', '.NET COM', 'WCF'],
        roleText: [
          'I worked across the stack on the two Web Forms applications, which were mainly in maintenance mode. Most tasks were bug fixes and small features, with some larger implementations.',
          'Most of the other components were small projects within larger systems, lasting a few days to a few weeks. I usually implemented them on my own.',
        ],
      },
    ],
  },
  {
    title: 'Gemmeus d.o.o.',
    conciseTitle: 'Gemmeus d.o.o.',
    conciseSummary: 'Developed C# spreadsheet features, including Excel-to-Windows Forms export.',
    location: 'Remote',
    role: 'C# Developer',
    from: { year: 2012, month: 10 },
    to: { year: 2013, month: 1 },
    projects: [
      {
        title: 'Excel component for spreadsheet data manipulation',
        detailed: { title: 'Spreadsheet component' },
        text: [
          'A component for programmatic access to Microsoft Excel spreadsheets, supporting reading, writing, data manipulation, conversion, and printing.',
        ],
        tags: ['C#', 'Web Forms', 'WPF', 'Windows Forms'],
        roleText: [
          'I handled various development tasks, including exporting Excel data to a Windows Forms DataGrid while matching the original content, formatting, and styles as closely as possible.',
        ],
      },
    ],
  },
  {
    title: 'INETEC - Institute for Nuclear Technology d.o.o.',
    conciseTitle: 'INETEC d.o.o.',
    conciseSummary:
      'Built substantial parts of nuclear inspection software: 2D/3D signal charts, multithreaded rendering, signal processing, and persistence.',
    location: 'Zagreb (Croatia)',
    role: 'C# Windows Desktop (WPF) Developer',
    from: { year: 2009, month: 11 },
    to: { year: 2012, month: 10 },
    projects: [
      {
        title: 'Steam generator damage analysis application',
        detailed: { title: 'Nuclear inspection and damage analysis' },
        text: [
          'A large WPF desktop application for operators to review inspection data and analyze damage in nuclear power plant steam generators.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I developed a large part of the application.',
          'I created custom WPF controls for 2D and 3D signal charts and plots. Rendering ran on a separate thread to keep the application responsive during intensive data processing and display.',
          'I worked on data persistence and versioning, signal filtering and mixing, and many WPF views and subsystems, from the UI to the persistence layer.',
        ],
      },
      {
        title: 'Steam generator walker robot command and monitoring application',
        detailed: { title: 'Inspection robot control' },
        text: [
          "A WPF desktop application for controlling and monitoring a prototype robot used in steam generator inspections. It displayed the robot's position and state and complemented hardware and electronic handling of edge cases and failures.",
          'The robot was designed to walk along a steam generator tube wall to position inspection probes, reducing or eliminating operator exposure to ionizing radiation.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I implemented most of the application, including the entire GUI. It consisted mainly of custom graphical controls, with multithreading for the more complex displays to keep the application responsive.',
          'I built or fully rewrote nearly all the backend code down to the electronics controller interface.',
          'Another developer wrote the original controller code in a C-like language. I maintained it and made the required changes and fixes.',
        ],
      },
    ],
  },
  {
    title: 'Ultra d.o.o.',
    conciseTitle: 'Ultra d.o.o.',
    conciseSummary:
      'Built a complete Windows Forms application for fuel-dispenser control, including custom controls and SQLite storage.',
    location: 'Karlovac (Croatia)',
    role: 'C# Windows Desktop and Web Developer',
    from: { year: 2008, month: 10 },
    to: { year: 2009, month: 11 },
    projects: [
      {
        title: 'Fuel dispenser configuration and control web application',
        detailed: { title: 'Fuel dispenser web application' },
        text: [
          'A web application for configuring and monitoring fuel dispenser drivers at fuel stations.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'PostgreSQL'],
        roleText: [
          'I implemented substantial parts of the application and maintained the entire project.',
        ],
      },
      {
        title: 'Fuel dispenser configuration and control desktop application',
        detailed: { title: 'Fuel dispenser desktop application' },
        text: [
          'A desktop application with a similar purpose to the web application, serving different drivers and clients.',
        ],
        tags: ['C#', 'Windows Forms', 'SQLite'],
        roleText: [
          'I built the entire application, with custom controls for displaying and controlling fuel dispenser state and SQLite for storage.',
        ],
      },
      {
        title: 'Various projects',
        text: [
          'Fuel dispenser drivers and small tools for tasks such as regex validation and editing Windows registry entries.',
        ],
        tags: ['C#', 'C++'],
        roleText: [
          'I mainly fixed bugs and handled maintenance. I also built some of the tools in full.',
        ],
      },
    ],
  },
  {
    title: 'Ekobit d.o.o.',
    conciseTitle: 'Ekobit d.o.o.',
    conciseSummary: 'Developed ASP.NET and database features for Croatian financial institutions.',
    location: 'Zagreb (Croatia)',
    role: 'C# Web Developer',
    from: { year: 2008, month: 2 },
    to: { year: 2008, month: 10 },
    projects: [
      {
        title: 'Various projects',
        detailed: { title: 'Financial web applications' },
        text: [
          'Web applications for Croatian financial institutions, including banks, funds, and stock exchanges.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'Microsoft SQL Server'],
        roleText: [
          'I handled small development tasks and bug fixes in the applications and their databases.',
        ],
      },
    ],
  },
  {
    title: 'Visage Technologies (Student Project)',
    location: 'Zagreb (Croatia)',
    role: 'C++ Developer',
    from: { year: 2007, month: 1 },
    to: { year: 2007, month: 8 },
    projects: [
      {
        title: 'Body animation exporter',
        detailed: { title: 'Body animation exporter' },
        text: [
          'An exporter that converted body animations from 3ds Max Biped to MPEG-4 FBA for a larger face and body animation system.',
        ],
        tags: ['C++', '3ds Max SDK'],
        roleText: ['I implemented the entire exporter.'],
      },
    ],
  },
];
