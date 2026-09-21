import { EXPERIENCE_START_YEARS } from './profile';
import { EXPERIENCE_PROJECT_ANCHORS } from './project-anchors';
import type { ExperienceEntry } from './types';

export const EXPERIENCE_SECTIONS: readonly ExperienceEntry[] = [
  {
    contentKey: 'contracting',
    title: 'Freelance Software Developer / Self-Employed',
    location: 'Remote',
    role: 'Primarily Full-Stack Web Developer',
    from: { year: EXPERIENCE_START_YEARS.contracting, month: 1 },
    to: 'Present',
    projects: [
      {
        contentKey: 'hvac',
        title: 'Large HVAC system site monitoring and control web application',
        text: [
          'An application for monitoring and controlling HVAC equipment across buildings and sites, developed for a large multinational. It is part of a complete hardware and software solution for facilities such as hotels and office buildings.',
          'The software development was straightforward for my level of experience. Learning the domain and its specialized technologies and tools took time and patience.',
        ],
        roleText: [
          'I joined an established team to help with day-to-day web development. I built frontend sections, components, and controls to match UI designs, and fixed issues as they arose or were assigned to me.',
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
      },
      {
        id: EXPERIENCE_PROJECT_ANCHORS.robotics,
        contentKey: 'warehouse-robotics',
        title: 'Warehouse robotics web application',
        text: [
          'A web application for monitoring and managing fleets of autonomous warehouse robots.',
          'The application is part of a larger warehouse automation product. The product combines physical robots with a large stack of software components that enable autonomous warehouse operations. The web application provides the user interface to this system.',
          'This entire system is a very large project developed by dozens of people.',
          'I worked almost exclusively on the frontend, maintaining several parallel repositories and branches. Each contained about 100,000 lines of code, much of it shared across versions.',
          'Several dozen people worked on the project, with two of us handling the frontend. Neither was clearly senior to the other. My colleague had several years at the company and deeper domain knowledge. I brought broader and deeper software development experience from more years across varied projects, along with a different approach to the work.',
        ],
        roleText: [
          'I joined to improve the frontend, particularly to resolve a major blocker: the Angular migration.',
          "I independently migrated the application from Angular 8 to 18, resolving over a thousand errors and refactoring libraries where necessary. The migration's feasibility was initially uncertain, but I completed it without observed regressions, removing a major blocker for the system's security audit.",
          'I organized the changes so the migration could be repeated across related robot and fleet management applications and branches. I also fixed issues and implemented client requests, including a simpler interface for dock monitoring and truck reception, and frontend support for pallet stacking and related robot operations.',
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
      },
      {
        id: EXPERIENCE_PROJECT_ANCHORS.eloqua,
        contentKey: 'eloqua',
        title: 'Oracle Eloqua to mobile messaging integration',
        text: [
          'An integration connecting Oracle Eloqua, a B2B marketing automation platform, to a mobile messaging service so users can send SMS and WhatsApp messages within their campaigns. Users configure and monitor the integration through an embedded React interface, implemented as part of the project.',
        ],
        roleText: [
          'I independently built the integration, including the frontend, backend, database, and external API connections. Within broad constraints, including requirements to use JavaScript and MySQL, I made all technical and architectural decisions. I worked from general goals and platform documentation, clarified requirements with the client, and gave regular progress demos.',
          'The roughly 20,000-line application coordinated two-way asynchronous communication between the platforms. Campaigns involved sending hundreds of thousands of messages within a short time frame. I designed the integration to handle these messages and the resulting callbacks and interactions reliably, coordinating concurrent operations and preventing race conditions to avoid losing messages or delivery status updates. The messaging platform sent delivery and failure reports through webhooks, which the integration used to compile campaign statistics.',
          'Once the main functionality was in place, load testing exposed race conditions that I then fixed and covered with regression tests. I added extensive backend tests covering individual units, every endpoint, and complex asynchronous flows. Mockable database and service interfaces kept tests clean and fast. Detailed logging helped diagnose complex issues, including those race conditions, and supported monitoring.',
          'The integration required different authentication methods for its connections to each platform and between its own frontend and backend. I implemented OAuth 2.0 for requests to Oracle Eloqua, OAuth 1.0a for requests from Eloqua, and API keys for the messaging platform. JWT authenticated communication between the embedded frontend and backend. Incoming webhook requests from the messaging platform were authenticated using HTTP Basic Auth.',
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
      },
      {
        contentKey: 'electricity-consumption',
        title: 'Electricity consumption mobile application',
        text: [
          'A mobile application built for a Norwegian client, helping consumers in Norway monitor and manage electricity consumption, choose electricity providers, and view statistics and insights.',
        ],
        roleText: [
          'I worked exclusively on the React Native frontend, implementing screens and features as part of a team of eight developers.',
        ],
        tags: ['React Native', 'TypeScript', 'Expo', 'Jest', 'ESLint', 'Prettier'],
      },
      {
        id: EXPERIENCE_PROJECT_ANCHORS.fueling,
        contentKey: 'mobile-fueling',
        title: 'Mobile fueling management system',
        text: [
          'A production system central to the business and operations of a leading mobile fueling company in California. At the time, the company had several hundred employees and was growing rapidly.',
          'Dozens of developers worked on this system, which included Angular and React web applications, iOS and Android apps, and a shared backend using Node.js, Express, and MongoDB.',
        ],
        roleText: [
          'I worked across the stack, spending about 70% of my time on the Node.js backend and 30% on the Angular administration app. My backend work covered all layers, from REST APIs to database access.',
          'I was responsible for parts of the system and occasionally made changes affecting the whole application. I planned and coordinated these changes with developers and project managers, delivering them without significant issues.',
          'I also ran production MongoDB migrations using scripts written in JavaScript. Through careful testing and execution, I completed these migrations without errors during my time at the company.',
          'I drove improvements to testing practices and the introduction of a monorepo where the codebase allowed it. I also interviewed, onboarded, and mentored other developers.',
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
      },
      {
        contentKey: 'insurance',
        title: 'Insurance web platform',
        text: [
          'A web platform for a UK client that connected parties involved in the insurance process and supported searches for insurance schemes. The frontend contained about 100,000 lines of code.',
        ],
        roleText: [
          'The project had been in development for a year and a half when I joined. My work focused exclusively on the frontend. For most of my time on the project, I was the only developer working on it.',
          'At the time I joined, the frontend had numerous bugs and structural issues. I restructured much of it, from the UI to API integration, while also developing new features. This included refactoring entire application sections, resolving deep-rooted problems with TypeScript typing throughout the codebase, fixing other bugs, rebuilding state management and asynchronous API handling, and reorganizing the overall frontend architecture.',
          'I improved development scripts and the Webpack build, introduced formatting and linting, and added tests. I achieved good test coverage for utility code, added basic component tests, and wrote a handful of Cypress tests for more complex flows.',
          'I built a component library using Material UI and Storybook that matched the existing application design.',
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
      },
      {
        contentKey: 'accounting',
        title: 'Accounting web application',
        text: [
          'A large accounting and transactions application for a medium-sized Finnish company. It included dozens of screens for viewing and editing financial data, with complex business rules.',
        ],
        roleText: [
          'I worked exclusively on the frontend. A colleague and I joined after limited prototype development. We implemented most of the initial frontend and contributed to architectural decisions.',
          'Within a few months, the frontend team grew to more than ten people. From then on, my work included changes across the application, building subsystems and reusable patterns, developing larger features and screens, and maintenance.',
        ],
        tags: ['Angular', 'TypeScript', 'Jest', 'RxJS', 'AG Grid'],
      },
      {
        contentKey: 'graveyard-management',
        title: 'Graveyard management web application',
        text: [
          'A multi-tenant web application for managing graveyards, graves, and information about the deceased and grave owners. Interactive maps showed geospatial data for each grave.',
        ],
        roleText: [
          'I implemented nearly the entire application, both frontend and backend.',
          'I built the frontend with Vue and TypeScript, using Vuex for state management, Vuetify for UI components, and OpenLayers for maps. I wrote unit tests with Jest.',
          'I built the backend with Kotlin and Spring Boot, using Liquibase for database setup and migrations. I used PostgreSQL in production and an in-memory H2 database for development and testing. Liquibase made switching between the databases straightforward. I generated PDF reports with Jasper Reports.',
          "As an experiment, I wrote backend integration tests in Jest and TypeScript because I found these tools flexible and familiar. These integration tests covered much of the backend's functionality across all layers, using an in-memory H2 database.",
          'I used Docker and Docker Swarm only in development for automation and deployment experiments. Production deployment was partly manual, with scripts handling most steps.',
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
      },
      {
        contentKey: 'parking',
        title: 'Parking mobile application',
        text: [
          'A mobile application for the general public to buy parking tickets for parking lots and garages in Zagreb, Croatia.',
        ],
        roleText: [
          "I built the backend's central integration layer, connecting the Android and iOS apps with parking providers, payment processing, and data access.",
          'This included the REST API used by the mobile apps, backend validation, direct integration with parking provider APIs, and integration with payment providers through a component built by another developer.',
        ],
        tags: ['Java'],
      },
      {
        contentKey: 'nias',
        title: 'NIAS single sign-on integration',
        text: [
          "NIAS (National Identification and Authentication System) is Croatia's national single sign-on system. It supports authentication through accredited providers, including government institutions, banks, and other trusted organizations.",
          'This integration enabled users to access government services connected to NIAS using credentials issued by the Croatian Postal Service.',
        ],
        roleText: ['I implemented the entire integration.'],
        tags: ['Java', 'JSP', 'SOAP'],
      },
      {
        contentKey: 'government-payments',
        title: 'Government payments validation component',
        text: [
          'A Java component (JAR) for validating payments to the Croatian government, agencies, and local and regional administrations.',
          'It accepted structured invoice data and checked individual fields and their combinations, including payment descriptions, destination accounts, dates, and payment references. It returned errors and warnings with details for each issue. The validation rules needed to be easy to update as requirements changed.',
          'Although part of a larger system, the component could be developed and tested independently.',
        ],
        roleText: [
          'I implemented the entire component and extensive unit tests in less than two weeks. The specification contained about 180 pages: roughly 30 pages of rules, followed by supporting tables and data.',
          "I translated those rules into a JSON configuration of about 3,000 lines and wrote the logic to parse and apply it. The component's isolated interface made it straightforward to test the complex validation logic, and I covered all the scenarios I could identify.",
          'QA then tested 100 scenarios manually and found about three failures. I converted their Excel results to CSV and used them to generate automated tests. After fixing the failures, every QA scenario became part of the regression suite. No further issues were reported after that.',
          'I enjoyed this project because the requirements were clear and I could focus on implementation. Thorough testing gave me very high confidence that the code would work reliably despite the complexity of the validation rules.',
        ],
        tags: ['Java', 'JUnit'],
      },
      {
        contentKey: 'eu-roaming',
        title: 'EU roaming usage and traffic tracking web application',
        text: [
          "A roaming usage tracking system for Croatia's largest telecom, commissioned during significant changes to EU roaming rules. It provided usage statistics and helped detect abuse.",
        ],
        roleText: [
          'I implemented the entire backend, from the REST API to the repository layer, and built the reporting system using Jasper Reports.',
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
      },
      {
        contentKey: 'e-learning',
        title: 'E-learning web application',
        text: [
          'A web application for online learning, with video courses and online meetings with whiteboards.',
        ],
        roleText: [
          'I took over the application after limited initial development by others and implemented or rewrote nearly all of it while working toward an MVP. I also handled deployment and collaborated directly with the client to define requirements.',
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
      },
      {
        contentKey: 'other-contracts',
        title: 'Other projects',
        text: [
          'Examples of smaller client assignments.',
          'A C# and WCF service for exporting Microsoft SQL Server data as JSON.',
          'Urgent fixes to an Alfresco web application shortly before its production deadline.',
          'A Ruby backend for talent acquisition software.',
          'A small React application for talent management and recruitment.',
        ],
        roleText: [
          'I built the data export service on my own.',
          'I joined an Alfresco project one or two weeks before its planned production release, with no prior experience of the platform or codebase. During that time, I resolved the issues the client needed fixed. Based on the results, the client commissioned further work on other projects.',
          'The two talent management projects each lasted several weeks. Another developer and I split the work evenly.',
        ],
        tags: ['C#', 'WCF', 'Ruby', 'React', 'Java', 'Alfresco'],
      },
    ],
  },
  {
    contentKey: 'apis-it',
    title: 'APIS IT',
    location: 'Zagreb (Croatia)',
    role: 'C# Developer',
    from: { year: 2013, month: 11 },
    to: { year: 2016, month: 5 },
    projects: [
      {
        contentKey: 'e-tax',
        title: "Croatia's Ministry of Finance e-Tax web application",
        text: [
          "The Croatian Ministry of Finance's official e-Tax web application, used by citizens and businesses to submit tax forms electronically. Already a large application when I worked on it, it received more than one million page views per day.",
          'Alongside other features, it implemented a wide range of tax forms covering different types of tax reporting.',
        ],
        roleText: [
          'I fully implemented seven tax forms that were in production as of March 2016. I also contributed to about ten others, from bug fixes to substantial implementation. The system contained about 25 tax forms in total at the time.',
          'Each form required a web interface, XML import and export, PDF reporting, extensive server-side validation against business and legal rules, and changes to the data access layer.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'jQuery', 'Microsoft Reports (.rdlc)', 'IBM DB2'],
      },
      {
        contentKey: 'building-permits',
        title: 'Location and building permits web application',
        text: [
          "A web application for members of the public to submit data for location and building permits, built for Croatia's Ministry of Construction and Physical Planning.",
        ],
        roleText: [
          'I implemented much of the UI, including views, models, and controllers, a substantial part of the business logic, the entire data access layer, and PDF reporting.',
        ],
        tags: [
          'C#',
          'ASP.NET MVC',
          'jQuery',
          'Fluent Validation',
          'Aspose.Words',
          'Oracle Database',
        ],
      },
      {
        contentKey: 'other-apis',
        title: 'Other projects',
        text: [
          'Two additional large ASP.NET Web Forms applications for employees of the Ministry of Construction and Physical Planning.',
          'WCF and ASMX web services built both as part of these applications and as standalone components of larger systems.',
          'XML processing components for validation, data manipulation, database export to XML, and XML import into databases.',
          'Programs for offline data processing, validation, and error reporting by email.',
        ],
        roleText: [
          'I worked across the stack on the two Web Forms applications, which were mainly in maintenance mode. Most tasks were bug fixes and small features, with some larger implementations.',
          'Most of the other components were small projects within larger systems, lasting a few days to a few weeks. I usually implemented them on my own.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', '.NET COM', 'WCF'],
      },
    ],
  },
  {
    contentKey: 'gemmeus',
    title: 'Gemmeus d.o.o.',
    location: 'Remote',
    role: 'C# Developer',
    from: { year: 2012, month: 10 },
    to: { year: 2013, month: 1 },
    projects: [
      {
        contentKey: 'spreadsheet',
        title: 'Excel component for spreadsheet data manipulation',
        text: [
          'A component for programmatic access to Microsoft Excel spreadsheets, supporting reading, writing, data manipulation, conversion, and printing.',
        ],
        roleText: [
          'I handled various development tasks, including exporting Excel data to a Windows Forms DataGrid while matching the original content, formatting, and styles as closely as possible.',
        ],
        tags: ['C#', 'Web Forms', 'WPF', 'Windows Forms'],
      },
    ],
  },
  {
    contentKey: 'inetec',
    title: 'INETEC - Institute for Nuclear Technology d.o.o.',
    location: 'Zagreb (Croatia)',
    role: 'C# Windows Desktop (WPF) Developer',
    from: { year: 2009, month: 11 },
    to: { year: 2012, month: 10 },
    projects: [
      {
        contentKey: 'damage-analysis',
        title: 'Steam generator damage analysis application',
        text: [
          'A large WPF desktop application for operators to review inspection data and analyze damage in nuclear power plant steam generators.',
        ],
        roleText: [
          'I developed a large part of the application.',
          'I created custom WPF controls for 2D and 3D signal charts and plots. Rendering ran on a separate thread to keep the application responsive during intensive data processing and display.',
          'I worked on data persistence and versioning, signal filtering and mixing, and many WPF views and subsystems, from the UI to the persistence layer.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
      },
      {
        contentKey: 'inspection-robot',
        title: 'Steam generator walker robot command and monitoring application',
        text: [
          "A WPF desktop application for controlling and monitoring a prototype robot used in steam generator inspections. It displayed the robot's position and state and complemented hardware and electronic handling of edge cases and failures.",
          'The robot was designed to walk along a steam generator tube wall to position inspection probes, reducing or eliminating operator exposure to ionizing radiation.',
        ],
        roleText: [
          'I implemented most of the application, including the entire GUI. It consisted mainly of custom graphical controls, with multithreading for the more complex displays to keep the application responsive.',
          'I built or fully rewrote nearly all the backend code down to the electronics controller interface.',
          'Another developer wrote the original controller code in a C-like language. I maintained it and made the required changes and fixes.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
      },
    ],
  },
  {
    contentKey: 'ultra',
    title: 'Ultra d.o.o.',
    location: 'Karlovac (Croatia)',
    role: 'C# Windows Desktop and Web Developer',
    from: { year: 2008, month: 10 },
    to: { year: 2009, month: 11 },
    projects: [
      {
        contentKey: 'fuel-dispenser-web',
        title: 'Fuel dispenser configuration and control web application',
        text: [
          'A web application for configuring and monitoring fuel dispenser drivers at fuel stations.',
        ],
        roleText: [
          'I implemented substantial parts of the application and maintained the entire project.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'PostgreSQL'],
      },
      {
        contentKey: 'fuel-dispenser-desktop',
        title: 'Fuel dispenser configuration and control desktop application',
        text: [
          'A desktop application with a similar purpose to the web application, serving different drivers and clients.',
        ],
        roleText: [
          'I built the entire application, with custom controls for displaying and controlling fuel dispenser state and SQLite for storage.',
        ],
        tags: ['C#', 'Windows Forms', 'SQLite'],
      },
      {
        contentKey: 'other-ultra',
        title: 'Various projects',
        text: [
          'Fuel dispenser drivers and small tools for tasks such as regex validation and editing Windows registry entries.',
        ],
        roleText: [
          'I mainly fixed bugs and handled maintenance. I also built some of the tools in full.',
        ],
        tags: ['C#', 'C++'],
      },
    ],
  },
  {
    contentKey: 'ekobit',
    title: 'Ekobit d.o.o.',
    location: 'Zagreb (Croatia)',
    role: 'C# Web Developer',
    from: { year: 2008, month: 2 },
    to: { year: 2008, month: 10 },
    projects: [
      {
        contentKey: 'financial-web',
        title: 'Various projects',
        text: [
          'Web applications for Croatian financial institutions, including banks, funds, and stock exchanges.',
        ],
        roleText: [
          'I handled small development tasks and bug fixes in the applications and their databases.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'Microsoft SQL Server'],
      },
    ],
  },
  {
    contentKey: 'visage',
    title: 'Visage Technologies (Student Project)',
    location: 'Zagreb (Croatia)',
    role: 'C++ Developer',
    from: { year: 2007, month: 1 },
    to: { year: 2007, month: 8 },
    projects: [
      {
        contentKey: 'body-animation',
        title: 'Body animation exporter',
        text: [
          'An exporter that converted body animations from 3ds Max Biped to MPEG-4 FBA for a larger face and body animation system.',
        ],
        roleText: ['I implemented the entire exporter.'],
        tags: ['C++', '3ds Max SDK'],
      },
    ],
  },
];
