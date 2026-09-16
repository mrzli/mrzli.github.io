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
        text: [
          "NIAS (National Identification and Authentication System) is Croatia's national single sign-on system. Accredited authentication providers include the government, banks, and other trusted organizations.",
          "This project integrated the Croatian Postal Service as a NIAS provider and allowed existing NIAS users to sign in to the Postal Service's system and have their credentials validated.",
        ],
        tags: ['Java', 'JSP', 'SOAP'],
        roleText: ['I implemented the entire project.'],
      },
      {
        title: 'Government payments validation component',
        text: [
          'A Java component (JAR) for validating payments to the Croatian government, agencies, and local and regional administrations.',
          'It checked invoice fields individually and in combination, including descriptions, destination accounts, dates, and the "model" and "call-to-number" fields. The rules needed to be easy to reconfigure when requirements changed.',
          'The component belonged to a larger system but could be developed and tested independently. It accepted structured invoice data and returned validation errors and warnings with details for each issue.',
          'Requirements came from a document of about 180 pages: roughly 30 pages of rules, with supporting tables and data making up the rest.',
        ],
        tags: ['Java', 'JUnit'],
        roleText: [
          'I implemented the entire component in less than two weeks, including extensive unit tests. As I recall, it contained a few thousand lines of code. Clear requirements and no legacy constraints made it one of my favorite projects.',
          'I translated the requirements into a JSON configuration file of about 3,000 lines, then wrote the code to parse it and apply the validation rules.',
          'The complex logic and isolated interface made unit tests especially useful and straightforward to write. I covered all the scenarios I could identify.',
          'Detailed manual testing by QA found about three failures in 100 scenarios. The results arrived in a well-structured Excel file, which I converted to CSV and used to generate automated tests. I fixed the three failures and gained regression coverage for every scenario QA had checked.',
          'No further issues were reported while I worked for the client. Further QA results in the same format could have been added to the CSV to extend coverage. Having a repeatable way to turn manual checks into regression tests made this work particularly satisfying.',
        ],
      },
      {
        title: 'EU roaming usage and traffic tracking web application',
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
          'I worked exclusively on the backend. I believe the frontend used AngularJS, but I was not involved in it.',
          'I implemented the entire backend, from the REST API to the repository layer, and the reporting system using Jasper Reports.',
        ],
      },
      {
        title: 'E-learning web application (MVP)',
        text: [
          'An online learning MVP with video courses and online meetings with whiteboards. It had not yet become a full commercial product.',
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
          'After some initial work by other developers, I implemented the rest of the application. I also handled deployment, communicated with clients, and helped define requirements.',
        ],
      },
      {
        title: 'Other projects',
        text: [
          'A C# and WCF service for exporting Microsoft SQL Server data as JSON.',
          'Urgent fixes to an Alfresco web application shortly before its production deadline.',
          'A Ruby backend for talent acquisition software.',
          'A small React application for talent management and recruitment.',
        ],
        tags: ['C#', 'WCF', 'Ruby', 'React', 'Java', 'Alfresco'],
        roleText: [
          'I built the data export service on my own.',
          'I joined the Alfresco project one or two weeks before production, with no prior knowledge of its codebase or platform. I spent a couple of weeks fixing the issues the client needed resolved. The client was satisfied, which led to further work. This kind of last-minute assignment is unusual for me and not work I would normally accept.',
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
        text: [
          'A large application with more than one million daily views, allowing Croatian citizens and businesses to submit tax forms electronically. It supported many types of tax reporting alongside other features, with form submission probably its main use case.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'jQuery', 'Microsoft Reports (.rdlc)', 'IBM DB2'],
        roleText: [
          'I fully implemented seven tax forms in production as of March 2016 and contributed to about ten others, from bug fixes to substantial implementation. The system contained about 25 forms at the time.',
          'Each form required a web interface, XML import and export, PDF reporting, extensive server-side validation against business and legal rules, and changes to the data access layer.',
        ],
      },
      {
        title: 'Location and building permits web application',
        text: [
          "A relatively simple public application for submitting data for location and building permits, built for Croatia's Ministry of Construction and Physical Planning.",
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
          'Two large ASP.NET Web Forms applications for employees of the Ministry of Construction and Physical Planning, separate from the public permits application.',
          'WCF and ASMX web services, both within these projects and as standalone components of larger systems.',
          'XML processing components for validation, data manipulation, database export to XML, and XML import into databases.',
          'Programs for offline data processing, validation, and error reporting by email.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', '.NET COM', 'WCF'],
        roleText: [
          'I worked across the stack on the two Web Forms applications, which were mainly in maintenance. Most tasks were bug fixes and small features, with some larger implementations.',
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
        text: [
          'A prototype robot for positioning inspection probes could walk along a steam generator tube wall, reducing or eliminating operator exposure to ionizing radiation.',
          'The WPF desktop application controlled the robot, displayed its position, monitored its state, and complemented hardware and electronic handling of edge cases and failures.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I implemented most of the application, including the entire GUI. It consisted mainly of custom graphical controls, with multithreading for the more complex displays to keep the application responsive.',
          'I built or fully rewrote nearly all the backend code down to the electronics controller interface.',
          'Another developer wrote the original controller code in a C-like language. I maintained it and made the required changes and fixes.',
        ],
      },
      {
        title: 'Other projects',
        text: ['Other applications used in the nuclear inspection process.'],
        tags: ['C#'],
        roleText: ['My work was mainly bug fixes.'],
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
        text: [
          'An exporter that converted body animations from 3ds Max Biped to MPEG-4 FBA for a larger face and body animation system.',
        ],
        tags: ['C++', '3ds Max SDK'],
        roleText: ['I implemented the entire exporter.'],
      },
    ],
  },
];
